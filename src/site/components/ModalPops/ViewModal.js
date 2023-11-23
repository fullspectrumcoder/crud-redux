import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";

const ViewModal = (props) => {
  let { productViewModal, closeViewModal } = props;

  const productItem = useSelector(({ ProductState }) => {
    return ProductState.itemView;
  });

  return (
    <>
      {productViewModal === true ? (
        <div className={productViewModal === true ? "modal open" : "modal"}>
          <div className="modal-content">
            <div className="modal-container">
              <div className="modal-header">
                <h1>View Product</h1>
                <div className="closeIcon" onClick={closeViewModal}>
                  <MdOutlineClose />
                </div>
              </div>
              <div className="modal-body">
                <ul className="viewList">
                  <li>
                    <span>User Name: </span> {productItem.userName}
                  </li>
                  <li>
                    <span>User Email: </span> {productItem.email}
                  </li>
                  <li>
                    <span>Product Name: </span> {productItem.name}
                  </li>
                  <li>
                    <span>Product Description: </span> {productItem.description}
                  </li>
                  <li>
                    <span>Product Price: </span> {productItem.price}
                  </li>
                </ul>
              </div>
              <div className="flexBtn">
                <button
                  className="btn-modal btn-cancel"
                  onClick={closeViewModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className={
          productViewModal === true ? "modal-backdrop show" : "modal-backdrop"
        }
      ></div>
    </>
  );
};

export default ViewModal;
