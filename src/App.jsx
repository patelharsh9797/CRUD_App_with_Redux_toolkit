import { useState } from "react";
import "./App.css";

// TODO Components
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";

function App() {
  return (
    <div className="App">
      <AddUser />
      <DisplayUser />
    </div>
  );
}

export default App;
