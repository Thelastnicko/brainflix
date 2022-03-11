import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header.js";
import Video from "./components/Hero/Video.js";
import VideoList from "./components/VideoList/VideoList.js";

import videos from "./data/video-details.json";

export default class Main extends Component {
  state = {
    mainVideo: videos[0],
    listVideos: videos.slice(1),
  };

  changeCurrentVideo = (id) => {
    this.setState({
      mainVideo: videos.filter((v) => v.id === id)[0],
      listVideos: videos.filter((v) => v.id !== id),
    });
  };
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
