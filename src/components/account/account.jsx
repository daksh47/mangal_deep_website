import React,{useEffect,useState} from "react";
import "./account.css";

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,set, remove } from 'firebase/database';

let firebase,usr_email=[],usr_phone=[],usr_pass=[],usr_name=[];


const Account = () => {

  const[dis_em,setdis_em]=useState();
  const[dis_ph,setdis_ph]=useState();
  const[dis_na,setdis_na]=useState();

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
      get_data();
      }, []);

      function get_data(){
        if(localStorage.getItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage")!=null){
          document.getElementById("load").style.display="none";
          var data=localStorage.getItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage");
          logined(data);
        }else{
         
          onValue(ref(getDatabase(),"Accounts"),(snapshot)=>{
            let all_data=snapshot.val();
            let i=0,j=0;
            for(i=0;i<Object.entries(all_data).length;i++){
              var single_data=Object.entries(Object.entries(all_data)[i][1]);
              for(j=0;j<single_data.length;j++){
                var yar_=single_data[j];
                if(yar_[0]==='usr_email')
                {
                  usr_email[i]=yar_[1].trim();
                }
                if(yar_[0]==='usr_number')
                {
                  usr_phone[i]=yar_[1].trim();
                }
                if(yar_[0]==='usr_pass')
                {
                  usr_pass[i]=yar_[1];
                }
                if(yar_[0]==='usr_name')
                {
                  usr_name[i]=yar_[1];
                }
              }
            }
            document.getElementById("load").style.display="none";
            document.getElementById("pura_login_ka_form_bhai").style.display="flex";
          },{
            onlyOnce: true
          });
        }
      }

  return (
    <>
    <div style={{ backgroundColor: "pink" }}>
      <div
        className="container align-items-center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "black",
          marginTop: "-.5rem",
        }}
      >
        <div className="loader" id="load"></div>
        <div
          className="mt-5 mb-5 text-white ps-3 pe-3 col-lg-4"
          style={{
            backgroundColor: "black",
            flexDirection: "column",
            display: "none",
          }}
          id="pura_login_ka_form_bhai"
        >
          <h1 className="mt-5 text-center">Login</h1>
          <input className="mt-4 p-2" id="user_wala_input_box" placeholder="Email / Ph. No" />
          <input
            type="password"
            id="password_wala_input_box"
            className="mt-3 mb-4 p-2"
            placeholder="Password"
          />
          <div className="mb-1 d-flex justify-content-between" id="bc_ytar">
            <div>
              <input
                type="checkbox"
                onClick={(e) => {
                  if (e.target.checked) {
                    document.getElementById("password_wala_input_box").type =
                      "text";
                  } else {
                    document.getElementById("password_wala_input_box").type =
                      "password";
                  }
                }}
              />{" "}
              Show Password
            </div>
          </div>
          <a href="/resetPassword" style={{ color: "red" }}>
            Forgot Password ?
          </a>
          <a href="/createAccount" style={{ color: "red" }}>
            Create Account | Sign Up !
          </a>
          <div className="d-flex mb-5 justify-content-center">
            <button className="no_button"
            onClick={() => {
                if(document.getElementById("password_wala_input_box").value.trim()!="" && document.getElementById("user_wala_input_box").value.trim()!=""){
                  /*if (document.getElementById("md_me_wala_rm_wala_cB__li_ls_ck").checked) {
                    localStorage.setItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage","yo");
                  }*/

                  var input_user_name=document.getElementById("user_wala_input_box").value.trim();
                  var input_password=document.getElementById("password_wala_input_box").value;

                  if( usr_email.includes(input_user_name) || usr_phone.includes(input_user_name) )
                  {
                    console.log(usr_email,input_user_name)
                    var index;
                    if( usr_email.includes(input_user_name) ){
                      index=usr_email.indexOf(input_user_name)
                    }else if(usr_phone.includes(input_user_name)){
                      index=usr_phone.indexOf(input_user_name)
                    }

                                            //////////////----DECRYPTION START-----//////////////////

                    let total = usr_pass[index];
                    console.log(total)
                    let anus = [10];
                    anus[0] = 18;
                    anus[1] = 19;
                    anus[2] = 25;
                    anus[3] = 27;
                    anus[4] = 9;
                    anus[5] = 26;
                    anus[6] = 35;
                    anus[7] = 3;
                    anus[8] = 8;
                    anus[9] = 29;
                    let m = input_password;
                    let ads = "";
                    for (let i_for = 0; i_for < (total.length / 2); i_for++) {
                     if (i_for % 2 === 0) {
                      ads = ads + total.charAt(i_for);
                     }
                    }
                    let fin = "";
                    if (input_password.length >= ads.length) {
                        for (let i = 0; i < ads.length; i++) {
                          if (m.charAt(i) != '\u0000') {
                            for (let z = 0; z < anus.length; z++) {
                              if (m.charAt(i) === String.fromCharCode(((ads.charAt(i)).codePointAt()) - anus[z]) ) {
                                fin = fin + String.fromCharCode(((ads.charAt(i)).codePointAt()) - anus[z]);
                                break;
                              }
                            }
                          }
                        }
                                            /////////////----DECRYPTION END-----///////////////////
                        if(m===fin){
                          logined(usr_email[index]+"_-_+_-_"+usr_phone[index]+"_-_+_-_"+usr_name[index]);
                          localStorage.setItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage",usr_email[index]+"_-_+_-_"+usr_phone[index]+"_-_+_-_"+usr_name[index])
                        }
                        else{
                          alert("Wrong Password")
                        }
                     }
                     else{
                      alert("Wrong Password")
                     }


                    
                  }
                  else{
                    alert("no account found");
                  }

                }else{
                    alert("enter all details");
                }
                }}>Login</button>
          </div>
        </div>
      </div>
    </div>
    <div id="login_karne_ke_baad_wala_display" className="container mt-5 mb-5" style={{ display:'none' }}>
          <h3 className="text-center">Welcome<br/>{dis_na}</h3><br></br>
          <p >Account linked with Email :<br/><b>{dis_em}</b><br/><br/>
          Account linked with Number :<br/><b>{dis_ph}</b><br/><br/>
          <a href="/resetPassword"><b>Change Password !</b></a><br/>
          <a href="/yourOrders"><b>View Orders !</b></a><br/><br/>
          <button onClick={()=>{
            window.scrollTo({ top: 0 , behavior: 'smooth' });
            localStorage.removeItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage");
            document.getElementById("pura_login_ka_form_bhai").style.display="flex";
            document.getElementById("login_karne_ke_baad_wala_display").style.display="none";
            window.location.href="";
          }}>Log Out</button></p>
    </div>
    </>
  );
  function logined(e_p)
  {
    e_p=e_p.split("_-_+_-_");
    setdis_em(e_p[0]);
    setdis_ph(e_p[1]);
    setdis_na(e_p[2]);
    window.scrollTo({ top: 0 , behavior: 'smooth' }); 
    document.getElementById("pura_login_ka_form_bhai").style.display="none";
    document.getElementById("login_karne_ke_baad_wala_display").style.display="block";
  }
};

export default Account;
