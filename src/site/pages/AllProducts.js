import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import ViewModal from "../components/ModalPops/ViewModal";
import {
  fetchLists,
  viewProductItem,
} from "../../store/actions/all-actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productViewModal, setProductViewModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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
    if (productList && productList.length === 0) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }, [productList]);

  const openViewModal = (item, key) => {
    dispatch(viewProductItem(item, key));
    setProductViewModal(true);
  };

  const closeViewModal = () => {
    setProductViewModal(false);
  };

  return (
    <>
      <div className="flexHead">
        <h2>All Product</h2>
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
                .sort()
                .map((item, id) => {
                  return (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        <p
                          className="view"
                          onClick={() => openViewModal(item, id)}
                        >
                          <BsEye />
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
      <ViewModal
        productViewModal={productViewModal}
        closeViewModal={closeViewModal}
      />
    </>
  );
};

export default AllProducts;
