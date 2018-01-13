import React from "react";
import "./Backyard.css";
import Room from "./backgroundPic.jpg";

const Backyard = props =>
  <div
    className="Backyard text-center"
    style={{ backgroundImage: `url(${Room})` }}
  >
    {props.children}
  </div>;

export default Backyard;
