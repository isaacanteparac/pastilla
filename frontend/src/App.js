import React, { useState } from "react";
import "./App.css";
import "./css/main.css";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import { IconCapsule, IconDoctor, IconLogo } from "./components/Icons";

function App() {
  const [getHome, setHome] = useState(true);
  const [getDoctor, setDoctor] = useState(false);

  const clickDoctor = () => {
    setDoctor(true);
    setHome(false);
  };

  const clickHome = () => {
    setHome(true);
    setDoctor(false);
  };

  return (
    <>
      <div className="head">
        <div className="contentHead">
          <IconLogo />
          <label className="textLogo">Pastilla</label>
          <div className="contentBtnDoctor">
            <IconCapsule className="icon" onClick={clickHome} />
            <IconDoctor className="icon" onClick={clickDoctor} />
          </div>
        </div>
      </div>
      <div className="content">
        {getHome ? <Home /> : null}
        {getDoctor ? <Doctor /> : null}
      </div>
    </>
  );
}

export default App;
