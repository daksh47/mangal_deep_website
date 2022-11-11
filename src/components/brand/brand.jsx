import React, { useState, useEffect } from "react";
import PageHeader from '../../components/header/header'
import "./brand.css"
import No_Image from "../../images/no_image.jpg"

const Brands = () => {
    
    const [brand_name,setBrand]=useState();


  let brand_data;
  const brand_link =
    "https://sheets.googleapis.com/v4/spreadsheets/1jrUMBsXYdzeaKpyvFUI1xRFitGF0sLmgRqj8_-O4UXA/values/Sheet5?key=AIzaSyCUuFo-j73XtIScQ6_NQRRW0LRSCakgTfg";
  function brand() {

    

    let link_location=window.location.href;
    if(link_location.includes('product=')){

    
    link_location=link_location.split("product=");
    link_location=link_location[1].replaceAll("/brands","").trim();
    link_location=link_location.trim().replaceAll("!-!"," ").trim();
    setBrand(link_location.toUpperCase());
    fetch(brand_link)
      .then((Response) => Response.json())
      .then((yo) => {
        brand_data=Object.values(yo);
        brand_data=brand_data[brand_data.length-1];
        let i,brand_check=[],z=0;
        let div,out_div,img,txt,back_btn;
        for(i=1;i<brand_data.length;i++){
            let one_brand_data=brand_data[i];
            brand_check[z]=one_brand_data[0].trim().toUpperCase();
            z++;
        }
        if(brand_check.includes(link_location.trim().toUpperCase()))
        {
            document.getElementById("brand_data").innerHTML='';
            document.getElementById("brand_data1").innerHTML='';
            let one_there=0;
            back_btn=document.createElement("button");
            back_btn.className="no_button";
            back_btn.innerHTML="&#10094; Back To All Products";
            let bsdk_love=back_btn.innerHTML;
            back_btn.onclick=function(){
            window.location.href="/products";
                
            }
            for(i=1;i<brand_data.length;i++){
                let new_one_brand_data=brand_data[i];
                if(new_one_brand_data[0].trim().toUpperCase()===link_location.trim().toUpperCase()){
                    if(new_one_brand_data[5].trim()!="0"){

                        one_there=1;
                        div=document.createElement("div");
                        div.className="col-lg-3 col-md-6 col-sm-12 mb-5";
                        out_div=document.createElement("div");
                        out_div.className="outer-card-brand";
                        out_div.id=i;
                        img=document.createElement("img");
                        if(!new_one_brand_data[6].trim().includes("changeAddLink")){
                            img.src=new_one_brand_data[6];
                        }else{
                            img.src=No_Image;
                        }
                        img.onload=function(){
                            let bc=document.getElementById("loading_wala_timepass");
                            bc.removeAttribute("id");
                        }
                        img.className="brand_img";
                        img.id="loading_wala_timepass"
                        txt=document.createElement("p");
                        txt.className="detail_brand";
                        let sp=new_one_brand_data[3].replaceAll("₹","").trim();
                        let mrp=new_one_brand_data[4].replaceAll("₹","").trim();
                        let off=parseInt( ( (mrp*100) - (sp*100) ) /mrp );
                        txt.innerHTML="<b>"+new_one_brand_data[1]+"</b><br>("+new_one_brand_data[2]+")<br>"+new_one_brand_data[7]+"<br><span style='font-weight:bold ; font-size:1.3rem'>"+new_one_brand_data[3]+"</span> <s>"+new_one_brand_data[4]+"</s> <span style='background-color:#66FF99 ;padding:.2rem'>"+off+"% Off</span>"; 
                        out_div.append(img);
                        out_div.append(txt);
                        div.append(out_div);
                        document.getElementById("brand_data1").appendChild(back_btn);
                        document.getElementById("brand_data").appendChild(div);
                        out_div.onclick=function(){
                            window.location.href=window.location.href+"/brand/"+new_one_brand_data[1].replaceAll(" ","!_!").trim()+"/pos/"+this.id;
                        }

                    }
                }
            }
            if(one_there===0){
                let no_there_div=document.createElement("div");
                no_there_div.className="nahi_hai";
                let no_there=document.createElement("h1");
                no_there.innerHTML="All <span style='background-color: yellow;'>"+link_location.trim().toUpperCase()+"</span> Brands <br>Are <span style='background-color: yellow;'>Out-Of-stock</span> <br>Due To High Demand<br>We <span style='background-color: yellow; line-height:1.5'>Regret For Inconvenience</span>";
                no_there_div.appendChild(no_there);
                no_there=document.createElement("button");
                no_there.className="no_button";
                no_there.innerHTML="Check Other Products";
                no_there.onclick=function(){
                    window.location.href="/products";
                }
                document.getElementById("brand_data1").appendChild(no_there);
                document.getElementById("brand_data").appendChild(no_there_div);
            }
        }else{
            window.location.href="/*";
        }
      });
    }else{
        window.location.href="/*";
    }
  }
  function setheight(){
    let largest=0,i;
    for(i=0;i<document.getElementById("brand_data").children.length;i++){
        console.log(document.getElementById("brand_data").childNodes[i].childNodes[0].offsetHeight);
        if(largest<document.getElementById("brand_data").childNodes[i].childNodes[0].offsetHeight)
            largest=document.getElementById("brand_data").childNodes[i].childNodes[0].offsetHeight;
    }
    largest=largest-90;
    for(i=0;i<document.getElementById("brand_data").children.length;i++){
        document.getElementById("brand_data").childNodes[i].childNodes[0].style.height=largest+"px";
    }
    }


  useEffect(() => {
    brand();
  }, []);

  return (

  <>
  <PageHeader heading={brand_name}/>
  <div className='container mt-5 mb-5'>

        <div id="brand_data1" style={{ marginTop:'-3rem'}}>
        </div>

        <div className="row mt-5" id="brand_data" style={{ display:'flex' ,justifyContent:"space-around" }}>
            <div className="loader" id="load"></div>
        </div>
    </div>
  </>
  );
};

export default Brands;
