import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/rightarrow.jpg'
 const Breadcrum = (props) => {
    const {product}= props;
  return (
    <div className='breadcrum'>
     HOME <img src={arrow_icon} className='bread'  alt="" /> SHOP<img src={arrow_icon} className='bread'   alt="" /> {product.category} <img src={arrow_icon} alt="" className='bread'   /> {product.name}
    </div>
  )
}
export default Breadcrum