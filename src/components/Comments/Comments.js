import React, { Component } from "react";

export default class Comments extends Component {
  render() {
    return (
      <div>
        <h3>3 comments</h3>

        <form>
          <label>join the conversation</label>
          <textarea
            rows="4"
            cols="40"
            placeholder="Add a new comment"
          ></textarea>
          <input type="submit"></input>
        </form>

        <div className="comments-container">
          {this.props.comments.map((c, index) => (
            <>
              <p>{c.name}</p>
              <p key={"c" + index}>{c.comment}</p>

              <hr></hr>
            </>
          ))}
        </div>
      </div>
    );
  }
}
