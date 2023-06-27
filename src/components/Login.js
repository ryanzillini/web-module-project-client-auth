import React, { useState } from "react";

const LoginForm = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };
  return (
    <form className="login">
      <input
        type="text"
        placeholder="username"
        value={values.username}
        name="username"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="password"
        value={values.password}
        name="password"
        onChange={handleChange}
      />
    </form>
  );
};

export default LoginForm;
