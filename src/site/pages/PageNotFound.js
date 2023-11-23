import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found">
        <h1>Page Not Found</h1>
        <Link to={"/crud-redux/"}>Go to home</Link>
      </div>
    </>
  );
};

export default PageNotFound;
