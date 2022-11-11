import React, { useState, useEffect } from 'react'
import "./products.css";

const Prod = () => {

    let products_data,image_data;
    const prod_link =
        "https://sheets.googleapis.com/v4/spreadsheets/1jrUMBsXYdzeaKpyvFUI1xRFitGF0sLmgRqj8_-O4UXA/values/Sheet5!A:A?key=AIzaSyCUuFo-j73XtIScQ6_NQRRW0LRSCakgTfg";
    function product() {
        fetch(prod_link)
        .then((Response) => Response.json())
        .then((yo) => {
            products_data=Object.values(yo);
            const photo_link =
            "https://sheets.googleapis.com/v4/spreadsheets/1jrUMBsXYdzeaKpyvFUI1xRFitGF0sLmgRqj8_-O4UXA/values/Sheet7?key=AIzaSyCUuFo-j73XtIScQ6_NQRRW0LRSCakgTfg";
            fetch(photo_link)
            .then((Response) => Response.json())
            .then((responseData) => {
                image_data=Object.values(responseData);

                let div,out_div,img,txt,i,final_name_data=[],z=0;
                let temp_prod_data=products_data[products_data.length-1];
                document.getElementById("prod_data").innerHTML='';
                for(i=1;i<temp_prod_data.length;i++){
                    let temp_prod_name_data=temp_prod_data[i];
                    if(!final_name_data.includes(temp_prod_name_data[0].trim())){
                        final_name_data[z]=temp_prod_name_data[0].trim();
                        z++;
                    }
                }
                let j,temp_data=image_data[image_data.length-1];
                for(i=0;i<final_name_data.length;i++){
                    div=document.createElement("div");
                    div.className="col-lg-3 col-md-4 col-sm-6 mb-5";
                    out_div=document.createElement("div");
                    out_div.className="outer-card-prod";
                    out_div.id=final_name_data[i].trim().replaceAll(" ","!-!").trim();
                    out_div.onclick=function() {
                        window.location.href= "/products/product="+this.id.toLowerCase()+"/brands";
                    };
                    img=document.createElement("img");
                    for(j=1;j<temp_data.length;j++){
                        let img_temp_dte=temp_data[j];
                        if(final_name_data[i].toUpperCase().trim()===img_temp_dte[0].toUpperCase().trim()){
                         img.src=img_temp_dte[1];
                         break;
                        }
                    }
                    img.className="product_img";
                    txt=document.createElement("p");
                    txt.innerHTML=final_name_data[i]; 
                    out_div.append(img);
                    out_div.append(txt);
                    div.append(out_div);
                    document.getElementById("prod_data").appendChild(div);
                }
                
            });
        });
    }


    useEffect(() => {
        product();
    }, []);

  return (
    <>
    <div className='container mt-5 mb-5'>
        <div className="row" id="prod_data" style={{ display:'flex' ,justifyContent:"space-around" }}>
            <div className="loader" id="load"></div>
        </div>
    </div>
    </>
 )
}

export default Prod