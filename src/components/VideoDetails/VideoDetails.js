import React from "react";

const VideoDetails = (props) => {
  return (
    <div>
      <div className="video-title">
        <h1 onClick={props.click}>props.title</h1>
      </div>
    </div>
  );
};

export default VideoDetails;
