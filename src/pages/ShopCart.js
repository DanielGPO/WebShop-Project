import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import StoreList from '../Components/StoreList';
import ShoppingContext from '../context/ShopCartContext'

export default function ShopCart() {

  const CartItemCtx = useContext(ShoppingContext)

  let content;
    content = <StoreList items={CartItemCtx.cartItems}/>
  

if(CartItemCtx.totalItems === 0 ){
  return (
    <>
    <section className=' h-screen top-0 relative'>
    <h5 className='mt-[60px] text-black text-4xl ml-10'>Carrinho de compras</h5>
    <p className='mt-[100px] text-2xl ml-10'>Seu carrinho está vazio.</p>
    </section>


    </>
  )

} else{
  return(
    <>
    <section className='h-[695px] text-black bg-zinc-900 top-0 absolute w-screen'>

    <h5 className='mt-[60px] text-white text-4xl ml-10'>Carrinho de compras</h5>
    <div>
    {content}
    </div>
    <button className='py-[10px] px-[20px] hover:bg-slate-900 hover:border hover:text-white text-3xl bg-slate-400 top-0 mt-[70px] mr-[20px] absolute right-0 text-black'
    >COMPRAR</button>
    </section>
    </>
  )
  
}
}
