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
          <h3>By {this.props.video.channel}</h3>
          <p>{moment(this.props.video.timestamp).format("DD/MM/YYYY")}</p>
          <p className="main-video-details__views">
            <img src={viewsIcon} alt="views icon"></img>
            {this.props.video.views}
          </p>
          <p className="main-video-details__likes">
            <img src={likesIcon}></img>
            {this.props.video.likes}
          </p>
          <hr></hr>
          <p className="main-video-details__description">
            {this.props.video.description}
          </p>
        </div>

        <Comments comments={this.props.video.comments} />
      </div>
    );
  }
}

export default Video;
