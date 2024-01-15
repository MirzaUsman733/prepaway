import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FirstHeader from 'components/headerComponents/FirstHeader';
import SecondHeader from '../components/headerComponents/SecondHeader';
import ThirdHeader from 'components/headerComponents/ThirdHeader';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import Microsoft from './Microsoft';
import Cart from './Cart';
import HomeFooter from 'components/homeComponents/HomeFooter';

export default function Index() {
  return (
    <>
    <FirstHeader/>
    <SecondHeader/>
    <ThirdHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/microsoft' element={<Microsoft/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <HomeFooter/>
    </>
  )
}
