import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]); // Kept as all_product
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched products:', data); // Check if data is being fetched
        setAll_Product(data); // Kept as setAll_Product
      })
      .catch(error => console.error('Error fetching products:', error));
      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
          },
          body:null,
      })
      .then((response)=>response.json())
      .then((data)=>setCartItems(data));
  }
},[])

  const addToCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
   if(localStorage.getItem('auth-token')){
    fetch('http://localhost:4000/addtocart',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json',
      },
      body:JSON.stringify({"itemid":itemid})
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
   }
  };

  const removeFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemid":itemid})
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
     
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Update to use 'id' instead of 'id'
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };
  
  

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product, // Kept as all_product
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
