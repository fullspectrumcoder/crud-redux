import React from "react";
import { MdOutlineClose } from "react-icons/md";

const DataCreateModal = (props) => {
  let { successModal, failModal, closeFailModal, closeSuccessModal } = props;

  return (
    <>
      <div
        className={
          successModal === true || failModal === true ? "modal open" : "modal"
        }
      >
        <div className="modal-content">
          <div className="modal-container">
            <div className="modal-header">
              <h1>Create Product</h1>
              {successModal === true ? (
                <div className="closeIcon" onClick={closeSuccessModal}>
                  <MdOutlineClose />
                </div>
              ) : (
                ""
              )}

              {failModal === true ? (
                <div className="closeIcon" onClick={closeFailModal}>
                  <MdOutlineClose />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="modal-body">
              <p>
                {successModal === true ? "Your product has been added. Thank You!" : ""}
                {failModal === true ? "Please add correct product details." : ""}
              </p>
            </div>
            <div className="flexBtn">
              {successModal === true ? (
                <button
                  className="btn-modal btn-success"
                  onClick={closeSuccessModal}
                >
                  Done
                </button>
              ) : (
                ""
              )}

              {failModal === true ? (
                <button
                  className="btn-modal btn-close"
                  onClick={closeFailModal}
                >
                  Close
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          successModal === true || failModal === true
            ? "modal-backdrop show"
            : "modal-backdrop"
        }
      ></div>
    </>
  );
};

export default DataCreateModal;
