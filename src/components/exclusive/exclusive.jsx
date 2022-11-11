import React, { useState, useEffect } from "react";
import "./exclusive.css";

const Exclusive = () => {


  let online_wlaa_data;
  const link =
    "https://sheets.googleapis.com/v4/spreadsheets/1jrUMBsXYdzeaKpyvFUI1xRFitGF0sLmgRqj8_-O4UXA/values/Sheet5?key=AIzaSyCUuFo-j73XtIScQ6_NQRRW0LRSCakgTfg";
  function exclu() {
    fetch(link)
      .then((Response) => Response.json())
      .then((responseData) => {
        online_wlaa_data=Object.values(responseData);
        let i;
        let last_wala=online_wlaa_data[online_wlaa_data.length-1];
        let super_last_wala;
        let div,out_div,img,txt;

        document.getElementById("exe_data").innerHTML='';

        for(i=1;i<last_wala.length;i++){

          super_last_wala=last_wala[i];
          if(super_last_wala[14].trim()!=null && super_last_wala[14].trim()!="a*1-a" && super_last_wala[14].trim()!=""){
            var fuck=super_last_wala[14].split("<");
            let j;let img_link;
            for(j=1;j<last_wala.length;j++){
              let boss_fuck=last_wala[j];
              if(boss_fuck[1].trim()===fuck[1].trim())
              {
                img_link=boss_fuck[6];
                break;
              }
            }

            div=document.createElement("div");
            div.className="col-lg-3 col-md-6 col-sm-6 mb-5 bhai";
            out_div=document.createElement("div");
            out_div.className="outer-card";
            var final_data;
            for(var z=1;z<last_wala.length;z++)
            {
              var yar=last_wala[z];
              if(yar[1].trim().toLowerCase()===fuck[1].trim().toLowerCase())
              {
                final_data=yar[0]+"!_-kinnhanarcfahiedfasakhfasldsaovfennnbnbanbda-_!"+yar[1]+"!_-kinnhanarcfahiedfasakhfasldsaovfennnbnbanbda-_!"+z;
                break;
              }
            }
            out_div.id=final_data;
            out_div.onclick=function open()
            {
              var bc=this.id.split("!_-kinnhanarcfahiedfasakhfasldsaovfennnbnbanbda-_!");
              window.location.href="/products/product="+bc[0].replaceAll(" ","!-!").toLowerCase().trim()+"/brands/brand/"+bc[1].replaceAll(" ","!_!").trim()+"/pos/"+bc[2].trim();
            }
            img=document.createElement("img");
            img.src=img_link;
            img.className="img1";
            txt=document.createElement("p");
            txt.innerHTML=fuck[1]+"<br><span style='color:red'>@ "+fuck[2]+" Per Kg</span>"; 
            out_div.append(img);
            out_div.append(txt);
            div.append(out_div);
            document.getElementById("exe_data").appendChild(div);

          }

        }

      });
  }

  useEffect(() => {
    exclu();
  }, []);

  return (
    
    <div className="exe-container">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "100%",
          height: "100%",
          color: "#E4E4E4",
        }}
      >
        <div className="container d-flex h-100 d-flex flex-column justify-content-center">

          <div
            className="d-flex flex-column justify-content-center "
            style={{ marginTop: "10rem" }}
          >        

            <div style={{ textAlign: "center" }}>
              <h3 style={{ marginBottom:"4rem"}}>Exclusive Deals</h3>
              <div className="row" id="exe_data" style={{ display:'flex' ,justifyContent:"space-around" }}>
              <div className="loader" id="load"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
