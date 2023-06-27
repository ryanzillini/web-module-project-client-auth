import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import friendsList from "./data";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/addFriend";
import LoginForm from "./components/login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>FRIENDS DATABASE</h1>
          <ul>
            <li>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/friends">Friends List</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/friend/add">Add Friend</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to>Logout</Link>
              </button>
            </li>
          </ul>
        </div>
        <h2>FRIENDS</h2>

        <Routes>
          <Route
            path="/friends"
            element={<FriendsList friends={friendsList} />}
          />
          <Route path="/friend/add" element={<AddFriend />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
