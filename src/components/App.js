
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList.js";
import UserDetails from "./UserDetails,js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
