import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  dataList,
} from "../../store/actions/all-actions/AuthAction";

const Login = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userInfo = useSelector(({ LoginState }) => {
    return LoginState.userList;
  });

  useEffect(() => {
    let fetchUsers = localStorage.getItem("Users");
    fetchUsers = JSON.parse(fetchUsers);
    if (fetchUsers !== null) {
      dispatch(dataList(fetchUsers));
    } else {
      let emptyStr = JSON.stringify([]);
      localStorage.setItem("List", emptyStr);
    }
  }, []);

  setTimeout(() => {
    setMessage();
  }, 5000);

  const submitUserInfo = () => {
    let userData = {
      email,
      password,
    };

    for (let i = 0; i < userInfo?.length; i++) {
      if (
        userInfo[i].email === userData.email &&
        userInfo[i].password === userData.password
      ) {
        dispatch(
          loginUser(
            userData.email,
            userData.password,
            userInfo[i].name,
            userInfo[i].imgUrl
          )
        );
        setMessage("Successfully Login!");
        window.location.reload();
        break;
      } else if (
        userInfo[i].email === userData.email &&
        userInfo[i].password !== userData.password
      ) {
        setMessage("Password does not match!");
        break;
      } else {
        setMessage("User does not exit!");
      }
    }

    if (userData.email === "" && userData.password === "") {
      setMessage("Please correct User details!");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="form-container">
          <div className="form-block">
            <div className="user-icon">
              <FaRegUser />
            </div>
            <h2>Login</h2>
            <InputField
              icon={<FaRegEnvelope />}
              type="email"
              placeholder="User Email"
              value={email}
              changeValue={(e) => setEmail(e.target.value)}
            />
            <InputField
              icon={<HiOutlineLockClosed />}
              type="password"
              placeholder="User Password"
              value={password}
              changeValue={(e) => setPassword(e.target.value)}
            />
            <button className="submit-data" onClick={submitUserInfo}>
              Login
            </button>
          </div>
          <hr className="border" />
          <p>
            Don't have an account?
            <a href={"/crud-redux/signup"} title="Sign Up">
              Sign Up
            </a>
          </p>
          <p className="error">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
