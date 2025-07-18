import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const myContactsection = () => {
  return (
    <section className="my-contact-sk">
      <div className="contacter d-flex flex-wrap justify-content-center align-items-center">
        
        {/* Left Image Side */}
        <div className="image-contact text-center mb-3 mt-lg-0">
          <img
            src="/assets/haibat..png"
            alt="Haibat Mehran"
            className="img-contact rounded border"
          />
        </div>

        {/* Right Text Side */}
        <div className="text-contact">
          <h2 className="type-contact">Let’s Discuss Your Project</h2>
          <p className="my-contact">
            Always available for freelancing if the right project comes along,<br />
            Feel free to contact me.
          </p>
        </div>

        <hr className="divider" />

        <div className="row w-100 mt-3 contact-container">

          {/* Left Column */}
          <div className="col-lg-4 contact-left mt-5">
            <div>
               <label className="form-label-custom">Write an e-mail</label>
            <p className="left-email fw-bold">sample@domain.com</p>
            <label className="form-label-custom">Call us</label>
            <p className="left-phone fw-bold">+044 9696 9696 3636</p> 
            </div>
             <div className="social-icons mt-4  d-flex ">
             <FaFacebook className="social-icona rounded-pill bg-primary text-white"  size={40} />
             <FaDribbble className="social-iconb  rounded-pill  bg-danger text-white" size={40} />
             <FaLinkedin className="social-iconc rounded-pill  bg-primary text-red" size={40} />
          
          </div>

          </div>
          

          {/* Right Column - Form */}
          <div className="col-lg-8 contact-right">
            <form className="contact-form">

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label-custom">YOUR NAME</label>
                  <input type="text" className="form-control custom-input" placeholder="Name*" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label-custom">YOUR EMAIL</label>
                  <input type="email" className="form-control custom-input" placeholder="Email*" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label-custom">SUBJECT</label>
                <input type="text" className="form-control custom-input" placeholder="Subject*" />
              </div>

              <div className="mb-3">
                <label className="form-label-custom">YOUR MESSAGE</label>
                <textarea className="form-control custom-textarea" rows={4} placeholder="Your Message*"></textarea>
              </div>

            </form>
             <button className="btn btn-third bg-primary mt-3 px-5 py-2 rounded-pill mb-2">SEND MESSAGE</button>
          </div>
          
        </div>
        

      </div>
    </section>
  );
};

export default myContactsection;
