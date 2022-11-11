import React,{useEffect} from "react";
import "./place_order.css"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,set, remove } from 'firebase/database';


let check=false;
let answer="",firebase;

const Place = () => {
  useEffect(() => {
    if(JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version")).length===0){
        window.location.href="/*";
    }
    check=false;
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


  }, []);

  return (
    <div className="container">
        <div className="enter_details" id="kkkiikiknfreafsd">
        <div><button className='no_button_cart' onClick={(e)=>{window.location.href="/cart"}}>&#10094; Back To Cart</button></div>
            <div className="mt-3 one-part">
                <label>Enter Your Name :</label>
                <input placeholder="Name" rows="5" id="usr_name"/>
            </div>
            <div className="mt-3 one-part">
                <label>Enter Your Address :</label>
                <textarea rows="5" placeholder="Address" id="usr_add" style={{resize:'none'}}/>
            </div>
            <div className="mt-3 one-part">
                <label>Enter Your Phone Number :</label>
                <input type="text" maxLength="10" placeholder="Ph. No Without Country Code" id="usr_num" onInput={(e)=>{
                    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                }}/>
            </div>
            <div className="mt-3 one-part">
                <label>Enter Your Email Address :</label>
                <input type="email" placeholder="Email Address" id="usr_email"/>
            </div>
            <div className="mt-3 text-center">
                <h4>Payment Method</h4><br></br>
                <input type="radio" id="cash" name="mode" value="cash" onClick={(e)=>{
                    check=true;
                    answer="cash";
                }}/>Cash On Delivery<br></br><br></br>
                <input type="radio" id="cheque" name="mode"onClick={(e)=>{
                    check=true;
                    answer="cheque";
                }}/>Cheque On Delivery
            </div>
           
            <div className="text-center"><button className='mb-5 no_button_cart' onClick={(e)=>{
                    var name=document.getElementById("usr_name").value;
                    var add=document.getElementById("usr_add").value;
                    var num=document.getElementById("usr_num").value;
                    var mail=document.getElementById("usr_email").value;
                    if(name!="" && add!="" && num!="" && check!=false){
                        window.scrollTo({ top: 0 , behavior: 'smooth' });
                        document.getElementById("kkkiikiknfreafsd").style.display="none";
                        document.getElementById("laoding_symbol").style.display="block";

                        onValue(ref(getDatabase(),"TOTAL_WEB_ORDERS"),(snapshot)=>{
                            let ord_cnt=parseInt(snapshot.val());
                            ord_cnt++;
                            let date=(new Date().toISOString().substring(0,10)+" "+new Date().toTimeString().slice(0, 8));
                            var product_data=(JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version")));
                            let new_array=[],quan_new_array=[];
                            var i,ttl_amt_fpr_allprds=0;
                            for(i=0;i<product_data.length;i++){
                                var single_data=product_data[i].split("<!>");


                                let sp=single_data[3].replaceAll("₹","").trim();
                                let mrp=single_data[4].replaceAll("₹","").trim();
                                let off=parseInt( ( (mrp*100) - (sp*100) ) /mrp );

                                var single_product_data=single_data[0].trim()+"^"+single_data[1].trim()+" ( "+single_data[5].trim()+" )^"+single_data[2].trim()+"^"+single_data[3].trim()+"^"+single_data[4].trim()+"^"+off+"% Off"+"^"+single_data[7].trim()+"^"+single_data[12].trim()+"^"+single_data[10].trim()+"<^>"+single_data[11].trim()+"^"+single_data[8].trim();
                                new_array.push(single_product_data);
                                quan_new_array.push(single_data[6]);
                                ttl_amt_fpr_allprds= ttl_amt_fpr_allprds + ( parseInt(single_data[6].trim()) * parseInt(sp) * parseInt(single_data[5].replaceAll("KG","").replaceAll("Kg","").replaceAll("kg","").replaceAll("kG","").trim()) );
                            }
                            //6 is quan
                            set(ref(getDatabase(),"TOTAL_WEB_ORDERS"),ord_cnt);
                            set(ref(getDatabase(),"Web_Orders/order-"+ord_cnt),{
                                "address":add,
                                    "date":date,
                                    "email":mail,
                                    "name":name,
                                    "pay_Way":answer.toUpperCase()+" ON DELIVERY",
                                    "ph_no":num,
                                    "proQuan":quan_new_array,
                                    "products":new_array,
                                    "status":"PENDING",
                                    "total":ttl_amt_fpr_allprds
                            })
                            .then(() => {
                                document.getElementById("laoding_symbol").style.display="none";
                                document.getElementById("order_place_hone_ke_baad_display").style.display="block";
                                sessionStorage.setItem(
                                    "cart_wala_array_web_wala_version",
                                    null
                                  );

                            })
                            .catch((error) => {
                                document.getElementById("order_place_nahi_hone_ke_baad_display").style.display="block";
                                console.log(error);
                            });
                            /*let zzz;
                            for(zzz=ord_cnt;zzz<=793;zzz++){
                                remove(ref(getDatabase(),"Web_Orders/order-"+zzz));
                            }*/
                        }, {
                            onlyOnce: true
                        });            
                    }else{
                        if(name===""){
                            document.getElementById("usr_name").className="border-box";
                            window.scrollTo({ top: (document.getElementById("usr_name").offsetTop-170) , behavior: 'smooth' });
                        }else{
                            document.getElementById("usr_name").className="";
                        }

                        if(add===""){
                            document.getElementById("usr_add").className="border-box";
                            window.scrollTo({ top: (document.getElementById("usr_add").offsetTop-170) , behavior: 'smooth' });
                        }else{
                            document.getElementById("usr_add").className="";
                        }

                        if(num===""){
                            document.getElementById("usr_num").className="border-box";
                            window.scrollTo({ top: (document.getElementById("usr_num").offsetTop-170) , behavior: 'smooth' });
                        }else{
                            document.getElementById("usr_num").className="";
                        }

                        if(check===false){
                            alert(" Select Payment Method ")
                        }
                    }
                }}>Place Order &#10095;</button></div>
        </div>
        <div id="laoding_symbol" style={{display:'none'}}>
            <div className="loader" id="load"></div>
            <h1>Your Order Is Being Placed , Please Wait</h1>
        </div>
        <div id="order_place_hone_ke_baad_display" className="text-center" style={{display:'none'}}>
            <h1>Your Order Has Been Placed !</h1><h3><a href="/home">Continue......</a></h3>
        </div>
        <div id="order_place_nahi_hone_ke_baad_display" className="text-center" style={{display:'none'}}>
            <h1>Your Order Could Not Be Placed !</h1><h3><a href="">Reload......</a></h3>
        </div>
    </div>
  );
};

export default Place;
