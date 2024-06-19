import React from "react";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader">
      <SyncLoader color="#36d7b7" loading={true} />
    </div>
  );
};

export default Loader;
