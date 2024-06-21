// eslint-disable-next-line no-unused-vars
import React from 'react'
import image2 from '../assets/images/image2.jpg';
import image1 from '../assets/images/image1.jpg';
import image3 from '../assets/images/image3.jpg';

function WhyChooseUs() {
  return (
    <div>
    <h3 className="text-center mb-5 mt-5">Why Choose Us</h3>
    <div className="card mb-3 mt-5 border-0 container">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={image2} className="img-fluid rounded-start" alt="..."  />
      </div>
      <div className="col-md-8 border-0">
        <div className="card-body">
          <h5 className="card-title float-end mb-2">Who we work with</h5>
          <p className="card-text mt-5 fs-6 fw-normal">We work with leading industry experts who develop interactive and impactful learning experiences that will point you in the right direction.
          Our cohort-based approach will make sure you complete your learning tasks at hand.</p>
          <button type="button" className="btn btn-outline-secondary btn-sm float-end">See our partners</button>
        </div>
      </div>
    </div>
  </div>

  <div className="card mb-5 mt-5 border-0 container">
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Get Equipped</h5>
        <p className="card-text fs-6 fw-normal">We discover and nurtured talents through our training which encompasses not only tech related courses but also some soft skills and employable skills that equips them rightly to be able to walk confidently into the market world.</p>
        <button type="button" className="btn btn-outline-secondary btn-sm float-start">See our partners</button>
      </div>
    </div>
    <div className="col-md-4">
      <img src={image1} className="img-fluid rounded-start" alt="..."  />
    </div>
  </div>
</div>

<div className="card mb-5 mt-5 border-0 container">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={image3} className="img-fluid rounded-start" alt="..."  />
      </div>
      <div className="col-md-8 border-0 mb-5">
        <div className="card-body">
          <h5 className="card-title float-end mb-3">Hear what our students are saying</h5>
          <p className="card-text mt-5 fs-6 fw-normal"> We train people of different working ages, recruit people to build their portfolios and gain financial freedom and work on project deliveries for other companies in need of our services by showcasing our nurtured talents to become values to others </p>
          <button type="button" className="btn btn-outline-secondary btn-sm float-end">See our partners</button>
        </div>
      </div>
    </div>
  </div>
 </div>
  );
}

export default WhyChooseUs