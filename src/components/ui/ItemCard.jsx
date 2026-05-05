import React from "react";
import { useNavigate } from "react-router-dom";
const ItemCard = ({ name, cost, score, img }) => {
  return (
    <div className="item">♡
      <div className="item-image">
        <img src={img} alt={name} />
      </div>

      <div className="item-info">
        <h4>{name}</h4>
        <span className="item-price">{cost}</span>
      </div>

      <div className="item-rating">
        ⭐ {score}
      </div>
    </div>
  );
};

export default ItemCard;