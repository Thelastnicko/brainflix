import React from "react";
import "./Button.scss";
const Btn = (props) => {
  return (
    <button className={props.class} type="submit">
      <img className="img-icon" src={props.image} alt="" />
      {props.text}
    </button>
  );
};

export default Btn;
