import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { ProjectList } from "pages/project-list";
import { TryUseArray } from "./pages/project-list/try-use-array";

function App() {
  return (
    <div className="App">
      <ProjectList></ProjectList>
      <TryUseArray></TryUseArray>
    </div>
  );
}

export default App;
