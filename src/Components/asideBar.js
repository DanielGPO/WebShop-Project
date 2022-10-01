import React from 'react'
import { Link } from 'react-router-dom'
export default function AsideBar() {
  return (
    <div className='absolute z-20 '>
           <Link to='/'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Dispositivos</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Setups</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Configurações</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Acessibilidade</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Sobre nós</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Descontos</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Placas de Video</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Processadores</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Sobre nós</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Compras</button>
               </Link>

               <Link to='/dispositivos'>
                <button className='w-full text-white hover:text-cyan-400 hover:bg-black py-2'>Contrato</button>
               </Link>
      
    </div>
  )
}
