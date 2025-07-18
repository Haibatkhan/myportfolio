import React from 'react';

const CardDetails = ({ card, onClose }) => {
  return (
   <section>
     <div className="card-details">
      <h3>{card.details.title}</h3>
      <h2>
        {card.details.subtitle}
      </h2>
      <p>{card.details.description}</p>
      <ul>
        <li><strong>Type:</strong> {card.details.type}</li>
        <li><strong>Languages:</strong> {card.details.languages}</li>
        <li><strong>Platform:</strong> {card.details.platform}</li>
        <li><strong>Country:</strong> {card.details.country}</li>
        <li><strong>Live URL:</strong> {card.details.url}</li>
      </ul>
      <button onClick={onClose} className="btn btn-danger mt-3">Close</button>
    </div>
   </section>
  );
};

export default CardDetails;
