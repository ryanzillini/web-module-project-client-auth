// FriendsList.js
import React from "react";
import ListItem from "./ListItem";

const FriendsList = ({ friends }) => {
  return (
    <div className="Friends-List">
      {friends.map((friend, id) => (
        <ListItem key={id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
