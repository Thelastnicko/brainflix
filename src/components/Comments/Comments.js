import React, { Component } from "react";

export default class Comments extends Component {
  render() {
    return (
      <div className="comments-container">
        {this.props.comments.map((c, index) => (
          <>
            <h3>{c.name}</h3>
            <p key={"c" + index}>{c.comment}</p>
            <hr></hr>
          </>
        ))}
      </div>
    );
  }
}
