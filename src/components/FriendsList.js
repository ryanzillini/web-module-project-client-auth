import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token,
        },
      })
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
