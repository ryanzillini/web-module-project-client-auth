import React from "react";
import "./App.css";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import friendsList from "./data";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/addFriend";
import Login from "./components/login";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <header>
        <h2>FRIENDS DATABASE</h2>
        <Link className="link" to="login">
          Login
        </Link>
        <Link className="link" to="friends">
          Friends List
        </Link>
        <Link className="link" to="friends/add">
          Add Friend
        </Link>
        <Link className="link" to="/logout">
          Logout
        </Link>
      </header>

      <h2>FRIENDS</h2>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route
          path="/friends"
          element={<FriendsList friends={friendsList} />}
        />
        <Route path="/friends/add" element={<AddFriend />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
