// == Import : npm
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// == Import : local
import Chat from "src/containers/Chat";
import store from "src/store";

// == Render
const rootReactElement = (
  <Provider store={store}>
    <Chat />
  </Provider>
);
const target = document.getElementById("root");

render(rootReactElement, target);
