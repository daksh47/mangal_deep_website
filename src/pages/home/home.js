import React from 'react'
import Foot from '../../components/footer/footer'
import Hero from '../../components/hero/hero'
import Navbar from '../../components/navbar/navbar'

const Home = () => {

  if( JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version"))==null || JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version")).length===0){
    sessionStorage.setItem('cart_wala_array_web_wala_version', JSON.stringify([]));
  }

  return (
    <>
    <Navbar/>
    <Hero/>
    <Foot/>
    </>
  )
}

export default Home