import React from 'react';
import Slider from 'react-slick';
import { cards } from './CardData';
import CardItem from './CardItem';

const CardList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className=" ms-5   max-w-6xl mx-auto py-10  mt-4">
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="px-3">
            <CardItem card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardList;
