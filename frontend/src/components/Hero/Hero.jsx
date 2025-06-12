import React from 'react'
import './Hero.css'
import handwave_iconp from '../assets/handwave_iconp.png'
//import actualarrow from '../assets/actualarrow.png'
import hero_imgp from '../assets/hero_imgp.png'

 const Hero = () => {
    console.log("Hero component is rendered");
  return (
    <div className='hero'>
<div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className="hero-hand-icon">
        <p>new</p>
        <img src={handwave_iconp} alt="" />
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collection</div>
    {/* <img src={actualarrow} alt=""  className='arrowimg'/> */}
</div>
    </div>
    <div className="hero-right">
        <img src={hero_imgp} alt="" />
</div>

    </div>
  )
}
export default Hero 
