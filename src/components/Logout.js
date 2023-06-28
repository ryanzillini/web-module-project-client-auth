import React, { useEffect } from "react";
import axios from "axios";

const Logout = () => {
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};

export default Logout;
