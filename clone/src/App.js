import React from 'react';
import Navabar from './Navabar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUP from './components/signup/SignUP';
import Footer from './Footer';
import "./styles/Styles.css"
function App() {
  return (
   <>
   <div className='app'>
   <div className='Navbar1'>
   <Navabar/>
   </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUP' element={<SignUP/>}/>
    </Routes>
    <Footer/>
   </div>
   </>
  );
}

export default App;
