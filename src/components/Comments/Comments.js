import React, { Component } from "react";

import moment from "moment";

export default class Comments extends Component {
  render() {
    return (
      <div className="comments-container">
        {this.props.comments.map((c, index) => (
          <>
            <h3>{c.name}</h3>
            <p>{moment(c.timestamp).format("DD/MM/YYYY")}</p>
            <p key={"c" + index}>{c.comment}</p>

            <hr></hr>
          </>
        ))}
      </div>
    );
  }
}
