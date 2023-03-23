import React from "react";
import "./App.css";
import ContentBody from "./components/ContentBody";
import NavbarLeft from "./components/NavbarLeft";
import ResultRight from "./components/ResultRight";

function App() {
  return (
    <div className="flex">
      <NavbarLeft />
      <ContentBody />
      <ResultRight />
    </div>
  );
}

export default App;
