import React,{useEffect,useState} from 'react'
import { getDatabase, ref, onValue,set, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';

let firebase;

const R_p = () => {

    const[otp,setotp]=useState();
    const[temp_saved_email,setemail]=useState();
    const[pos,setpos]=useState();

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
        check();
      }, []);

      function check()
      {
        if(localStorage.getItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage")!=null)
        {
            //enter otp
            var loc=-1;
            var em_da=localStorage.getItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage").split("_-_+_-_");
            onValue(ref(getDatabase(),"Accounts"),(snapshot)=>{
                let all_data=snapshot.val();
                let i=0,j=0;
                for(i=0;i<Object.entries(all_data).length;i++){
                    var single_data=Object.entries(Object.entries(all_data)[i][1]);
                    for(j=0;j<single_data.length;j++){
                      var yar_=single_data[j];
                      if(yar_[0]==='usr_email')
                      {
                        if(em_da[0].trim()===yar_[1].trim())
                        {
                            loc=i;
                            break;
                        }
                      }
                    }
                }

                if(loc===-1){
                    alert("no account found");
                }
                else{
                    setpos(loc);
                    setemail(em_da[0].trim());
                    sendotp(em_da[0].trim());
                }

            },{
                onlyOnce: true
            });
        }
        else
        {
            //enter email
            document.getElementById("load").style.display="none";
            document.getElementById("change_password_wala_division").style.display="none";
            document.getElementById("enter_otp_wala_division").style.display="none";
            document.getElementById("enter_email_wala_division").style.display="flex";
        }
      }

      function sendotp(email_address)
      {
        document.getElementById("change_password_wala_division").style.display="none";
        document.getElementById("enter_email_wala_division").style.display="none";
        document.getElementById("load").style.display="block";
        var a = parseInt(Math.floor(100000 + Math.random() * 900000));
                    try{
                        fetch("https://script.google.com/macros/s/AKfycbwdG8PN8j-YzQktyYHp9aVszQ-Q91Xi2a_QYWegnWzu1NASNTOGc" +
                        "AQUdpsSQ_VU7vzk9Q/exec?hfjkbabdbfbueufbdbfksdfjbjbjajdanddjkbhdhbafbdjfbadkadbjbfnfhbdshbasd" +
                        "nbdasdbhjfsdbnsbnffafnfnasdmfdfd17427432938748274235uy47572dsajdasjd8398y275238723fgyughfy" +
                        "gt483752bfg8wr37g2gyf2uhfy2jffg2j3yfuh32huvfyhj238ft" +
                        "2huyfh8j2b3yhj32g=" + email_address + "&fjdhfbdfhfjsdh" +
                        "sfbsdhfjshdfhsdfgoeru89wy4834287423y472434h2347g248y2gy34827i34y2h472482u4hy2g34" +
                        "78237423h3827r84724h27g2473y48ub3y43g4728427t3g738cf7t3hj48y234275y32hy728732hf7g3y85h23u2u" +
                        "hnf726374y7234643729432hf8237hfbhvwehbjshbfuiyd7f8yw7583y52hbu3287yu5223598y28528352=" + a)
                        .then(alert("otp sent to "+ email_address +" .. check your email"))
                        }
                    catch{
                        alert("otp could not be sent .. try again")
                    }
                    setotp(a);
                    document.getElementById("load").style.display="none";
                    document.getElementById("enter_otp_wala_division").style.display="flex";
                    
      }

  return (
    <div className='container d-flex flex-column align-items-center justify-content-center'>
        <div className="loader" id="load" ></div>
        <div id="enter_email_wala_division" style={{ display:'none', flexDirection:'column',maxWidth:'fit-content' }}>
            <input className="mt-5" placeholder='Enter Your Email Address' id="email_wala_input_box"/>
            <button className='mt-3 mb-5' onClick={(e)=>{
                e.preventDefault();
                if(document.getElementById("email_wala_input_box").value.trim()!="" && document.getElementById("email_wala_input_box").value.trim()!=null){
                    var loc=-1;
                    document.getElementById("load").style.display="block";
                    onValue(ref(getDatabase(),"Accounts"),(snapshot)=>{
                        let all_data=snapshot.val();
                        let i=0,j=0;
                        for(i=0;i<Object.entries(all_data).length;i++){
                            var single_data=Object.entries(Object.entries(all_data)[i][1]);
                            for(j=0;j<single_data.length;j++){
                              var yar_=single_data[j];
                              if(yar_[0]==='usr_email')
                              {
                                if(document.getElementById("email_wala_input_box").value.trim()===yar_[1].trim())
                                {
                                    loc=i;
                                    break;
                                }
                              }
                            }
                        }
        
                        if(loc===-1){
                            alert("no account found");
                        }
                        else{
                            setpos(loc);
                            setemail(document.getElementById("email_wala_input_box").value.trim());
                            sendotp(document.getElementById("email_wala_input_box").value.trim());
                        }
                        document.getElementById("load").style.display="none";
        
                    },{
                        onlyOnce: true
                    });
                    


                }else{
                    alert("enter email address");
                }
            }}>Send OTP</button>
        </div>

        <div id="enter_otp_wala_division" style={{ display:'none', flexDirection:'column',maxWidth:'fit-content'}}>
            <input className="mt-5" placeholder='Enter Your 6-Digit OTP' id="otp_wala_input_box_yo_yo"
            type="text" maxLength="6"  onInput={(e)=>{
            e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');}}/>
            <a onClick={(e)=>{e.preventDefault(); sendotp(temp_saved_email);}}><span style={{ cursor:'pointer' ,color:"blue" }}><u>Resend Otp ?</u></span></a>
            <button className='mt-3 mb-5' onClick={(e)=>{
                e.preventDefault();
                console.log(otp)
                if(parseInt(document.getElementById("otp_wala_input_box_yo_yo").value)===otp)
                {
                    document.getElementById("enter_otp_wala_division").style.display="none";
                    document.getElementById("enter_email_wala_division").style.display="none";
                    document.getElementById("load").style.display="none";
                    document.getElementById("change_password_wala_division").style.display="flex";
                }
                else
                {
                    alert("invalid otp");
                }
            }}>Continue</button>
        </div>

        <div id="change_password_wala_division" style={{ display:'none', flexDirection:'column',maxWidth:'fit-content' }}>
            <input className="mt-5" type="password" placeholder='Enter New Password' id="new_password_wala_input_box"/>
            <input className="mt-2" type="password" placeholder='Re-Enter New Password' id="re_new_password_wala_input_box"/>
            <div className='mt-2'>
            <input
                type="checkbox"
                onClick={(e) => {
                  if (e.target.checked) {
                    document.getElementById("new_password_wala_input_box").type =
                      "text";
                      document.getElementById("re_new_password_wala_input_box").type =
                      "text";
                  } else {
                    document.getElementById("new_password_wala_input_box").type =
                      "password";
                      document.getElementById("re_new_password_wala_input_box").type =
                      "password";
                  }
                }}
              />{" "}
              Show Password
            </div>
            <button className='mt-3 mb-5' onClick={(e)=>{
                e.preventDefault();
                var newp=document.getElementById("new_password_wala_input_box").value;
                var renewp=document.getElementById("re_new_password_wala_input_box").value;
                if(newp.trim()!="" && renewp.trim()!="")
                { 
                    if(newp===renewp)
                    {
                        if(newp.length>=6){
                        document.getElementById("load").style.display="block";
                        document.getElementById("change_password_wala_division").style.display="none";
                        var total;
                        var m=newp;
                        var anus = [10];
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
                        var bsdk = "";
                        var previous_check = [10];
                        var gand = 0;
                        for (var i = 0; i < m.length; i++) {
                            var check = i % 10;

                            if (check == 0) {
                                gand = 0;
                                previous_check = [10];
                            }

                            var rand = Math.random();
                            var asshole = Math.floor(Math.random() * 9) + 1;
                            for (var j =0;j< previous_check.length;j++) {
                                while (asshole === previous_check[j]) {
                                    asshole = Math.floor(Math.random() * 9) + 1;
                                }
                            }
                            previous_check[gand] = asshole;
                            gand++;
                            var pussy = (m.charAt(i).codePointAt()) + anus[asshole];
                            var pussy1;
                            if (( m.charAt(i).codePointAt() - anus[asshole]) > 32) {
                                pussy1 = ( m.charAt(i).codePointAt()) - anus[asshole];
                            } else {
                                pussy1 = ( m.charAt(i).codePointAt()) + anus[asshole] + 8;
                            }
                            bsdk = bsdk + String.fromCharCode(pussy) + String.fromCharCode(pussy1);
                        }
                        var mc = "";
                        for (var i = 0; i < bsdk.length; i++) {
                            if (i % 2 == 0)
                                mc = bsdk.charAt(i) + mc;
                            else
                                mc = mc + bsdk.charAt(i);
                        }
                        total = bsdk + mc;  
                        set(ref(getDatabase(),"Accounts/account-"+pos+"/usr_pass"),total).then(
                            ()=>{
                            alert("password changed")
                            window.location.href="/account"
                            }
                            );

                        }
                        else
                        {
                            alert("Enter Atleast 6-Digit Long Password");
                        }

                    }
                    else
                    {
                        alert("passwords dont match");
                    }
                }
                else
                {
                    alert("fill all details")
                }
            }}>Change Password</button>
        </div>
    </div>
  )
}

export default R_p