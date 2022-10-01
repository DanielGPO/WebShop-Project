import React from 'react'
import { DiAndroid } from 'react-icons/di'
import {ImTwitter } from 'react-icons/im'

export default function Footer() {
  return (
    <div className='bg-zinc-900'>

        <div className='flex flex-row bg-black  text-white h-[300px]'>
            
            <div className='flex flex-col mt-[20px]'>
                <h6 className='text-3xl'>Informações</h6>

                <p className='mb-[3px] text-xl cursor-pointer hover:text-white/30'>Conta Vip</p>
                <p className='mb-[3px] text-xl cursor-pointer hover:text-white/30'>Suporte e FAQ</p>
                <p className='mb-[3px] text-xl cursor-pointer hover:text-white/30'>Política DMCA</p>
                <p className='mb-[3px] text-xl cursor-pointer hover:text-white/30'>Termos e condições</p>
            </div>

            <div className='flex flex-col mt-[20px]'>
                <h6  className='text-3xl ml-[100px]'>Mídias Sociais</h6>
                <button className='py-[20px] px-[10px] ml-[70px] mt-[10px] bg-cyan-900 rounded-3xl flex flex-row'> <ImTwitter className='text-2xl mr-[20px]'/> Siga a UpStore</button>
            </div>

            <div className='flex flex-col mt-[20px]'>
                <h6  className='text-3xl ml-[100px]'>Aplicativo UpStore</h6>

                <button className='py-[20px] px-[10px] ml-[70px] mt-[10px] bg-slate-900 rounded-3xl flex flex-row '> <DiAndroid className='ml-[7px] mr-[20px] text-2xl'/> Baixe o aplicativo</button>
            </div>

            <div className='flex flex-col mt-[20px]  ml-[100px] w-[260px] '>
                <h6 className='text-3xl'>Conteúdo & API</h6>

                <p className='mb-[3px] text-xl cursor-pointer hover:text-white/30'>Todo o conteúdo nesse site é promovido pelo Google. Não tenho direito sobre nenhuma das fotos e elas são ilustrativas com o intuito de demonstrar minhas capacidades em deselvolvimento web</p>
            </div>

        </div>
      
    </div>
  )
}
