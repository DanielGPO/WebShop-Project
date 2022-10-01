import React from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import DisplayProduct from './displayProduct'

const StoreList = (props) => {

  const slideRight = () =>{
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
}

const slideLeft = () =>{
    let slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
}





  return (
    <>
         <AiOutlineDoubleLeft  className='hidden tablet:flex text-white absolute z-10 cursor-pointer left-0 text-4xl bg-black/50 top-0 mt-[250px]' onClick={slideLeft}/>
    <ul id={'slider'} className='flex flex-col tablet:flex-row relative  tablet:overflow-x-hidden tablet:scroll-smooth  tablet:scrollbar-hide  tablet:whitespace-nowrap h-[570px]  '>
        {props.items.map((items) => <DisplayProduct key={items.name} 
        id={items.id}
        name={items.name}
        price={items.price}
        descount={items.descount}
        image={items.image}
        description={items.description}
        />)}

    </ul>
         <AiOutlineDoubleRight className='hidden tablet:flex text-white absolute cursor-pointer right-0 text-4xl z-10 bg-black/50 top-0 mt-[250px]' onClick={slideRight}/>
    </>
  )
}

export default StoreList
