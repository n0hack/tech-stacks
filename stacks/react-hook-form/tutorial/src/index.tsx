import React from "react";
import ReactDOM from "react-dom/client";
import TutorialUILibrary from "./TutorialUILibrary";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./module";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import TutorialRedux from "./TutorialRedux";
import TutorialSchema from "./TutorialSchema";

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TutorialSchema />
    </Provider>
  </React.StrictMode>
);
