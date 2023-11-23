import React from "react";
import Avatar from "../../assets/imgs/avatar.png";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";

const UserViewModal = (props) => {
  let { userView, closeUser } = props;

  const userItem = useSelector(({ UsersState }) => {
    return UsersState.userItem;
  });

  return (
    <>
      {userView === true ? (
        <div className={userView === true ? "modal open" : "modal"}>
          <div className="modal-content">
            <div className="modal-container">
              <div className="modal-header">
                <h1>User Details</h1>
                <div className="closeIcon" onClick={closeUser}>
                  <MdOutlineClose />
                </div>
              </div>

              <div className="modal-body">
                <div className="userImgIcon">
                  <img
                    src={userItem.imgUrl ? userItem.imgUrl : Avatar}
                    alt=""
                  />
                </div>
                <h1>{userItem.name}</h1>
                <p style={{ textAlign: "center" }}>{userItem.email}</p>
              </div>
              <div className="flexBtn">
                <button className="btn-modal btn-user" onClick={closeUser}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className={userView === true ? "modal-backdrop show" : "modal-backdrop"}
      ></div>
    </>
  );
};

export default UserViewModal;
