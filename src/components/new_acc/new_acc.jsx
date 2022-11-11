import React,{useEffect} from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,set, remove } from 'firebase/database';

var firebase,usr_email=[],usr_phone=[],total_acc;

const New_acc = () => {

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
      get_em_ph();
      }, []);

      
        function get_em_ph()
        {
            onValue(ref(getDatabase(),"Accounts"),(snapshot)=>{
                let all_data=snapshot.val();
                let i=0,j=0;
                for(i=0;i<Object.entries(all_data).length;i++){
                  var single_data=Object.entries(Object.entries(all_data)[i][1]);
                  total_acc=( (Object.entries(all_data).length) );
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
                  }
                }
                document.getElementById("load").style.display="none";
                document.getElementById("form_ka_data").style.display="block";
              },{
                onlyOnce: true
              });
        }

  return (
    <div className='container d-flex flex-column align-items-center'>
      <div className="loader" id="load"></div>
       <div id='acc_create_hone_ke_baad_display'  style={{ display:'none' }}><h3>Your Account Was Created<br></br><button className='no_button' onClick={(e)=>{e.preventDefault();window.location.href="/account"}}>Continue</button></h3></div>
       <div id='acc_create_nahi_hone_ke_baad_display'  style={{ display:'none' }}><h3>Your Account Was Not Created<br></br><button className='no_button' onClick={(e)=>{e.preventDefault();document.getElementById("acc_create_nahi_hone_ke_baad_display").style.display="none";document.getElementById("form_ka_data").style.display="block";}}>Try Again</button></h3></div>

        <div id="form_ka_data" style={{ display:'none' }}>
            <div className='mb-3'>
                <h4>Name</h4>
                <input id="new_acc_wala_name" placeholder='Enter Your Name'></input>
            </div>

            <div className='mb-3'>
                <h4>Phone Number</h4>
                <input type="text" id="new_acc_wala_no" maxLength="10" placeholder='Enter Your Number' onInput={(e)=>{
                    e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
                }}></input>
            </div>

            <div className='mb-3'>
                <h4>Email</h4>
                <input type="email" id="new_acc_wala_em" placeholder='Enter Your Email'></input>
            </div>

            <div className='mb-3'>
                <h4>Password</h4>
                <input type="password" id='password_wala_input_box_new__acc' placeholder='Enter Your Password'></input>
            </div>

            <div className='mb-3'>
                <h4>Re-Enter Password</h4>
                <input type="password" id="re-password_wala_input_box_new__acc" placeholder='Re-Enter Your Password'></input>
            </div>

            <div className='mb-3'>
                <input type="checkbox"
                onClick={(e) => {
                  if (e.target.checked) {
                    document.getElementById("password_wala_input_box_new__acc").type =
                      "text";
                      document.getElementById("re-password_wala_input_box_new__acc").type =
                      "text";
                  } else {
                    document.getElementById("password_wala_input_box_new__acc").type =
                      "password";
                      document.getElementById("re-password_wala_input_box_new__acc").type =
                      "password";
                  }
                }}
              /> Show Password
            </div>

            <div className='mb-3'>
                <button className='no_button'
                onClick={(e) => {
                    e.preventDefault();
                    if(document.getElementById("new_acc_wala_name").value.trim()!="" &&
                        document.getElementById("new_acc_wala_no").value.trim()!="" &&
                        document.getElementById("new_acc_wala_em").value.trim()!="" &&
                        document.getElementById("password_wala_input_box_new__acc").value!="" &&
                        document.getElementById("re-password_wala_input_box_new__acc").value!="")
                        {
                            if(usr_email.includes(document.getElementById("new_acc_wala_em").value.trim()))
                            {
                                alert("email already taken");
                            }
                            else if(usr_phone.includes(document.getElementById("new_acc_wala_no").value.trim()))
                            {
                                alert("number already taken");
                            }
                            else if( document.getElementById("new_acc_wala_no").value.trim().length!=10)
                            {
                                alert("enter valid number");
                            }
                            else if(document.getElementById("password_wala_input_box_new__acc").value.length>=6)
                            {
                                if(document.getElementById("password_wala_input_box_new__acc").value===document.getElementById("re-password_wala_input_box_new__acc").value)
                                {
                                    document.getElementById("load").style.display="block";
                                    document.getElementById("form_ka_data").style.display="none";
                                    /////--------encrypt start----------//////
                                    var total;
                                    var m=document.getElementById("password_wala_input_box_new__acc").value;
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
                                    /////--------encrypt done----------//////
                                    set(ref(getDatabase(),"Accounts/account-"+total_acc),{
                                            "usr_email":document.getElementById("new_acc_wala_em").value.trim(),
                                            "usr_name":document.getElementById("new_acc_wala_name").value.trim(),
                                            "usr_number":document.getElementById("new_acc_wala_no").value.trim(),
                                            "usr_pass":total
                                    })
                                    .then(() => {
                                        document.getElementById("load").style.display="none";
                                        document.getElementById("acc_create_hone_ke_baad_display").style.display="block";
                                    })
                                    .catch((error) => {
                                        document.getElementById("load").style.display="none";
                                        document.getElementById("acc_create_nahi_hone_ke_baad_display").style.display="block";
                                    });
                                }
                                else
                                {
                                    alert("password dont match");
                                }
                            }
                            else
                            {
                                alert("enter atleast 6-digit long password");
                            }
                        }
                        else
                        {
                            alert("enter all details");
                        }
                  }}>Create Account</button>
            </div>

        </div>
    </div>
  )
}

export default New_acc