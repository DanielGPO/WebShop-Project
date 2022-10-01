import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

 const ShoppingContext = createContext({
    cartItems: [],
    totalItems: 0,
    addShoppingCart: (shopCartItem) => {},
    removeShoppingCart: (itemId) => {},
    itemInCart: (itemId) => {}
 })


export  function ShopCartContext(props) {


    const [userCartItem, setUserCartItem] = useState([]);

    function addItemHandler(shopCartItem){
        setUserCartItem((prevUserCartItem) =>{
           return prevUserCartItem.concat(shopCartItem)
        })
    }

    function removeItemHandler(itemId){
        setUserCartItem(prevUserCartItem => {
            return prevUserCartItem.filter(item => item.id !== itemId)
        })
    }

    function itemInCartHandler(itemId){
        return userCartItem.some(item => item.id === itemId)
    }

    const context = {
        cartItems: userCartItem,
        totalItems: userCartItem.length,
        addShoppingCart: addItemHandler,
        removeShoppingCart: removeItemHandler,
        itemInCart: itemInCartHandler
    }

  return (
    <ShoppingContext.Provider value={context}>
      {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingContext;



