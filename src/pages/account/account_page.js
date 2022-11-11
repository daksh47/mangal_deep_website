import React from 'react'
import Foot from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import PageHeader from '../../components/header/header'
import Account from '../../components/account/account'

const Account_page = () => {
  return (
    <>
    <Navbar/>
    <PageHeader heading="Account"/>
    <Account/>
    <Foot/>
    </>
  )
}

export default Account_page