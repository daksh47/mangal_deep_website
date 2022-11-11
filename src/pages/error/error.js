import React, { useState, useEffect } from 'react'
import Foot from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import PageHeader from '../../components/header/header'

const Err = () => {

    async function redirect(){
        let i;
        for(i=10;i>0;i--){
            document.getElementById("redirect").innerHTML="Redirecting To Home Page In "+i+" ....";
            await new Promise(resolve => setTimeout(resolve, 1000));
            if(i==2){
                window.location.href="/";
            }
        }
    }

    useEffect(() => {
        redirect();
    }, []);
  return (
    <>
    <Navbar/>
    <PageHeader heading='Error'/>
    <div style={{ backgroundColor:"black" , textAlign:"center" , color:"white" ,padding:"2rem" , marginTop:"-2rem"}}>
        <h2>Page Not Found</h2><br></br>
        <h4>Dont Mess With URL</h4><br></br>
        <h5 id="redirect">Redirecting To Home Page In 10 ....</h5>
    </div>
    <Foot/>
    </>
  )
}

export default Err