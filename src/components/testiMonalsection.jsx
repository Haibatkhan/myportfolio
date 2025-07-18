import React from 'react';
import Slider from 'react-slick';


const testimonials = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/assets/profile4.jpg',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .',
    name: 'PAMELA ENDERES',
    role: 'Company Name'
  },
  {
    id: 2,
   image: process.env.PUBLIC_URL + '/assets/profile2.jpg',

    paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .',
    name: 'Jane Smith',
    role: 'Company Name'
  },
  {
    id: 3,
   image: process.env.PUBLIC_URL + '/assets/profile3.jpg',
    paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .',
    name: 'Mark Wilson',
    role: 'Company Name'
  }
];

const testiMonalsection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section className="my-testimonal-section">
      <span className="my-testimonal mb-5 bg-primary px-4 py-1 text-white">TESTIMONIAL</span>
      <h2 className="type-testimonal mt-3">Over 8,000+<br />PEOPLE TRUST ME</h2>

      <div className="testimonial-slider-container">
        <Slider {...settings}>
          {testimonials.map(item => (
            <div key={item.id} className="testimonial-card-wrapper">
              <div className="testimonial-card">
                <img src={item.image} alt={item.name} className="testimonial-image" />
                <p className="testimonial-paragraph">{item.paragraph}</p>
                <h6 className="testimonial-name">{item.name}</h6>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default testiMonalsection;
