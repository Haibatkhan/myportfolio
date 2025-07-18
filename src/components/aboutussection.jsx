import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const aboutussection = () => {
  return (
    <section>
        <div className=" aboutus-section   ">
      <div className="row align-items-center">
        
        {/* Left Column (Image) */}
        <div className="image-card col-lg-6 col-12 text-center mb-3 mt-lg-0 ">
          <img
            src="/assets/haibat..png"
            alt="Haibat Mehran"
            className="img-second rounded border"
           
          />
        </div>

        {/* Right Column (Text Content) */}
        <div className="col-lg-6 col-12 mt-5">
          <span className="badge bg-primary mb-3 py-2 px-4">ABOUT US</span>
          
          <h1 className="heading-fs display-4 fw-bold mb-3 text-black">
            I AM AVAILABLE FOR
          </h1>

          <h3 className="fw-bold fs-1 text-primary">UI UX DESIGN</h3>
          <h3 className="fw-bold fs-1">PROJECTS</h3>

          <p className="lead-sk mb-4 text-black">
            The standard chunk of Lorem Ipsum used since<br />
            the 1500s is reproduced below for those interested.<br />
            Sections 1.10.32 and 1.10.33 from de<br />
            Finibus Bonorum et Malorum by Cicero are also<br />
            reproduced in their exact original form,<br />
            accompanied by English versions from the 1914<br />
            translation by H. Rackham.
          </p>
     <div className="boxes-container mb-3">
      <div className="custom-box">
        <h2 className="box-number">280+</h2>
        <p className="box-title">Google</p>
      <p className="box-subtitle">Review</p>
       
      </div>

      <div className="custom-box">
        <h2 className="box-number">15+</h2>
        <p className="box-title">Years </p>
        <p className="box-subtitle">Experience</p>

        
      </div>

      <div className="custom-box">
        <h2 className="box-number">49+</h2>
        <p className="box-title">Awward</p>
         <p className="box-subtitle">Winning</p>
        
      </div>
     </div>


          <div className="btn-second d-flex">
            <button className="btn btn-primary mt-3 px-4 py-2 rounded-pill mb-4">
              GET IN TOUCH <FaArrowRight className="ms-2" />
            </button>
          </div>

        </div>
      </div>
    </div>
    </section>
    
  );
};

export default aboutussection;
