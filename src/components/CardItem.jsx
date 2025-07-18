import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ card }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/details/${card.id}`);
  };

  return (
    <div className="card-item">
      <img src={card.image} alt={card.title} className="card-image" />
      
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>

        {card.subtitle && (
          <div className="subtitle-row">
            <p className="subtitle-text">{card.subtitle}</p>
            <button onClick={handleDetailsClick} className="subtitle-arrow-btn">
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItem;
