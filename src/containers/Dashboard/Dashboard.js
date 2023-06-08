import React from "react";
import { toast } from "react-toastify";
import { useEffect } from "react/cjs/react.development";

import Services from "../../components/Service/Services";

import "./styles.scss";

const Dashboard = (props) => {
  const notify = () =>
    toast.error("The page you were trying to access does not exist", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  useEffect(() => {
    if (props.wrongPage) {
      notify();
    }
  });

  return (
    <div className="dashboard">
      {/* <h1 className="dashboard"></h1> */}
      <Services />
    </div>
  );
};

export default Dashboard;
