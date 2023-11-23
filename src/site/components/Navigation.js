import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../assets/imgs/avatar.png";
import Logo from "../assets/imgs/logo.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { FaThList, FaList } from "react-icons/fa";
import { ImList } from "react-icons/im";

const Navigation = (props) => {
  let { user, toggle, toggleMenu } = props;
  const [admin, setAdmin] = useState(false);

  const logout = () => {
    let authenticatedUser = null;
    let dataInStr = JSON.stringify(authenticatedUser);
    localStorage.setItem("AuthenticatedUser", dataInStr);
    window.location.reload();
    window.location.origin();
  };

  const togglAdmin = () => {
    setAdmin(!admin);
  };

  return (
    <>
      <header>
        <div className={toggle ? "active bg-navbar" : "bg-navbar"}>
          <div className="custom-navbar">
            <div className="toggle" onClick={toggleMenu}>
              {toggle ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            </div>
            <div className="admin-panel">
              <div className="userLogout">
                <Link to={"/crud-redux/"} onClick={logout} className="logout">
                  <RiLogoutCircleRLine />
                </Link>
              </div>
              <div className="admin">
                <div className={admin ? "flex active" : "flex"}>
                  <h2 className="name">
                    Hi! <span>{user.name}</span>
                  </h2>
                  <p>{user.email}</p>
                </div>
                <img
                  src={user.imgUrl ? user.imgUrl : Avatar}
                  alt="User"
                  onClick={togglAdmin}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className={toggle ? "active sidebar" : "sidebar"}>
        <div className="left-panel">
          <Link to={"/crud-redux/"} className="logo">
            <img src={Logo} alt="Crud App" />
            <span>rud App</span>
          </Link>
          <div className="navBar">
            <ul>
              <li>
                <NavLink to={"/crud-redux/"}>
                  <MdDashboard /> <span>Dashboard</span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink to={"/crud-redux/counter-app"}>
                  <FaThList /> <span>Counter App</span>
                </NavLink>
              </li> */}
              <li>
                <NavLink to={"/crud-redux/create-product"}>
                  <FaThList /> <span>Create Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/crud-redux/all-products"}>
                  <ImList /> <span>All Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/crud-redux/my-products"}>
                  <FaList /> <span>My Product</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
