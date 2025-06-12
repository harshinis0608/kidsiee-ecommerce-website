import React from 'react'
import './NewsLetter.css'
 const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Receive special offers directly in your inbox :)</h1>
      <p>Join our newsletter to keep yourself informed and up-to-date.</p>
      <input type="email" placeholder='Your Email Id' className='inp'/>
      <button className='loginb'>Subscribe</button>
    </div>
  )
}
export default NewsLetter