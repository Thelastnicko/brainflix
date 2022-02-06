import React, { Component } from "react";
import "./VideoList.scss";

class VideoList extends Component {
  render() {
    return (
      <div className="video-list-container">
        <h3>next videos</h3>
        {this.props.list.map((v, index) => (
          <div
            onClick={() => this.props.changeCurrentVideo(v.id)}
            key={index}
            className="video"
          >
            <div className="video-item-container">
              <div className="img-container">
                <img src={v.image}></img>
              </div>
              <div className="video-info-container">
                <h3 className="video-title">{v.title}</h3>
                <p className="video-channel">{v.channel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default VideoList;
