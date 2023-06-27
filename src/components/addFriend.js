import React, { useState } from "react";

const AddFriend = () => {
  const initialState = {
    fullName: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <input
        type="text"
        placeholder="name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddFriend;
