import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";

const DeleteModal = (props) => {
  let { productDeleteModal, closeDeleteModal, onDelete } = props;

  const productItem = useSelector(({ ProductState }) => {
    return ProductState.itemView;
  });
  const productKey = useSelector(({ ProductState }) => {
    return ProductState.itemKey;
  });

  return (
    <>
      {productDeleteModal === true ? (
        <div className={productDeleteModal === true ? "modal open" : "modal"}>
          <div className="modal-content">
            <div className="modal-container">
              <div className="modal-header">
                <h1>Delete Confirmation</h1>
                <div className="closeIcon" onClick={closeDeleteModal}>
                  <MdOutlineClose />
                </div>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure! you want to delete the <b>{productItem.name}</b>{" "}
                  product?
                </p>
              </div>
              <div className="flexBtn">
                <button
                  className="btn-modal btn-cancel"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  className="btn-modal btn-delete"
                  onClick={() => onDelete(productItem, productKey)}
                >
                  Delete
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
          productDeleteModal === true ? "modal-backdrop show" : "modal-backdrop"
        }
      ></div>
    </>
  );
};

export default DeleteModal;
