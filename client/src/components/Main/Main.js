import React, { Component } from "react";
import { Link } from "react-router-dom";

import MainVideo from "../MainVideo/MainVideo";
import MainVideoDescription from "../MainVideoDescription/MainVideoDescription";
import Btn from "../Button/Button";
import Comments from "../Comments/Comments";
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard";
import axios from "axios";

const API_KEY = "?api_key=716ca77b-eeea-4eef-8fba-88e637658983";
const URL = "https://project-2-api.herokuapp.com";

export default class Main extends Component {
  state = {
    displayedVideo: {},
    relatedVideos: [],
  };

  componentDidMount() {
    axios.get(URL + "/videos" + API_KEY).then((response) => {
      this.setState({
        relatedVideos: response.data,
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      let displayID = "1af0jruup5gu";
      if (this.props.match.params.videoId) {
        displayID = this.props.match.params.videoId;
      }
      axios.get(URL + "/videos/" + displayID + API_KEY).then((response) => {
        this.setState({
          displayedVideo: response.data,
        });
      });
    }
  }

  render() {
    return (
      <>
        {/* Main video import */}
        <MainVideo mainVid={this.state.displayedVideo} />
        <main className="site__container main-video-related-data__container">
          <div className="main-video-info">
            {/* Main video description import */}
            <MainVideoDescription mainVidDetails={this.state.displayedVideo} />
            <section className="comment-section__container">
              <h3 className="comment-count">3 Comments</h3>
              <div className="comment__form-image__container">
                <div>
                  <div className="comment-new-user__image"></div>
                </div>
                <div className="comment-form__container">
                  <h5 className="comment-form__title">JOIN THE CONVERSATION</h5>
                  <form className="comment-form">
                    <textarea
                      className="comment-input"
                      placeholder="Add a new comment"
                    />
                    <Btn text="COMMENT" class="primary-btn comment-form__btn" />
                  </form>
                </div>
              </div>

              {/* Main video comments import */}
              {this.state.displayedVideo.comments
                ? this.state.displayedVideo.comments.map((comment) => {
                    return (
                      <Comments key={comment.id} mainVidComment={comment} />
                    );
                  })
                : ""}
            </section>
          </div>
          <aside className="related-video-section__container">
            <h5 className="related-video-section__header">NEXT VIDEO</h5>

            {/* Related videos import */}
            {this.state.relatedVideos.map((video) => {
              if (video.id !== this.state.displayedVideo.id) {
                return (
                  <Link key={video.id} to={"/" + video.id}>
                    <RelatedVideoCard video={video} />
                  </Link>
                );
              }
            })}
          </aside>
        </main>
      </>
    );
  }
}
