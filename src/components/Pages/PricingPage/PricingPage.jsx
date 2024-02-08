import React from 'react'
import './PricingPage.css'
import Pricing from '../../Pricing/Pricing'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'


const PricingPage = () => {
  return (
    <div>
      <Navbar/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default PricingPage