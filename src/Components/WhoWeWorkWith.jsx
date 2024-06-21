/* eslint-disable no-unused-vars */
import React from 'react'
import gear from '../assets/images/gear.jpg';
import logo from '../assets/images/logo.jpg';
import federal from '../assets/images/federal.jpg';
import lagos from '../assets/images/lagos.jpg';



function WhoWeWorkWith() {
  return (
    <div>  <h3 className="text-center mt-5 mb-4">Who we work with</h3>
     <div className="card-group container border-0 mt-5 mb-5 mx-auto">
   
    <div className="card border-0">
      <img src={gear} className="card-img-top w-50" alt="..." />
    </div>
    <div className="card border-0">
      <img src={logo} className="card-img-top w-50" alt="..." />
     </div>
     <div className="card border-0">
    <img src={federal} className="card-img-top w-50" alt="..." />
      </div>
      <div className="card border-0 mb-5">
       <img src={lagos} className="card-img-top w-50" alt="..." />
       </div>
       <div className="card border-0 mb-5">
       <img src={gear} className="card-img-top w-50" alt="..." />
       </div>
       <div className="card border-0 mb-5">
       <img src={federal} className="card-img-top w-50" alt="..." />
       </div>
       <div className="card border-0 mb-5">
       <img src={lagos} className="card-img-top w-50" alt="..." />
       </div>
   </div>
   </div>
  

  )
}

export default WhoWeWorkWith