import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil quo.',
      price: '$300.99',
    },
    {
      name: 'Standard',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil quo.',
      price: '$450.99',
    },
    {
      name: 'Premium',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere cumque nihil quo.',
      price: '$500.99',
    },
  ];

  return (
    <div className="pricing-container">
        <div className="price-heading">
            <h2 style={{fontSize:"15px", }}>PRICING PLANS</h2>
            <h1>Take a look at my packages</h1>
        </div>
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <div style={{textAlign:"left",  position:" relative", right: "1rem", paddingTop:"3rem", paddingBottom:"3rem"}}>
          <h2 className="plan-name">{plan.name}</h2>
          <p className="plan-description">{plan.description}</p>
          </div>
          <div className='price-btn'>
          <div className="plan-price">{plan.price}</div>
          
          <button className="plan-button">Buy Now <i class="fa-sharp fa-solid fa-arrow-right" style={{color:"black", left:"0.5rem", position:"relative"}}></i></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
