import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
