import React, { useState } from "react";
import "./App.css";
import "./css/main.css";
import Home from "./components/Home";
import { IconCapsule, IconDoctor, IconLogo } from "./components/Icons";

function App() {
  const [getHome, setHome] = useState(true);
  const [getDocto, setDoctor] = useState(false);

  return (
    <>
      <div className="head">
        <div className="contentHead">
          <IconLogo />
          <label className="textLogo">Pastilla</label>
          <div className="contentBtnDoctor">
            <IconCapsule className="icon"/>
            <IconDoctor className="icon" />
          </div>
        </div>
      </div>
      <Home />
    </>
  );
}

export default App;
