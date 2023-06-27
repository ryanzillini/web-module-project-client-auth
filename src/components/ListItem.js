// ListItem.js
import React from "react";

const ListItem = ({ friend }) => {
  return (
    <div className="Friend-List-Item">
      <h3>
        {friend.name} - {friend.email}
      </h3>
    </div>
  );
};

export default ListItem;
