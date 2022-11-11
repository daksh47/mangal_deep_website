import React,{useEffect,useState} from 'react'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue,set, remove } from 'firebase/database';

var firebase;
const Y_orders = () => {

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
  if(localStorage.getItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage")!=null){
    var data=localStorage.getItem("mangal_deep_mandi_express_acc/login.user_details.login&&password_save.local.storage").split("_-_+_-_");
    setname(data[2].trim());
    getorders(data);
  }
  else{
    window.location.href="*";
  }
  }, []);

  function getorders(data)
  {
    onValue(ref(getDatabase(),"Web_Orders"),(snapshot)=>{
      let all_data=snapshot.val();
      let i=0,j=0,cnt=1;
      document.getElementById("all_order").innerHTML="";
      document.getElementById("load").style.display="none";
      document.getElementById("all_order").style.display="flex";
      for(i=0;i<Object.entries(all_data).length;i++){
        var single_data=Object.entries(Object.entries(all_data)[i][1]);
        for(j=0;j<Object.entries(single_data).length;j++){
          if(single_data[j][0]==='ph_no')
          {
            if(data[1].trim()===single_data[j][1].trim())
            {
              var button = document.createElement("button");
              button.innerHTML="order - "+cnt;
              button.className="mt-2 mb-2"
              button.id=Object.entries(all_data)[i][0].replaceAll("order-","").trim();
              button.onclick=function()
              {
                window.location.href=window.location.href+"/ijjnnnuiabrbewajei84j3qj90j/312nmnnm9hr39ccn03jh424jindnajsnd3489/45435fa23231"+this.id+"77824y273y47234h7h37nb9u7vcf";
              }
              cnt++;
              document.getElementById("all_order").appendChild(button);
            }
          }
        }
      }
    },{
      onlyOnce: true
    });
  }

  /*function load_single_order(which)
  {
    document.getElementById("load").style.display="block";
    document.getElementById("all_order").style.display="none";
    
    onValue(ref(getDatabase(),"Web_Orders/"+which),(snapshot)=>{
      var data=Object.entries(snapshot.val());
      console.log(data)
      var i;
      document.getElementById("load").style.display="none";
      document.getElementById("single_order").style.display="block";
      document.getElementById("single_order").innerHTML="";
      for(i=0;i<data.length;i++)
      {
        var single_data=data[i];
        if(single_data[0].trim()==='status')
        {
          var stat=document.createElement("h5");
          stat.innerHTML="Order Status : "+single_data[1];
          document.getElementById("heading_wala").appendChild(stat);
        }
      }
      
    },{
      onlyOnce: true
    });
  }*/

  return (
    <div className='container' id="heading_wala">
      <button className='no_button' onClick={(e)=>{
        e.preventDefault();
        window.location.href="/account";
      }}>&#10094; back</button>
      <h2>Welcome {name}</h2>
      <div className='d-flex justify-content-center'>
      <div className="loader" id="load"></div>
      <div id="all_order" style={{ display:'none',flexDirection:'column',maxWidth:'fit-content'}}></div>
      </div>
    </div>
  )
}

export default Y_orders