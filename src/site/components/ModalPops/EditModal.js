import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";

const EditModal = (props) => {
  let {
    productEditModal,
    closeEditModal,
    updateData,
    getUpdateData,
    onUpdate,
  } = props;

  const productItem = useSelector(({ ProductState }) => {
    return ProductState.itemView;
  });

  const productKey = useSelector(({ ProductState }) => {
    return ProductState.itemKey;
  });

  return (
    <>
      {productEditModal === true ? (
        <div className={productEditModal === true ? "modal open" : "modal"}>
          <div className="modal-content">
            <div className="modal-container">
              <div className="modal-header">
                <h1>Update Product</h1>
                <div className="closeIcon" onClick={closeEditModal}>
                  <MdOutlineClose />
                </div>
              </div>
              <div className="modal-body">
                <div className="updateProduct form">
                  <div className="form-group">
                    <input
                      type={"text"}
                      name="name"
                      className="input"
                      placeholder="Plaese enter your product name..."
                      value={updateData.name}
                      onChange={getUpdateData}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type={"text"}
                      className="input"
                      name="description"
                      placeholder="Plaese enter your product description... "
                      value={updateData.description}
                      onChange={getUpdateData}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type={"number"}
                      className="input"
                      name="price"
                      placeholder="Plaese enter your product price..."
                      value={updateData.price}
                      onChange={getUpdateData}
                    />
                  </div>
                </div>
              </div>
              <div className="flexBtn">
                <button
                  className="btn-modal btn-cancel"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
                <button
                  className="btn-modal btn-delete"
                  onClick={() => onUpdate(productItem, productKey)}
                >
                  Update
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
          productEditModal === true ? "modal-backdrop show" : "modal-backdrop"
        }
      ></div>
    </>
  );
};

export default EditModal;
