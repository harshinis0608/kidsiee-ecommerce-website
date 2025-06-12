import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown-arrow.webp'
import Item from '../components/Item/Item'
 const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  console.log('All products:', all_product);
  return (
    <div className='shop-category-banner'>
        <img src={props.banner} alt="" className='imgb' />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" className='sortby' />
          </div>
        </div>
        <div className="shopcategory-products">
        {all_product.map((item, i) => {
  if (props.category.trim().toLowerCase() === item.category.trim().toLowerCase()) {
    return (
      <Item 
        key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}
      />
    );
  }
  return null;
})}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}




export default ShopCategory 