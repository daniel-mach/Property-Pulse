"use client";

import ClipLoader from "react-spinners/ClipLoader";

const LoadingPage = () => {
  const override = {
    display: "block",
    margin: "100px auto"
  };

  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={override}
      size={125}
      aria-label="Loading Spinner"
    ></ClipLoader>
  );
};

export default LoadingPage;
