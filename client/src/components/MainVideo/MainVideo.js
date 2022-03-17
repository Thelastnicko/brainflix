import React from "react";
import "./MainVideo.scss";

const MainVideo = (props) => {
  if (props.mainVid) {
    return (
      <div className="main-video__container">
        <video poster={props.mainVid.image} className="main-video">
          <source src={props.mainVid.video} type="video/mp4" />
        </video>
      </div>
    );
  } else {
    return "";
  }
};

export default MainVideo;
