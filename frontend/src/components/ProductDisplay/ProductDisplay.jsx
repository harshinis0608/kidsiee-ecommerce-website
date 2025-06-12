import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star.png'
import { ShopContext } from '../../context/ShopContext';
 const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'> 
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                
            </div>
            <div className="productdisplay-image">
                <img src={product.image} alt="" className='productdisplay-main-img' />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" className='sta'/ >
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            A classic, children's dress. It has a relaxed fit and is made from a comfortable-looking cotton fabric.The neckline appears to be a simple.The overall style is casual and perfect for everyday wear.
           </div>
           <div className="productdisplay-right-size">
            <h1 className='select'>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>&nbsp;12-18M&nbsp;</div>
                <div>18-24M</div>
                <div>2-3Y</div>
                <div>3-4Y</div>
                <div>5-6Y</div>
            </div>
           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className='productdisplay-right-category'><span>Category :</span>Boys,T shirt,Cotton</p>
           <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest</p>
        </div>
    </div>
  )
}
export default ProductDisplay