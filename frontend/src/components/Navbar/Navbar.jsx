import React, { useContext, useState,useRef } from 'react'
import '../Navbar/Navbar.css'

import logo from '../assets/logo.png'
import carimg from '../assets/carimg.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.webp'
 const Navbar = () => {
const[menu,setMenu]=useState("SHOP");
const {getTotalCartItems}=useContext(ShopContext);
const menuRef=useRef();

const dropdown_toggle=(e)=>{
  menuRef.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle('open');
};

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img  src={logo} style={{ width: '80px', height: '80px' }} alt="" />
        <p>KIDSIEE</p>
        </div>
        <img className='nav_dropdown' src={nav_dropdown} alt="" />
        <ul ref={ menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("SHOP")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link> {menu=="SHOP"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("BOYS")}}><Link style={{textDecoration:'none'}} to='/BOYS'>BOY</Link> {menu=="BOYS"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("GIRLS")}}><Link style={{textDecoration:'none'}} to='/GIRLS'>GIRL</Link> {menu=="GIRLS"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {  localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button> :
        <Link to='/login'><button>Login</button></Link> 
         }
        <Link to='/cart'> <img src={carimg} className='cartimg' alt="" /></Link> 
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
       
  );
}
export default Navbar;