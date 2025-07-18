import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';



const HeroSection = () => {
  return (
    <section>
      <div
        className="hero-section d-flex align-items-center text-white"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero-bg.avif)`}}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column (Text) */}
            <div className="col-lg-6 col-12">
              <span className=" badge bg-primary mb-3 py-2 ">HAIBAT MEHRAN</span>
              <h1 className=" heading-fs display-4 fw-bold mb-3">HAY! I'M HAIBAT </h1>

              <div className="animate-fs mb-3">
                <h2 class="type">I'M A DEVELOPER</h2>
              </div>

              <p className="lead-sk mb-4">
                Yet bed any for travelling assistance indulgence unpleasing.<br></br>
                Not thoughts all exercise blessing. <br />
                Indulgence way everything joy alteration. <br />
                Boisterous the attachment.
              </p>
              <div className='btn-second d-flex '>
                  <button className="btn btn-primary mt-3 px-4 py-2 rounded-pill">GET IN TOUCH
                    <FaArrowRight />
                  </button>
                <div className="social-icons mt-3 ms-3 d-flex ">
                   <FaFacebook className="social-icona rounded-pill bg-primary text-white"  size={40} />
                  <FaDribbble className="social-iconb  rounded-pill  bg-danger text-white" size={40} />
                  <FaLinkedin className="social-iconc rounded-pill  bg-primary text-red" size={40} />

                </div>
              </div>
            </div>




            {/* Right Column (Image) */}
            <div className="col-lg-6 col-12 text-center mt-2 mt-lg-0">
              <img
                src={process.env.PUBLIC_URL + '/assets/haibat..png'} 
                alt="Haibat"
                
                className="img-fluid rounded"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex     gap-5  px-4 py-5 ">
        <img  className="logoipsum-first   "  src={process.env.PUBLIC_URL + '/assets/Logoipsum-382.png'} alt="Logo"  />
        <img  className="logoipsum-second  " src={process.env.PUBLIC_URL + '/assets/Logoipsum-362.png'} alt="Logo"  />
        <img  className="logoipsum-third "  src={process.env.PUBLIC_URL + '/assets/Logoipsum-382.png'} alt="Logo"  />
        <img  className="logoipsum-fourth  " src={process.env.PUBLIC_URL + '/assets/Logoipsum-362.png'} alt="Logo"  />
       
      </div>
      
    </section>
  );
};

export default HeroSection;

