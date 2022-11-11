import React from 'react'
import Foot from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import PageHeader from '../../components/header/header'
import Y_orders from '../../components/y_orders/y_order'

const Orders = () => {
  return (
    <>
    <Navbar/>
    <PageHeader heading="Your Orders"/>
    <Y_orders/>
    <Foot/>
    </>
  )
}

export default Orders