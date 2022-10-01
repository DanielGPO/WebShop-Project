import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingContext from '../context/ShopCartContext'
import { GoThreeBars } from 'react-icons/go'
import { VscAccount } from 'react-icons/vsc'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import AsideBar from './asideBar'


export default function NavBar(props) {
  const CartItemCtx = useContext(ShoppingContext)

 const totalItems = CartItemCtx.totalItems

    const [aside, setAside] = useState(false)

    function SideBar(){
        setAside(!aside)
    }

  return (
    <>
    <header className='fixed tablet:absolute z-10 h-[50px] w-full top-0 bg-black/80'>
        <nav className='text-white flex flex-row items-center justify-between '>
           
          
           <div className='flex flex-row items-center'>
          {aside ?  <AiOutlineClose  onClick={SideBar} className='hover:cursor-pointer hover:bg-slate-500 text-4xl ml-[20px] mr-[20px]'/> :  <GoThreeBars  onClick={SideBar} className='hover:cursor-pointer hover:bg-slate-500 text-4xl ml-[20px] mr-[20px]'/>}
            <Link to='/'>
            <h1 className='text-4xl font-bold text-cyan-400'>UpStore</h1>
            </Link>
           </div>

           <div className='hidden laptop:flex flex-row items-center mt-[7px] outline-none'>
            <input placeholder='Pesquisar..' className='text-black outline-none text-[20px] w-[300px] h-[35px]' type='search' />
            <button className='bg-white text-black text-[35px] hover:bg-black hover:text-white hover:border'><AiOutlineSearch/></button>
           </div>

            <div className='flex flex-row items-center'>
            <Link to='/Shop'>
             <button className=' flex items-center flex-row mr-[40px] font-bold text-[27px] hover:bg-white hover:text-black mt-[5px] rounded-xl'><AiOutlineShoppingCart/>: <span className='text-1xl'> {CartItemCtx.totalItems}</span></button>
            </Link>
            
                <Link>
                <p className='border item-center rounded-xl py-1 px-2 flex flex-row  ml-[30px] mr-[30px] font-bold'>
                  Sign up
                <VscAccount className='text-2xl ml-2' />
                </p>
                </Link>

            </div>
        </nav>
    </header>
            <div className={aside ? ' fixed top-0 flex text-2xl flex-col  tablet:absolute z-20 bg-black/90 left-0 h-[540px] w-[270px] mt-[50px] ' : 'hidden'}>
            <AsideBar/>
            <div onClick={SideBar} className='w-screen tablet:w-[1365px] h-[640px] bg-black/40 absolute z-10'></div>
       
            </div>
    </>
  )
}
