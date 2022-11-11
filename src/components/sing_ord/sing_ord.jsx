import React,{useEffect,useState} from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,set, remove } from 'firebase/database';
import "./sing_ord.css"

var firebase;

const Single_Order = () => {

    const[name,setname]=useState();

    useEffect(() => {
        var firebaseConfig = {
          apiKey: "AIzaSyBO1I1c_7l09EJRD3Sd-RkuwUT48aJpz5w",
          authDomain: "fire-9d7b4.firebaseapp.com",
          databaseURL: "https://fire-9d7b4-default-rtdb.firebaseio.com",
          projectId: "fire-9d7b4",
          storageBucket: "fire-9d7b4.appspot.com",
          messagingSenderId: "717028647199",
          appId: "1:717028647199:web:301a8c1e5b78dcf80e502a",
          measurementId: "G-D6X8890BZR"
      };
      firebase=initializeApp(firebaseConfig);

      var loc=window.location.href.split("/ijjnnnuiabrbewajei84j3qj90j/312nmnnm9hr39ccn03jh424jindnajsnd3489/45435fa23231");
      if(loc[1].trim().includes("77824y273y47234h7h37nb9u7vcf")){
        var id=loc[1].trim().replaceAll("77824y273y47234h7h37nb9u7vcf","").trim();
        load_single_order(id);
      }
      else
      {
        window.location.href="*";
      }

      }, []);

    function load_single_order(which)
    {
        document.getElementById("load").style.display="block";
        
        onValue(ref(getDatabase(),"Web_Orders/order-"+which),(snapshot)=>{

            if(snapshot.val()!=null){
                var data=Object.entries(snapshot.val());
                console.log(data)
                var i;
                document.getElementById("load").style.display="none";
                document.getElementById("single_order").style.display="flex";
                document.getElementById("single_order").innerHTML="";
                document.getElementById("heading_wala").innerHTML="";
                var quan,prod;
                for(i=0;i<data.length;i++)
                {
                    var single_data=data[i];
                    if(single_data[0].trim()==='name')
                    {
                    var stat=document.createElement("h2");
                    stat.innerHTML="Welcome "+single_data[1];
                    document.getElementById("heading_wala").appendChild(stat);
                    }
                    if(single_data[0].trim()==='status')
                    {
                    var stat=document.createElement("h5");
                    stat.innerHTML="Order Status : <i style='color:red'>"+single_data[1]+"</i>";
                    document.getElementById("heading_wala").appendChild(stat);
                    }
                    if(single_data[0].trim()==='total')
                    {
                    var stat=document.createElement("p");
                    stat.innerHTML="<b><i style='color:red'>Total : ₹"+single_data[1]+"</i></b><br><br><h3 class='text-center'>PRODUCTS</h3><br>";
                    document.getElementById("heading_wala").appendChild(stat);
                    }
                    if(single_data[0].trim()==='status')
                    {
                        if(single_data[1].trim()==="PENDING")
                        {
                            var stat=document.createElement("button");
                            stat.innerHTML="Cancel Order";
                            stat.className="no_button";
                            stat.onclick=function()
                            {
                                document.getElementById("load").style.display="flex";
                                document.getElementById("single_order").style.display="none";
                                set(ref(getDatabase(),"Web_Orders/order-"+which+"/status"),"CANCELED_BY_CUSTOMER").then(
                                    ()=>{
                                    alert("Order Cancelled");
                                    window.location.href="";
                                    }
                                );
                            }
                            document.getElementById("heading_wala").appendChild(stat);
                        }
                    }
                    if(single_data[0].trim()==='proQuan')
                    {
                        quan=single_data[1];
                    }
                    if(single_data[0].trim()==='products')
                    {
                        prod=single_data[1];
                    }
                    
                }
                for(i=0;i<prod.length;i++)
                {
                    var single_product_ordeR_data=prod[i].split("^");
                    var out_div=document.createElement("div");
                    out_div.className="card_wala_bhai col-lg-4 mb-5";

                    var img_div=document.createElement("div");
                        var img=document.createElement("img");
                        img.className="img_orde_detailk";
                        img.src=single_product_ordeR_data[0].trim();
                        var off=document.createElement("h5");
                        off.innerHTML=single_product_ordeR_data[5];
                        off.className="offer_wlaa_order_details";
                        img_div.appendChild(img);
                        img_div.appendChild(off);
                     
                    var p=document.createElement("p");
                    var prd_ttl=single_product_ordeR_data[1].split("(");
                    prd_ttl=prd_ttl[1].replaceAll(")","").replaceAll("KG","").replaceAll("Kg","").replaceAll("kg","").replaceAll("kG","").trim();
                    prd_ttl=parseInt(prd_ttl)*parseFloat(single_product_ordeR_data[3].replaceAll("₹","").trim())*parseInt(quan[i]);
                    p.innerHTML="<b>"+single_product_ordeR_data[1]+"</b><br><i>"+single_product_ordeR_data[2]+"</i><br><b>"+single_product_ordeR_data[3]+"</b> <s>"+single_product_ordeR_data[4]+"</s>( <b>Per Kg</b> )<br><br>Product Total : <b>₹"+prd_ttl+"</b>";
                        
                    var quan_det=document.createElement("p");
                    quan_det.innerHTML="Quantity : <b>x"+quan[i]+"</b>";

                    out_div.appendChild(img_div);
                    out_div.appendChild(p);
                    out_div.appendChild(quan_det);

                    document.getElementById("single_order").appendChild(out_div);
                }
            }
            else{
                window.location.href="*";
            }
        },{
        onlyOnce: true
        });
    }


    function prod_data()
    {
        
    }

  return (
    <div className='container'>
        <button className='no_button' onClick={(e)=>{
        e.preventDefault();
        window.location.href="/yourOrders";
      }}>&#10094; back</button>
        <div id="heading_wala"></div>
      <div className='d-flex justify-content-center'>
        <div className="loader" id="load"></div>
        <div id="single_order" className="row justify-content-around" style={{ display:'none'}}></div>
      </div>
    </div>
  )
}

export default Single_Order