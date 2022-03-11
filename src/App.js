import React, { Component } from "react";
import axios from "axios";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import Video from "./components/Hero/Video.js";

import VideoList from "./components/VideoList/VideoList.js";
import videos from "./data/video-details.json";

//variables
let firstVideoId = "1af0jruup5gu";
let API_KEY = "6f2e95f3-d372-48c7-92dd-d1c15085ae9d";
const API_URL = "https://project-2-api.herokuapp.com";

export default class App extends Component {
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
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Video video={this.state.mainVideo} />
        <VideoList
          list={this.state.listVideos}
          changeCurrentVideo={this.changeCurrentVideo}
        />
      </div>
    );
  }
}
