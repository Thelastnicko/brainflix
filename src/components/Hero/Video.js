import React, { Component } from "react";
import moment from "moment";

import "./Video.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import addComment from "../../assets/Icons/add_comment.svg";
import play from "../../assets/Icons/play.svg";
import Comments from "../Comments/Comments";

class Video extends Component {
  render() {
    return (
      <div>
        <div className="video-container">
          <video poster={this.props.video.image} controls="controls"></video>

          <h1>{this.props.video.title}</h1>
        </div>
        <hr></hr>

        <div className="main-video-details">
          <h3>{this.props.video.channel}</h3>
          <p>{moment(this.props.video.timestamp).format("DD/MM/YYYY")}</p>
          <p>
            <img src={viewsIcon} alt="views icon"></img>
            {this.props.video.views}
          </p>
          <p>
            <img src={likesIcon} alt="likes icon"></img>
            {this.props.video.likes}
          </p>
        </div>
        <hr></hr>
        <p>{this.props.video.description}</p>
        <h3>3 Comments</h3>
        <form>
          <label>Join the conversation</label>
          <textarea rows="" cols="" placeholder="Add a new comment"></textarea>
          <button>
            <img src={addComment} alt="add comment icon"></img>Comment
          </button>
        </form>
        <hr></hr>
        <Comments comments={this.props.video.comments} />
      </div>
    );
  }
}

export default Video;
