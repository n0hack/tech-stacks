import React from "react";
import ReactDOM from "react-dom/client";
import TutorialUILibrary from "./TutorialUILibrary";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <TutorialUILibrary />
  </React.StrictMode>
);
