import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";
import VideoUploadPage from "./components/pages/VideoUploadPage/VideoUploadPage";

import "./App.scss";
import "./components/Main/Main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/upload" component={VideoUploadPage} />
          <Route path="/:videoId" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
