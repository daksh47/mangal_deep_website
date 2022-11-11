import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    
    <div className="hero-container">


      <div
        
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "100%",
          height: "100%",
          color:'#E4E4E4'
        }}
      >
        <div className="container d-flex h-100" >
          <div className="d-flex flex-column justify-content-center col-lg-6 col-md-10">
            <div style={{ marginTop:"5rem"}}>
              <h1 className="mb-5">Mangal Deep Food Grains !</h1>
              <p>
              We are a Bengaluru based leading wholesaler of food grains (pulses, rice, wheat, green peas, etc.) with over 3 decades of experience serving customers across Karnataka, Tamil Nadu and Andhra Pradesh in semi-wholesale, retail (traditional, modern and e-commerce), hotel, restaurants and catering businesses. 
              </p>
              <a href="/products"><button className="button">Order Now</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;