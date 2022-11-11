import React from 'react'
import Foot from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Place from '../../components/place_order/place_order'
import PageHeader from '../../components/header/header'

const Details = () => {
  return (
    <>
    <Navbar/>
    <PageHeader heading="Enter Your Details"/>
    <Place/>
    <Foot/>
    </>
  )
}

export default Details