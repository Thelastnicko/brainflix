import React from "react";

import Btn from "../Button/Button";
import UploadVidImage from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
const API_KEY = "?api_key=716ca77b-eeea-4eef-8fba-88e637658983";
const URL = "http://localhost:8080";

const UploadForm = () => {
  const videoUpload = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    let videoUploadImage = UploadVidImage;
    axios.post(URL + "/videos" + API_KEY, {
      title: title,
      description: description,
      image: videoUploadImage,
    });
    e.target.title.value = "";
    e.target.description.value = "";
  };
  return (
    <section className="upload-video-section__container site__container">
      <h1 className="upload-video-header">Upload Video</h1>
      <form className="upload-video-form" onSubmit={videoUpload}>
        <div className="upload-video-form-image__container">
          <div className="upload-video-thumbnail__container">
            <h5 className="upload-video-form__title">VIDEO THUMBNAIL</h5>
            <img
              className="upload-video__thumbnail"
              alt="User icon"
              src={UploadVidImage}
            />
          </div>
          <div className="upload-video-input__container">
            <h5 className="upload-video-form__title">TITLE YOUR VIDEO</h5>
            <input
              className="upload-video-input"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
            <h5 className="upload-video-form__title">
              ADD A VIDEO DESCRIPTION
            </h5>
            <textarea
              name="description"
              className="upload-video-input upload-video-input__description"
              placeholder="Add a description of your video"
            />
          </div>
        </div>
        <div className="upload-video-form-btn__container">
          <Btn text="PUBLISH" class="primary-btn upload-video-form__btn" />
          <Link to={"/"}>
            <Btn text="CANCEL" class="transparent-btn upload-video-form__btn" />
          </Link>
        </div>
      </form>
    </section>
  );
};

export default UploadForm;
