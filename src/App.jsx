// import { useState } from "react";
import "./App.css";

// TODO Components
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <Jokes />
      <AddUser />
      <DisplayUser />
    </div>
  );
}

export default App;
