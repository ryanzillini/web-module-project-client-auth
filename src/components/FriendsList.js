import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axiosWithAuth()
      .get("./friends")
      .then((resp) => {
        setFriends(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.name}>
              {" "}
              {friend.name} - {friend.age} - {friend.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
