import React, { Component } from "react";
import moment from "moment";

import "./Video.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import Comments from "../Comments/Comments";

class Video extends Component {
  render() {
    return (
      <div>
        <div className="video-container">
          <video poster={this.props.video.image}></video>
          <h1>{this.props.video.title}</h1>
        </div>
        <hr></hr>
        <div className="main-video-details">
          <h3>{this.props.video.channel}</h3>
          <p>{moment(this.props.video.timestamp).format("DD/MM/YYYY")}</p>
        </div>
        <hr></hr>
        <Comments comments={this.props.video.comments} />
      </div>
    );
  }
}

export default Video;
