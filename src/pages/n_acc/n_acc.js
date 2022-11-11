import React from 'react'
import New_acc from '../../components/new_acc/new_acc'
import Foot from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import PageHeader from '../../components/header/header'

const N_acc = () => {
  return (
    <>
    <Navbar/>
    <PageHeader heading="Create Account"/>
    <New_acc/>
    <Foot/>
    </>
  )
}

export default N_acc