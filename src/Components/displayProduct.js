import React,{useContext} from 'react'
import ShoppingContext from '../context/ShopCartContext'



export default function DisplayProduct(props) {
  const CartItemCtx = useContext(ShoppingContext)

  const itemInCart = CartItemCtx.itemInCart(props.id)

  function addCartItem (){
    if(itemInCart){
      CartItemCtx.removeShoppingCart(props.id)
      localStorage.removeItem('arr')
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
    localStorage.setItem('arr', JSON.stringify(CartItemCtx))

  return (
    <li className='relative tablet:h-[450px] h-[460px] tablet:w-[440px] tablet:h-[500px]  mt-[70px] ml-[20px]  mr-[20px] shadow-[blue] shadow-2xl bg-white'>
       
        <div className='tablet:w-[460px] w-full h-[300px]'>
            <img className='tablet:w-[440px] h-[300px] object-cover' src={props.image} alt={props.name} />
        </div>

        <div className='ml-[30px] text-xl tablet:text-2xl font-bold '>
            <p>{props.name}</p>
        </div>
          <div className='w-[90px] ml-[20px]'>
            <p className='text-xl w-[90px]'>{props.description}</p>
        </div>


        <div className='absolute top-0 ml-[380px] text-2xl bg-black/60'>
            <p className='text-teal-400'>{props.descount}</p>
        </div>
        <div className='absolute left-0 top-0 text-white text-2xl z-[5] bg-black/60'>
        <p>{props.price}</p>
        </div>

        <div>
        <button onClick={addCartItem} className='mt-[40px] ml-[120px] hover:bg-black py-2 px-2 text-white bg-slate-800'>{itemInCart ? ' Remover do Carrinho' :  'Adicionar ao Carrinho'}</button>
        </div>
      
    </li>
  )
}
