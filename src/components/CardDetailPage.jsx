import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cards } from './CardData';
import { X } from 'lucide-react';

const CardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const card = cards.find(c => c.id === parseInt(id));

  if (!card) return <div>Card Not Found</div>;

  return (
    <div className="page-container">
      <button onClick={() => navigate(-1)} className="close-button">
        <X />
      </button>

      <div className="flex-container">
        <div className="left-column">
          <img src={card.image} alt={card.title} className="detail-image" />
        </div>

        <div className="right-column">
          <h2 className="detail-title">{card.details.title}</h2>
          <p className="detail-description">{card.details.description}</p>

          <ul className="detail-list">
            <li><strong>Type:</strong> {card.details.type}</li>
            <li><strong>Languages:</strong> {card.details.languages}</li>
            <li><strong>Platform:</strong> {card.details.platform}</li>
            <li><strong>Country:</strong> {card.details.country}</li>
            <li><strong>URL:</strong> <a href={`https://${card.details.url}`} target="_blank" rel="noreferrer">{card.details.url}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDetailPage;
