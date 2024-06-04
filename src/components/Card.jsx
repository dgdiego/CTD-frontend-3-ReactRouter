import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={'/beer/' + data.id}>
      <div className="card">
        <h3>{data.name}</h3>
        <p>{data.price}</p>
        <img src={data.image} alt="beer-detail" />
      </div>
    </Link>
  );
};

export default Card;
