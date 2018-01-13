import React from "react";
import "./SpaceCard.css";


const SpaceCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Type:</strong> {props.name}
        </li>
        <li>
          <strong>Loction:</strong> {props.location}
        </li>
        <li>
          <strong>Capacity:</strong> {props.capacity}
        </li>
      </ul>
    </div>
  </div>
);

export default SpaceCard;
