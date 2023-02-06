import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMember from "./CreateMember";
import ListMembers from "./ListMembers";
import UpdateMember from "./UpdateMember";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListMembers />} />
          <Route path="/create" element={<CreateMember />} />
          <Route path="/update/:memberId" element={<UpdateMember />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
