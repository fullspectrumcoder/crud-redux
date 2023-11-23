import React, { useEffect, useState } from "react";
import { MdOutlineModeEditOutline, MdOutlineClose } from "react-icons/md";
import DeleteModal from "../components/ModalPops/DeleteModal";
import EditModal from "../components/ModalPops/EditModal";
import { FiSearch } from "react-icons/fi";
import {
  fetchLists,
  deleteItem,
  viewProductItem,
  updateProductItem,
} from "../../store/actions/all-actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";

const MyProducts = (props) => {
  let { user } = props;
  const [searchInput, setSearchInput] = useState("");
  const [productDeleteModal, setProductDeleteModal] = useState(false);
  const [productEditModal, setProductEditModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const dispatch = useDispatch();

  const productList = useSelector(({ ProductState }) => {
    return ProductState.datalist;
  });

  useEffect(() => {
    let fetchList = localStorage.getItem("List");
    fetchList = JSON.parse(fetchList);
    if (fetchList !== null) {
      dispatch(fetchLists(fetchList));
    } else {
      let emptyStr = JSON.stringify([]);
      localStorage.setItem("List", emptyStr);
    }
  }, []);

  useEffect(() => {
    if (productList && productList.length !== 0) {
      for (let i = 0; i < productList.length; i++) {
        if (user.email !== productList[i].email) {
          setErrorMessage(true);
        } else {
          setErrorMessage(false);
          break;
        }
      }
    } else if (productList && productList.length === 0) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }, [productList]);

  const openDeleteModal = (item, index) => {
    dispatch(viewProductItem(item, index));
    setProductDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setProductDeleteModal(false);
  };

  const onDelete = (item, key) => {
    dispatch(deleteItem(item, key));
    setProductDeleteModal(false);
  };

  const openEditModal = (item, index) => {
    dispatch(viewProductItem(item, index));
    setProductEditModal(true);
    setUpdateData({
      name: item.name,
      description: item.description,
      price: item.price,
    });
  };

  const getUpdateData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUpdateData({ ...updateData, [name]: value });
  };

  const closeEditModal = () => {
    setProductEditModal(false);
  };

  const onUpdate = (item, key) => {
    let updateItem = {
      name: updateData.name,
      description: updateData.description,
      price: updateData.price,
      email: item.email,
      userName: item.userName,
      timeStamp: new Date().toLocaleTimeString(),
    };
    dispatch(updateProductItem(updateItem, key, item));
    setUpdateData({
      name: "",
      description: "",
      price: "",
    });
    setProductEditModal(false);
  };

  return (
    <>
      <div className="flexHead">
        <h2>My Product</h2>
        <div className="inputSearch">
          <input
            type="text"
            placeholder="Search here..."
            className="searchInput"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="searchList">
            <FiSearch />
          </span>
        </div>
      </div>
      <div className="listing">
        <div className="table-responsive">
          <table className="table-block table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>User Name</th>
                <th>User By</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>

            <tbody>
              {productList
                .sort()
                .filter((list) => {
                  if (searchInput === "") return list;
                  else if (
                    list.name.toLowerCase().includes(searchInput.toLowerCase())
                  )
                    return list;
                  else if (
                    list.description
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  )
                    return list;
                  else if (list.price.includes(searchInput)) return list;
                })
                .filter((e) => e.email === user.email)
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        <p
                          className="edit"
                          onClick={() => openEditModal(item, index)}
                        >
                          <MdOutlineModeEditOutline />
                        </p>
                        <p
                          className="delete"
                          onClick={() => openDeleteModal(item, index)}
                        >
                          <MdOutlineClose />
                        </p>
                      </td>
                    </tr>
                  );
                })}
              {errorMessage ? (
                <tr>
                  <td colSpan={7}>Data Not Added</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteModal
        productDeleteModal={productDeleteModal}
        closeDeleteModal={closeDeleteModal}
        onDelete={onDelete}
      />

      <EditModal
        productEditModal={productEditModal}
        closeEditModal={closeEditModal}
        updateData={updateData}
        getUpdateData={getUpdateData}
        onUpdate={onUpdate}
      />
    </>
  );
};

export default MyProducts;
