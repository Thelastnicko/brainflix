import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    return <div>Main</div>;
  }
}
