import React from 'react'

const Foot = () => {
  var array_size_of_cart_wala=JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version"));

  return (
    <div className="bg-dark" style={{  color:'white'}}>
    <div className='container pt-5' >
        <div className='row justify-content-start pt-3'>

            <div className='col-lg-3 col-md-6 col-sm-12 mb-5'>
            <h4>Quick Links</h4>
              <a className="nav-link" href="/home"><li style={{ listStyle: 'none', cursor: 'pointer' }}>Home</li></a>
              <a className="nav-link" href="/account"><li style={{ listStyle: 'none', cursor: 'pointer' }}>Account</li></a>
              <a className="nav-link" onClick={(e)=>{
                  e.preventDefault();
                  if(array_size_of_cart_wala.length>0){
                    sessionStorage.setItem('cart_se_back_konsa_wale_pe_jana_hai_ayr_wo_check_karne_wala', window.location.href);
                    window.location.href="/cart";
                  }else{
                    alert("add products to cart");
                  }
                }}><li style={{ listStyle: 'none', cursor: 'pointer' }}>Cart</li></a>
              <a className="nav-link" href="/products"><li style={{ listStyle: 'none', cursor: 'pointer' }}>Order Now</li></a>
            </div>

            <div className='col-lg-5 col-md-6 col-sm-12 mb-5 pt-1' style={{ display :'flex', flexDirection:'column' , alignContent:'flex-end'}}>

                <div style={{ display :'flex', flexDirection:'column' , alignContent:'flex-end'}}>
                Connect with us on social networks at - <b><a href="https://www.linkedin.com/company/mangal-deep" target="_blank" rel="noopener noreferrer">LinkedIn</a></b>
                </div>
                <br></br>
                <div style={{ display :'flex', flexDirection:'column' , alignContent:'flex-end'}}>
                    Visit Our Website For More Information - <b><a href="https://www.mangaldeepfoodgrains.in/" target="_blank" rel="noopener noreferrer">Mangal Deep</a></b>
                </div>

            </div>

            <div className='col-lg-4 col-md-6 col-sm-12 mb-5' style={{ display :'flex', flexDirection:'column'}}>

                <h4>Contact</h4>
                <p>+91 8040964629<br></br>+91 9886223455<br></br>+91 9844061137<br></br>Visit Us : <b><a href="https://maps.app.goo.gl/TjYaEPJEKEYV9h1B6" target="_blank" rel="noopener noreferrer">Get Directions</a></b></p>

            </div>

        </div>
    </div>
    </div>
  )
}

export default Foot