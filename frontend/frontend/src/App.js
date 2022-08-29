import React from "react";
import "./App.css";
import ContentLeft from "./components/content left/ContentLeft";
import ContentCenter from "./components/content center/ContentCenter";
import ContentRight from "./components/content right/contentRight";

function App() {
  return (
    <>
      <ContentLeft />
      <ContentCenter />
      {/*<ContentRight />*/ }
    </>
  );
}

export default App;
