import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assets/remove_icon1.jpg'
 const CartItems = () => {
    const {getTotalCartItems,getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e)=>{
        if(cartItems[e.id]>0){
          return (
           <div key={e.id}>
          <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className='carticon-product-icon' />
              <p>{e.name}</p>
              <p>₹{e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p>₹{e.new_price*cartItems[e.id]}</p>
              <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" className='cartitems-remove-icon'/>
          </div>
          <hr />
      </div>
          );
        }
        return null;
       })}
       <div className='cartitems-down'>
        <div className="cartitems-total">
          <h1>Order Summary</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
             <hr />
             <div className="cartitems-total-item">
              <h3>Total</h3>
            <h3>₹{getTotalCartAmount()}</h3>
             </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>Have a special code? Enter it here to redeem.</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
       </div>
    </div>
  );
}
export default CartItems