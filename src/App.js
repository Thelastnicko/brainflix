import React, { Component } from "react";

import "./App.scss";
import Header from "./components/Header/Header.js";
import Video from "./components/Hero/Video.js";
import VideoList from "./components/VideoList/VideoList.js";

import videos from "./data/video-details.json";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Video video={this.state.mainVideo} />
        <VideoList
          list={this.state.listVideos}
          changeCurrentVideo={this.changeCurrentVideo}
        />
      </div>
    );
  }
}
