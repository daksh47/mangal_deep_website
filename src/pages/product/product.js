import React from 'react'
import Foot from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import PageHeader from '../../components/header/header'
import Prod from '../../components/products/products'

const Product = () => {
  return (
    <>
    <Navbar/>
    <PageHeader heading='Products'/>
    <Prod/>
    <Foot/>
    </>
  )
}

export default Product