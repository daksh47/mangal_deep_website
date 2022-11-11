import React,{ useState, useEffect, createElement } from "react";
import "./compare.css"

const Comp = () => {

  let cmp_data;
  const cmp_link =
    "https://sheets.googleapis.com/v4/spreadsheets/1jrUMBsXYdzeaKpyvFUI1xRFitGF0sLmgRqj8_-O4UXA/values/Sheet5?key=AIzaSyCUuFo-j73XtIScQ6_NQRRW0LRSCakgTfg";
  
    function COMP() {
      fetch(cmp_link)
        .then((Response) => Response.json())
        .then((responseData) => {
          cmp_data=Object.values(responseData);
          let last_cmp=cmp_data[cmp_data.length-1];
          let i,super_cmp_wala,div,out_div,img,txt,cmp_table,tr,td;

          document.getElementById("exe_data1").innerHTML='';

          for(i=1;i<last_cmp.length;i++){
            super_cmp_wala=last_cmp[i];
            if(super_cmp_wala[15].trim()!=null && super_cmp_wala[15].trim()!="" && super_cmp_wala[15].trim()!="(a*1)-a"){
            var fuck=super_cmp_wala[15].split("-");

            let j;let img_link,grade,product,price;
            for(j=1;j<last_cmp.length;j++){
              let boss_fuck=last_cmp[j];
              if(boss_fuck[1].trim()===fuck[1].trim())
              {
                img_link=boss_fuck[6];
                grade=boss_fuck[7];
                product=boss_fuck[0];
                price=boss_fuck[3];
                break;
              }
            }
            div=document.createElement("div");
            div.className="col-lg-6 col-md-11 col-sm-11 mb-5 bhai1";
            out_div=document.createElement("div");
            out_div.className="outer-card1";
            var final_data;
            for(var z=1;z<last_cmp.length;z++)
            {
              var yar=last_cmp[z];
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
            img.className="img11";
            txt=document.createElement("p");
            txt.className="yo1";
            txt.innerHTML="<b>"+fuck[1]+"</b><br>"+grade+"<br>in<br>"+product; 
            out_div.append(img);
            out_div.append(txt);
            
            cmp_table=document.createElement("table");
            tr=document.createElement("tr");
            cmp_table.className="rowwww";
            tr.className="row p-2";
            td=document.createElement("td");
            td.className="col-4 yo";
            let remain=fuck[0].split("*");
            td.innerHTML="Average Estimated Price @<b>"+remain[0].replaceAll("(","").replaceAll(")","").trim()+"</b>/ E-stores<br>Is <s>₹"+remain[1].replaceAll("(","").replaceAll(")","").trim()+"</s>";
            tr.append(td);

            td=document.createElement("td");
            td.className="col-4 yo";
            td.innerHTML="|<br>|<br>|<br>|";
            tr.append(td);

            td=document.createElement("td");
            td.className="col-4 yo";
            td.innerHTML="The Price Offered<br>@Mandi Express ( <b>Mangal Deep</b> )<br>Is <b>"+price+"</b>";
            tr.append(td);

            cmp_table.append(tr);
            out_div.append(cmp_table);
            txt=document.createElement("p");
            txt.className="yo1";
            let diff= (remain[1].replaceAll("(","").replaceAll(")","").trim()) - (price.replaceAll("₹","").trim());
            txt.innerHTML="You Saved <b>₹"+diff+"</b> Along With <b>Best Quality</b> and Serviece"; 
            out_div.append(txt);
            div.append(out_div);
            document.getElementById("exe_data1").appendChild(div);

            }
          }
        });
    }

    useEffect(() => {
      COMP();
    }, []);

  return (
    <div className="cmp-container">
      <div
        
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "100%",
          height: "100%",
          color:"#E4E4E4"
        }}
      >
        <div className="container d-flex h-100 d-flex flex-column justify-content-center"  >
          <div className="d-flex flex-column justify-content-center " style={{ marginTop:"10rem"}}>
            <div style={{  textAlign:"center"}}>
            <h3 style={{ marginBottom:"4rem"}}>Compare Rates</h3>
            <div className="row" id="exe_data1" style={{ display:'flex' ,justifyContent:"space-around" }}>
              <div className="loader" id="load"></div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Comp