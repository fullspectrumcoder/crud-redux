import React from "react";
import { GrClose } from "react-icons/gr";

const Search = (props) => {
  return (
    <>
      <div className="openSearch">
        <input
          type="text"
          placeholder="Search here..."
          className="searchInput"
          onChange={(e) => e.target.value}
        />
        <span onClick={props.closeSearchBar}>
          <GrClose />
        </span>
      </div>
    </>
  );
};

export default Search;
