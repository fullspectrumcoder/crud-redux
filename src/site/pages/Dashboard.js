import React, { useEffect, useState } from "react";
import Avatar from "../assets/imgs/avatar.png";
import UserViewModal from "../components/ModalPops/UserViewModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, userItem } from "../../store/actions/all-actions/UsersActions";

const Dashboard = (props) => {
  let { user } = props;
  const [userView, setUserView] = useState(false);

  const dispatch = useDispatch();

  const allUsers = useSelector(({ UsersState }) => {
    return UsersState.userData;
  });

  useEffect(() => {
    let fetchUsers = localStorage.getItem("Users");
    fetchUsers = JSON.parse(fetchUsers);
    if (fetchUsers !== null) {
      dispatch(fetchData(fetchUsers));
    } else {
      let emptyStr = JSON.stringify([]);
      localStorage.setItem("Users", emptyStr);
    }
  }, []);

  const viewUser = (users) => {
    dispatch(userItem(users));
    setUserView(true);
  };

  const closeUser = () => {
    setUserView(false);
  };

  return (
    <>
      <h1>Active User</h1>
      <div className="active-user-card">
        <div className="imgusericon">
          <img src={user.imgUrl ? user.imgUrl : Avatar} alt="" />
        </div>
        <div className="info">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <h1>All User</h1>
      <div className="card-flex">
        {allUsers?.map((users, index) => {
          return (
            <div className="card-flex-width" key={index}>
              <div className="card">
                <div className="imgusericon">
                  <img src={users.imgUrl ? users.imgUrl : Avatar} alt="" />
                </div>
                <h3>{users.name}</h3>
                <p>{users.email}</p>
                <button
                  className="btn btn-delete"
                  onClick={() => viewUser(users)}
                >
                  View User
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <UserViewModal
        userView={userView}
        closeUser={closeUser}
      />
    </>
  );
};

export default Dashboard;
