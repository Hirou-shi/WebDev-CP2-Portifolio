import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header-fixed'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default App
