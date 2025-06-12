import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/navlogo.png';
import navprofile from '../../assets/navprofile.jpg';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-title'>
     <img src={navlogo} alt="" className="navlogo1" />
     <p>KIDSIEE</p>
     </div>
     <img src={navprofile} alt="" className='navprofile1' />
    </div>
  )
}

export default Navbar