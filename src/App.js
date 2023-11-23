import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./site/components/Navigation";
import CreateProduct from "./site/pages/CreateProduct";
import Dashboard from "./site/pages/Dashboard";
import AllProducts from "./site/pages/AllProducts";
import MyProducts from "./site/pages/MyProducts";
import PageNotFound from "./site/pages/PageNotFound";
import Login from "./site/pages/Login";
import SignUp from "./site/pages/SignUp";
import CounterApp from "./site/pages/CounterApp";
import { Provider } from "react-redux";
import { store } from "./store/Store"; 

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("AuthenticatedUser") !== null) {
      let fetchUser = localStorage.getItem("AuthenticatedUser");
      fetchUser = JSON.parse(fetchUser);
      setAuthUser(fetchUser);
    } else {
      let authenticatedUser = null;
      let dataInStr = JSON.stringify(authenticatedUser); 
      localStorage.setItem("AuthenticatedUser", dataInStr);
    }
  }, []);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Provider store={store}>
      <Router>
        {authUser !== null ? (
          <>
            <Navigation
              user={authUser}
              toggle={toggle}
              setToggle={setToggle}
              toggleMenu={toggleMenu}
            />
            <div className={toggle ? "inner-content active" : "inner-content"}>
              <Routes>
                <Route
                  path="/crud-redux/"
                  element={<Dashboard user={authUser} />}
                />
                <Route
                  path="/crud-redux/create-product"
                  element={<CreateProduct user={authUser} />}
                />
                <Route
                  path="/crud-redux/counter-app"
                  element={<CounterApp />}
                />
                <Route
                  path="/crud-redux/all-products"
                  element={<AllProducts user={authUser} />}
                />
                <Route
                  path="/crud-redux/my-products"
                  element={<MyProducts user={authUser} />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/crud-redux/" element={<Login />} />
            <Route path="/crud-redux/signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </Router>
    </Provider>
  );
};

export default App;
