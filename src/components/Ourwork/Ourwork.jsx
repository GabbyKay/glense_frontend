import React from "react";
import "./Ourwork.css";
const Ourwork = () => {
  return (
    <div className="ourwork">
      <div className="ourwork-container">
        <h1>Our works can say more</h1>
        <div className="ourwork-steps">
        <div className="ourwork-step">
          <img src="./images/works/img6.jpg" alt="" width={500} />
          <img className="ourwork-img2"  style={{position:"relative", top:"8rem"}} src="./images/works/img2.jpg" alt="" width={500} />
        </div>

        <div className="ourwork-step">
          <img src="./images/works/img10.jpg" alt="" width={500} />
          <img className="ourwork-img2"  style={{position:"relative", top:"8rem" }} src="./images/works/img8.jpg" alt="" width={500} />
        </div>

        <div className="ourwork-step">
          <img src="./images/works/img4.jpg" alt="" width={500} />
          <img style={{position:"relative", top:"8rem"}} src="./images/works/img5.jpg" alt="" width={500} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
