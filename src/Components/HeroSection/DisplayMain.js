import React, { useContext } from 'react'
import ShoppingContext from '../../context/ShopCartContext'

export default function DisplayMain(props) {

    const CartItemCtx = useContext(ShoppingContext)

    const itemInCart = CartItemCtx.itemInCart(props.id)
  
    function addCartItem (){
      if(itemInCart){
        CartItemCtx.removeShoppingCart(props.id)
      }else {
        CartItemCtx.addShoppingCart({
          id:props.id,
          name: props.name,
          image: props.image,
          descount: props.descount,
          price: props.price,
          description: props.description
        })
      }
     
     
    }


  return (
    <div className='relative pb-[50px] font-bold ml-[20px] bg-white w-[240px] mb-[60px]'>
        <img className='w-[250px] tablet:w-[240px] h-[200px] tablet:h-[200px]' src={props.image} alt={props.name} />
        <div>
            <p className='text-[20px]'>{props.name}</p>
        </div>
        <div>
            <p className='ml-[2px]'>{props.description}</p>
        </div>
        <div className='absolute top-0 ml-[200px] bg-black/60'>
            <p className='text-teal-400'>{props.descount}</p>
        </div>
        <div className='absolute top-0 text-white text-xl z-[5] bg-black/60'>
        <p>{props.price}</p>
        </div>

        <div>
        <button onClick={addCartItem} className='absolute bottom-0 hover:bg-black py-1 px-1 text-black bg-teal-400 hover:bg-teal-900 hover:text-white ml-[30px] mb-[3px]'>{itemInCart ? ' Remover do Carrinho' :  'Adicionar ao Carrinho'}</button>
        </div>
        
    </div>
  )
}
