import React, { useEffect ,useState} from 'react'
import './cart.css'
import No_Image from "../../images/no_image.jpg"
import Navbar from '../../components/navbar/navbar'
import PageHeader from '../../components/header/header'

const Cart_Items = () => {

  let outer_div_car_of_cart,div,col,under_col,row,img,p,button;

  const [state,setState]=useState({
    key:''
  });

  var lavda=0;

  const [head,sethead]=useState();

  const [tl_p,setp]=useState();

  function dispaly_items_in_the_cart(){
    var all_the_added_toCart_items_and_products_array=JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version"));
    let i;
    document.getElementById("cart_wala_page_ka_cotnainer").innerHTML='';
    console.log(all_the_added_toCart_items_and_products_array);
    if(all_the_added_toCart_items_and_products_array.length>0){
      sethead("Cart");
      var ttl_amt_for_all=0;
      for(i=0;i<all_the_added_toCart_items_and_products_array.length;i++){
        var single_item_ka_data=all_the_added_toCart_items_and_products_array[i].split("<!>");
        outer_div_car_of_cart=document.createElement("div");
        outer_div_car_of_cart.className="outer-card-cart";
        console.log(single_item_ka_data[8].trim());
        outer_div_car_of_cart.id="/products/product="+ (single_item_ka_data[8].trim().replaceAll(" ","!-!").trim()) +"/brands/brand/"+ (single_item_ka_data[1].trim().replaceAll(" ","!_!").trim()) + "/pos/"+ ( parseInt(single_item_ka_data[9].trim()) - 1 );
        div=document.createElement("div");
        div.className="container";
        col=document.createElement("div");
        col.className="col";
        row=document.createElement("div");
        row.className="row";

          under_col=document.createElement("div");//image
          under_col.className="col-lg-3 col-md-3 col-sm-4 image_wla";
          img=document.createElement("img");
          if(!single_item_ka_data[0].trim().includes("changeAddLink")){
            img.src=single_item_ka_data[0];
          }else{
              img.src=No_Image;
          }
          img.onload=function(){
            let bc=document.getElementById("loading_wala_timepass");
            bc.removeAttribute("id");
          }
          img.className="cart_img";
          img.id="loading_wala_timepass"
          p=document.createElement("p");
          let sp=single_item_ka_data[3].replaceAll("₹","").trim();
          let mrp=single_item_ka_data[4].replaceAll("₹","").trim();
          let off=parseInt( ( (mrp*100) - (sp*100) ) /mrp );
          p.innerHTML=off+"% Off";
          p.className="cart_wala_ofF_per";
          button=document.createElement("button");
          button.className="delete_button_cart_mai_se"
          button.innerHTML="<i class='fa fa-trash'></i> <b class='btn_bsdk'>Remove</b>";
          button.id=i;
          button.onclick = function(){
              all_the_added_toCart_items_and_products_array.splice(parseInt(this.id),1);
              sessionStorage.setItem('cart_wala_array_web_wala_version', JSON.stringify(all_the_added_toCart_items_and_products_array));
              setState({ key: 7782783883433432 });
              dispaly_items_in_the_cart();
            }
          under_col.appendChild(img);
          under_col.appendChild(p);
          under_col.appendChild(button);

          row.appendChild(under_col);

          under_col=document.createElement("div");//all details
          under_col.className="col-lg-4 col-md-4 col-sm-6";
          p=document.createElement("p");
          p.className="details_of_cart_text"
          let p_t=sp*parseInt(single_item_ka_data[6].trim())*parseInt(single_item_ka_data[5].replaceAll("KG","").replaceAll("Kg","").replaceAll("kG","").replaceAll("kg","").trim());
          p.innerHTML="<b>"+single_item_ka_data[1].trim()+"<br>( "+single_item_ka_data[5].trim()+" )</b><br>"+single_item_ka_data[2].trim()+"<br><b>"+single_item_ka_data[3].trim()+"</b> <s>"+single_item_ka_data[4].trim()+"</s><br>( PER Kg )<br><br><b>Product Total</b><br>= ₹ <b>"+p_t+"</b>";
          ttl_amt_for_all=ttl_amt_for_all+p_t;
          under_col.appendChild(p);

          row.appendChild(under_col);

          under_col=document.createElement("div");//quantity
          under_col.className="col-lg-2 col-md-2 col-sm-2";
          p=document.createElement("p");
          p.className="details_of_cart_text"
          p.id="responsive_keliye_id"
          p.innerHTML="x <b>"+single_item_ka_data[6].trim()+"</b>";
          under_col.appendChild(p);

          row.appendChild(under_col);
          
        col.appendChild(row);
        div.appendChild(col);
        outer_div_car_of_cart.appendChild(div);
        outer_div_car_of_cart.onclick=function(event){
          console.log(event.target.className);
          if(event.target.className==="delete_button_cart_mai_se" || event.target.className==="fa fa-trash" || event.target.className==="btn_bsdk"){
            console.log("hsafdjafuahfanfagfuanfoiahf87agrwncuiabsuifbaufra")
          }else{
            window.location.href=this.id;
          }
        }

        document.getElementById("cart_wala_page_ka_cotnainer").append(outer_div_car_of_cart);
      }
      setp(ttl_amt_for_all);
    }else{
      window.location.href="/products";
    }
  }

  

  useEffect(()=>{
    dispaly_items_in_the_cart();
  },[]);

  return (
    <>
    <Navbar key={state}/>
    <PageHeader heading={head}/>
    
    <div className='container' >
      <div className='d-flex justify-content-between align-items-center bitch'>
    <button className='no_button_cart' onClick={(e)=>{
      e.preventDefault();
      window.location.href=sessionStorage.getItem('cart_se_back_konsa_wale_pe_jana_hai_ayr_wo_check_karne_wala');
      sessionStorage.removeItem('cart_se_back_konsa_wale_pe_jana_hai_ayr_wo_check_karne_wala');
    }
    }>&#10094; Back</button>
    <h5 className='no_tetx_cart' style={{ marginTop:'1.5rem',marginLeft:'1.5rem',marginRight:'1.5rem' }}>Total Amount For <span style={{ color:'red'}}>All Products</span> below = <span style={{ color:'red'}}>₹ {tl_p }</span></h5>
    <button className='no_button_cart' style={{ float:'right' }}onClick={(e)=>{
      e.preventDefault();
      window.location.href="/placeOrder";
    }
    }> Proceed &#10095;</button>
</div>
      <div id="cart_wala_page_ka_cotnainer"></div>
    </div>
    </>
  )
}

export default Cart_Items