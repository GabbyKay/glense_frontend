import React from 'react'
import './Aboutus.css'
const Aboutus = () => {
  return (
    <div className='About-container'>
        <div className="About-inner-container">
            <div>
                <img className='About-img1' src="./images/about2.jpg" alt="" />
            </div>
            <div className="about-right-side">
                <h3>ABOUT US</h3>
                <h1>It takes more than just work with camera</h1>
                <div className='about-subhead'>
                    <div className="services">
                        <h1 style={{fontSize:"25px", fontWeight:"bold", color:"rgb(119,119,119)"}}>Services</h1>
                        <ul className='about-subhead-text'>
                        <li>Fashion Photography</li>
                        <li>Wedding Photography</li>
                        <li>Commercial Shooting</li>
                        <li>Photo Studio</li>
                        </ul>
                    </div>
                    <div className="award">
                    <h1 style={{fontSize:"23px", fontWeight:"bold", color:"rgb(119,119,119)"}}>Awards</h1>
                        <ul className='about-subhead-text'>
                        <li>The National Geographic Photo</li>
                        <li>Contest</li>
                        <li>Sony World Photography</li>
                        <li>Monovisions Photography</li>
                        </ul>
                        <div style={{position:"relative", top:"4rem"}}>
                <img className='aboutimg3' src="./images/about3.jpg" alt="" width={260}/>
            </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus