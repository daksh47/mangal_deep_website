import React from "react";
import "./about.css";
import Main from "../../images/main.jpeg"
import Group from "../../images/group.jpeg"
import Comp from "../../images/comp.jpeg"
import HS from "../../images/hs.jpeg"
import S1 from "../../images/stor1.jpeg"
import S2 from "../../images/stor2.jpeg"

const About = () => {
  return (
    
    <div className="about-container">
      <div
        
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "100%",
          height: "100%",
          color:"#E4E4E4"
        }}
      >
        <div className="container d-flex h-100 "  >
          <div className="d-flex flex-column justify-content-center " style={{ marginTop:"10rem"}}>
            <div style={{  textAlign:"center"}}>

              <h3 className="mb-5">Leading wholesaler of food grains since 1986</h3>
              <p style={{  fontSize:'1.3rem', textAlign:'left' }}>
              We are a Bengaluru based leading wholesaler of food grains (pulses, rice, wheat, green peas, etc.) with over 3 decades of experience serving customers across Karnataka, Tamil Nadu and Andhra Pradesh in semi-wholesale, retail (traditional, modern and e-commerce), hotel, restaurants and catering businesses.               </p>
              
              <div className="row justify-content-center">

                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                 <img src={Main} className="img"/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                 <img src={Group} className="img"/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                 <img src={Comp} className="img"/>
                </div>

              </div>

                <h4 className="mb-5">Serving 200+ clients across Karnataka, Tamil Nadu and Andhra Pradesh</h4>
                <p style={{  fontSize:'1.3rem', textAlign:'left' }}>We have been the trusted suppliers for many established retailers and best quality hotels with some of the oldest relationships being supplied for over 2 decades. Our customers see us as their extended team/partners and not as just vendors. </p>
                <ul style={{ textAlign:'left' , marginTop:'2.5rem' }}>
                <h3>Our value add to our clients:</h3>
                  <li>
                  We procure from over 200 millers across India to get the best deals for our clients in terms of price and quality.
                  </li>
                  <li>
                  We deal with transparency and always look for long term relationships with our clients.
                  </li>
                  <li>
                  Our strength lies in our understanding of quality and our grip on most updated market information - we apply our decades of understanding of the market to source the best for our clients.
                  </li>
                </ul>

                <div className="row justify-content-center">

                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                 <img src={HS} className="img"/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                 <img src={S1} className="img"/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                 <img src={S2} className="img"/>
                </div>

              </div>
              <p style={{  fontSize:'1.18rem', textAlign:'left', marginBottom:'5rem' }}>We have a vast supplier base all over India of over 200 millers and food processors who have been our trusted partners for many many years.<br></br><br></br>These suppliers range from small to large processors supplying all types of food grains including pulses, wheat, rice and peas.<br></br><br></br>We have very strong relationships with these suppliers and have been able to consistently source high quality food grains at the best prices over 3 decades.  </p>
              <h3>Team Mangal Deep<br></br></h3>
              <h5><br></br>100+ years of combined experience in foodgrains wholesaling<br></br>Run by highly experienced team with combined experience of over 100 years in the food grains wholesale business.</h5>

              <div className="row justify-content-center pt-5">

                <div className="col-lg-6 col-md-6 col-sm-12 mb-5 p-4 team" style={{textAlign:'left' , border: '2px solid black' ,backgroundColor:"#E4E4E4",color:"black"}}>
                  <h5>PoornaShankar Rawal - Founder & Managing Partner</h5>
                  <p>Has spent 4 decades in this business and is one of the most respected personalities in the Bangalore APMC Yard. </p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-5 p-4 team"style={{textAlign:'left', border: '2px solid black',backgroundColor:"#E4E4E4",color:"black"}}>
                  <h5>Kailash Rawal - Managing Partner</h5>
                  <p>Has been in this business for more than 15 years - manages all the operations and drove 5x growth in business over the last decade. </p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-5 p-4 team"style={{textAlign:'left', border: '2px solid black',backgroundColor:"#E4E4E4",color:"black"}}>
                  <h5>Purushothama - Manager (Sales and Purchase)</h5>
                  <p>Started his career with this business and has grown up the ranks to become a Manager and has been with the firm for about 3 decades. </p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 mb-5 p-4 team"style={{textAlign:'left', border: '2px solid black',backgroundColor:"#E4E4E4",color:"black"}}>
                  <h5>Vipul Rawal - Strategy and Business Development</h5>
                  <p>Grew up with this family business. Spent the last decade working in investment banking and Private Equity / Venture Capital industry. Currently helping the family business with strategy, business development and finance while he still continues his work in the Venture Capital space.<br></br><b><a href="https://in.linkedin.com/in/vipulrawal" target="_blank" rel="noopener noreferrer">LinkedIn</a></b></p>
                </div>
                
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;