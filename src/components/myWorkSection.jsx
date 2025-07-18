import React from 'react';
import CardList from './CardList.jsx';






const myWorkSection = () => {
  return (
    <section className="my-work-section">
      <span className=" my-work text-center mb-5 bg-primary px-4 py-1">MY WORK</span>
      <h2 className="type-work mt-3">RECENT PROJECT</h2>
      <CardList />
    </section>
  );
};

export default myWorkSection;
