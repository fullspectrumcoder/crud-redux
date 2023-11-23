import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  const [isLoader, setIsLoader] = useState(false);
  useEffect(() => {
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoader ? (
        <div className="loaderStyles">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loader;
