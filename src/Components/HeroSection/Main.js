import React from 'react'
import DisplayMain from './DisplayMain'

export default function Main(props) {
  return (
    <div className=' bg-zinc-900 w-full flex flex-row'>
        {props.items.map((items) => <DisplayMain key={items.id} 
        id={items.id}
        name={items.name}
        price={items.price}
        image={items.image}
        descount={items.descount}
        description={items.description}
        />)}
    </div>
  )
}
