import React from "react";
import Produtos from "./Components/Produtos";
import {Route, Routes } from 'react-router-dom'
import ShopCart from "./pages/ShopCart";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Produtos/>}/>
        <Route path='/Shop' element={<ShopCart/>}/>
      </Routes> 
    </>
  
  );
}

export default App;
