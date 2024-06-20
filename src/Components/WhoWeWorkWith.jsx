/* eslint-disable no-unused-vars */
import React from 'react'
import gear from '../assets/images/gear.jpg';
import logo from '../assets/images/logo.jpg';
import federal from '../assets/images/federal.jpg';
import lagos from '../assets/images/lagos.jpg';



function WhoWeWorkWith() {
  return (
    
    <div className="card-group container  mb-5">

    <div className="card">
      <img src={gear} className="card-img-top w-30" alt="..." />
    </div>
    <div className="card">
      <img src={logo} className="card-img-top w-30" alt="..." />
    </div>
    
    <div className="card">
      <img src={federal} className="card-img-top w-30" alt="..." />
      </div>

      <div className="card">
      <img src={lagos} className="card-img-top w-30" alt="..." />
      </div>
  </div>
  )
}

export default WhoWeWorkWith