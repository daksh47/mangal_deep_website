import React, { useRef , useEffect } from 'react'
import './navbar.css'
import Logo from "../../images/icon.png"
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  
  if( JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version"))==null || JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version")).length===0){
    sessionStorage.setItem('cart_wala_array_web_wala_version', JSON.stringify([]));
  }
  var array_size_of_cart_wala=JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version"));

  const navContainer = useRef(null);
  const nav = useRef(null);

  useEffect(()=>{
  if (window.pageYOffset > 30) {
    navContainer.current.style.backgroundColor = '#000000';
  } else {
    navContainer.current.style.backgroundColor = 'rgba(0, 0, 0,0)';
  }
  if(parseInt(document.getElementById("cart_count_data").innerHTML)>=10){
    document.getElementById("cart_count_data").style.paddingLeft=".2rem";
  }
  if(parseInt(document.getElementById("cart_count_data").innerHTML)>=100){
    document.getElementById("cart_count_data").style.paddingLeft=".1rem";
  }
  if(parseInt(document.getElementById("cart_count_data").innerHTML)>=1000){
    document.getElementById("cart_count_data").style.paddingLeft="0rem";
  }
 },[]);

  window.onscroll = function () {
    if (window.pageYOffset > 30) {
      navContainer.current.style.backgroundColor = '#000000';
    } else {
      navContainer.current.style.backgroundColor = 'rgba(0, 0, 0,0)';
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-left w-100 fixed-top nav-container" ref={navContainer}>
      <nav className="navbar navbar-expand-lg container navbar-dark text-white navigation">
        <div className="container-fluid"  >
        <div className="row" >
            <a href="https://play.google.com/store/apps/details?id=com.mangaldeep.mdmandiexpress" target="_blank" rel="noopener noreferrer" className="col-md-12 col-sm-9 col-7">
              <img src={Logo} className="img" style={{ width: '80px' }}></img>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav ms-auto" >
              <li className="nav-item" >
                <a className="nav-link" href="/home">
                  Home 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/exclusive">
                  Exclusive Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/compare">
                  Compare Rates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/account">
                  Account
                </a>
              </li>
              <li>
                <a className="nav-link" style={{ cursor:'pointer' }} onClick={(e)=>{
                  e.preventDefault();
                  if(array_size_of_cart_wala.length>0){
                    sessionStorage.setItem('cart_se_back_konsa_wale_pe_jana_hai_ayr_wo_check_karne_wala', window.location.href);
                    window.location.href="/cart";
                  }else{
                    alert("add products to cart");
                  }
                }}>
                  <div style={{ position: 'absolute'}}>
                  <FaShoppingCart size={32}/>
                  <span id="cart_count_data" style={{ position: 'absolute',bottom:"1.4rem" ,backgroundColor:'red',color:'white',borderRadius:'50%',width: '1.5rem',height:'1.5rem',left:'1.3rem',paddingLeft:".5rem"}}>{array_size_of_cart_wala.length}</span>                  
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar