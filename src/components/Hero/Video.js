import React, { Component } from "react";
import "./Video.scss";

class Video extends Component {
  render() {
    return (
      <div>
        <div className="video-container">
          <video poster={this.props.data.image}></video>
        </div>
      </div>
    );
  }
}

export default Video;
