import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriend = () => {
  const push = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/friends", form, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => push("/friends"))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="age">Age:</label>
      <input type="text" placeholder="age" name="age" onChange={handleChange} />
      <button>Add Friend</button>
    </form>
  );
};

export default AddFriend;
