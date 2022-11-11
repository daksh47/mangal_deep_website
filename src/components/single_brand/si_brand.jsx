import React, { useState, useEffect } from "react";
import PageHeader from "../../components/header/header";
import "./single_brand.css";
import No_Image from "../../images/no_image.jpg";
import Navbar from "../../components/navbar/navbar";
import $ from "jquery";
import Foot from "../../components/footer/footer";

const Single = () => {
  if (
    JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version")) ==
      null ||
    JSON.parse(sessionStorage.getItem("cart_wala_array_web_wala_version"))
      .length === 0
  ) {
    sessionStorage.setItem(
      "cart_wala_array_web_wala_version",
      JSON.stringify([])
    );
  }

  let single_brand_data;
  const [product_name_heading, set_p_n_h] = useState();
  const [product_rating, set_p_r] = useState();
  const [brand_name_heading, set_b_n_h] = useState({
    name: "",
    grade: "",
    sp: "",
    mrp: "",
    off: "",
    resOff: "",
    p_p_b: "",
    bag: "",
    stock: "",
  });

  const [img, setimg] = useState({
    link: "",
    loc: "",
  });
  const [samp_img, s_setimg] = useState({
    link: "",
    loc: "",
  });
  const [bag_img, b_setimg] = useState({
    link: "",
    loc: "",
  });

  const [state, setState] = useState({
    key: "",
  });

  const [product_pos_in_sheets, set_ps_is] = useState();

  function single_brand(loc) {
    let int = parseInt(loc) + 1;
    set_ps_is(int);
    const single_brand_link =
      "https://sheets.googleapis.com/v4/spreadsheets/1jrUMBsXYdzeaKpyvFUI1xRFitGF0sLmgRqj8_-O4UXA/values/Sheet5!A" +
      int +
      ":P" +
      int +
      "?key=AIzaSyCUuFo-j73XtIScQ6_NQRRW0LRSCakgTfg";
    fetch(single_brand_link)
      .then((Response) => Response.json())
      .then((yo) => {
        single_brand_data = Object.values(yo);
        single_brand_data = single_brand_data[single_brand_data.length - 1];
        single_brand_data = single_brand_data[0];
        set_p_n_h(single_brand_data[0]);
        let sp = single_brand_data[3].replaceAll("₹", "").trim();
        let mrp = single_brand_data[4].replaceAll("₹", "").trim();
        let off = parseInt((mrp * 100 - sp * 100) / mrp);
        let resOff = mrp - sp;
        set_p_r(3);
        let p_b =
          sp *
          single_brand_data[2]
            .replaceAll("KG", "")
            .replaceAll("Kg", "")
            .replaceAll("kG", "")
            .replaceAll("kg", "")
            .trim();
        set_b_n_h({
          name: single_brand_data[1],
          grade: single_brand_data[7],
          sp: single_brand_data[3],
          mrp: single_brand_data[4],
          off: off,
          resOff: resOff,
          p_p_b: p_b,
          bag: single_brand_data[2],
          stock: single_brand_data[5],
        });
        if (!single_brand_data[6].trim().includes("changeAddLink")) {
          setimg({
            link: single_brand_data[6],
            loc: single_brand_data[6].trim(),
          });
          s_setimg({
            link: single_brand_data[8],
            loc: single_brand_data[8].trim(),
          });
          b_setimg({
            link: single_brand_data[9],
            loc: single_brand_data[9].trim(),
          });
        } else {
          setimg({
            link: No_Image,
            loc: single_brand_data[6].trim(),
          });
          s_setimg({
            link: No_Image,
            loc: single_brand_data[6].trim(),
          });
          b_setimg({
            link: No_Image,
            loc: single_brand_data[6].trim(),
          });
        }
        if (single_brand_data[5].trim() != "0") {
          document.getElementById("add_to_carT_wala_btn_ka_id").style.display =
            "inline-block";
            document.getElementById("item_no_there_wala_text").style.display =
            "none";
        } else {
          document.getElementById("item_no_there_wala_text").style.display =
            "block";
            document.getElementById("add_to_carT_wala_btn_ka_id").style.display =
            "none";
        }
        document.getElementById("load").style.display = "none";
        let abc = window.location.href.split("/pos/");
        let xyz = abc[0].split("/brand/");
        xyz[1] = xyz[1]
          .replaceAll("!_!", " ")
          .trim()
          .replaceAll("%7B", "{")
          .trim()
          .replaceAll("%7D", "}")
          .trim();
        if (
          single_brand_data[1].trim().toUpperCase() ===
          xyz[1].trim().toUpperCase()
        ) {
          document.getElementById("yo_yar_fuck").style.display = "block";
        } else {
          window.location.href = "/*";
        }
      });
  }

  function image_set(i, char) {
    document.getElementById(i.toString()).style.display = "none";
    let find = parseInt(i);
    if (char === "+" && find < 3) {
      find++;
    } else if (char === "-" && find > 1) {
      find--;
    }
    let loc = find.toString();
    document.getElementById("i_d").style.className = loc;
    switch (document.getElementById("i_d").style.className) {
      case "1":
        document.getElementById("1").style.display = "block";
        break;
      case "2":
        document.getElementById("2").style.display = "block";
        break;
      case "3":
        document.getElementById("3").style.display = "block";
        break;
    }
  }

  useEffect(() => {
    if (window.location.href.includes("/pos/")) {
      let abc = window.location.href.split("/pos/");
      if (window.location.href.includes("/brand/")) {
        single_brand(abc[1]);
        image_set(1, "");
      } else {
        window.location.href = "/*";
      }
    } else {
      window.location.href = "/*";
    }
  }, []);

  function set_ratinng_bc() {
    let i_am_yoyo_check;
    let span;
    for (i_am_yoyo_check = 1; i_am_yoyo_check <= 5; i_am_yoyo_check++) {
      if (i_am_yoyo_check <= product_rating) {
        span = document.createElement("span");
        span.className = "fa fa-star checked";
        document.getElementById("rating_bro_rrr").append(span);
      } else {
        span = document.createElement("span");
        span.className = "fa fa-star";
        document.getElementById("rating_bro_rrr").append(span);
      }
    }
  }

  return (
    <>
      <Navbar key={state.key} />
      <PageHeader heading={product_name_heading} />
      <div className="container" id="yo_yar_fuck">
        <button
          className="no_button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "/products/product=" +
              product_name_heading.replaceAll(" ", "!-!").toLowerCase() +
              "/brands";
          }}
        >
          &#10094; Back To Other Brands
        </button>
        <div className="mt-5 mb-5 d-flex justify-content-between heads">
          <h3 className="details">
            <i>
              {brand_name_heading.name}
              <br></br>
              <span className="h5 details">( {brand_name_heading.bag} )</span>
              <br></br>
              <span className="h4 details">{brand_name_heading.grade}</span>
            </i>
          </h3>
          <div className="rating" id="rating_bro_rrr"></div>
        </div>
        <div className="d-flex mt-5 mb-5 align-items-center">
          <button
            className="yar"
            onClick={(e) =>
              image_set(document.getElementById("i_d").style.className, "-")
            }
          >
            &#10094;
          </button>
          <div className="1" id="i_d">
            <img
              id="1"
              className="mySlides"
              src={img.link}
              onLoad={(e) => {
                e.preventDefault();
                e.target.style.width = "auto";
                set_ratinng_bc();
                set_data_after_load_and_plsORmiu_abbay();
              }}
            />
            <img
              id="2"
              className="mySlides"
              src={samp_img.link}
              onLoad={(e) => {
                e.target.style.width = "auto";
              }}
            />
            <img
              id="3"
              className="mySlides"
              src={bag_img.link}
              onLoad={(e) => {
                e.target.style.width = "auto";
              }}
            />
          </div>
          <button
            className="yar"
            onClick={(e) =>
              image_set(document.getElementById("i_d").style.className, "+")
            }
          >
            &#10095;
          </button>
        </div>
        <div className="mt-5 mb-5 text-center details">
          <h3 className="details">
            <b>TODAY'S DEAL : {brand_name_heading.sp} ( Per Kg )</b>
          </h3>
          <h5 className="details">
            <i>
              M.R.P : <s>{brand_name_heading.mrp} ( Per Kg )</s>
            </i>
          </h5>
          <h4 className="details">
            <b>
              <i>
                YOU SAVED : ₹{brand_name_heading.resOff} ({" "}
                {brand_name_heading.off}% OFF )
              </i>
            </b>
          </h4>
          <br></br>
          <h5 className="details" style={{ color: "red" }}>
            <b>
              Price Per Bag : ( Price Per Kg x Bag Size ) = ₹
              {brand_name_heading.p_p_b}
            </b>
          </h5>
          <button
            className="no_button"
            id="add_to_carT_wala_btn_ka_id"
            onClick={(e) => add_to_cart(e)}
            style={{ display: "none" }}
          >
            Add To Cart
          </button>

          <div id="add_to_cart_wala_karne_ke_baad" style={{ display: "none" }}>
            <button
              className="no_button_add_to_cart"
              onClick={(e) => edit_quan_cart(e, "-")}
            >
              -
            </button>
            <h3
              style={{ margin: "2rem" }}
              id="cart_single_item_quantity_bro"
            ></h3>
            <button
              className="no_button_add_to_cart"
              onClick={(e) => edit_quan_cart(e, "+")}
            >
              +
            </button>
          </div>

          <h3
            className="outlined"
            id="item_no_there_wala_text"
            style={{ color: "red", display: "none" }}
          >
            <b>
              <i>THIS PRODUCT IS CURRENTLY OUT OF STOCK</i>
            </b>
          </h3>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="loader" id="load"></div>
      </div>
      <div
        className="added_to_cart_pop_up"
        id="click_pe_visible_cart_wala_pop_up"
      >
        <h3 className="mt-3 mb-3">Added To CART</h3>
        <h3 className="mt-3 mb-3" style={{ color: "red" }}>
          <a
            className="nav-link"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              sessionStorage.setItem(
                "cart_se_back_konsa_wale_pe_jana_hai_ayr_wo_check_karne_wala",
                window.location.href
              );
              window.location.href = "/cart";
            }}
          >
            View
          </a>
        </h3>
      </div>
      <Foot key={state} />
    </>
  );
  function edit_quan_cart(e, char) {
    e.preventDefault();
    var add_to_cart_wala_array_get_change_1122_ = JSON.parse(
      sessionStorage.getItem("cart_wala_array_web_wala_version")
    );
    let i;
    for (i = 0; i < add_to_cart_wala_array_get_change_1122_.length; i++) {
      var all_data = add_to_cart_wala_array_get_change_1122_[i].split("<!>");
      if (all_data[0].trim().toLowerCase() === img.loc.trim().toLowerCase()) {
        var quan = parseInt(all_data[6].trim());
        var stk = parseInt(all_data[7].trim());

        if (char === "+") {
          if (quan < stk) {
            quan = quan + 1;
            all_data[6] = quan;
            var new_data =
              all_data[0] +
              "<!>" +
              all_data[1] +
              "<!>" +
              all_data[2] +
              "<!>" +
              all_data[3] +
              "<!>" +
              all_data[4] +
              "<!>" +
              all_data[5] +
              "<!>" +
              all_data[6] +
              "<!>" +
              all_data[7] +
              "<!>" +
              all_data[8] +
              "<!>" +
              all_data[9]+
              "<!>" +
              all_data[10]+
              "<!>" +
              all_data[11]+
              "<!>" +
              all_data[12];
            add_to_cart_wala_array_get_change_1122_[i] = new_data;
            sessionStorage.setItem(
              "cart_wala_array_web_wala_version",
              JSON.stringify(add_to_cart_wala_array_get_change_1122_)
            );
            set_data_after_load_and_plsORmiu_abbay();
          } else {
            alert("max stcok");
          }
        } else if (char === "-") {
          if (quan > 1) {
            quan = quan - 1;
            all_data[6] = quan;
            var new_data =
              all_data[0] +
              "<!>" +
              all_data[1] +
              "<!>" +
              all_data[2] +
              "<!>" +
              all_data[3] +
              "<!>" +
              all_data[4] +
              "<!>" +
              all_data[5] +
              "<!>" +
              all_data[6] +
              "<!>" +
              all_data[7] +
              "<!>" +
              all_data[8] +
              "<!>" +
              all_data[9]+
              "<!>" +
              all_data[10]+
              "<!>" +
              all_data[11]+
              "<!>" +
              all_data[12];
            add_to_cart_wala_array_get_change_1122_[i] = new_data;
            sessionStorage.setItem(
              "cart_wala_array_web_wala_version",
              JSON.stringify(add_to_cart_wala_array_get_change_1122_)
            );
            set_data_after_load_and_plsORmiu_abbay();
          } else {
            add_to_cart_wala_array_get_change_1122_.splice(i, 1);
            sessionStorage.setItem(
              "cart_wala_array_web_wala_version",
              JSON.stringify(add_to_cart_wala_array_get_change_1122_)
            );
            setState({ key: 7782783883433432 });
            set_data_after_load_and_plsORmiu_abbay();
          }
        }

        break;
      }
    }
  }

  function set_data_after_load_and_plsORmiu_abbay() {
    var check_cart_item = JSON.parse(
      sessionStorage.getItem("cart_wala_array_web_wala_version")
    );
    let i;

    document.getElementById("add_to_cart_wala_karne_ke_baad").style.display =
      "none";
    for (i = 0; i < check_cart_item.length; i++) {
      var all_data = check_cart_item[i].split("<!>");
      if (all_data[0].trim().toLowerCase() === img.loc.trim().toLowerCase()) {
        document.getElementById("add_to_carT_wala_btn_ka_id").style.display =
          "none";
        document.getElementById(
          "add_to_cart_wala_karne_ke_baad"
        ).style.display = "flex";
        document.getElementById("cart_single_item_quantity_bro").innerHTML =
          all_data[6].trim(); //quantity
        break;
      }
    }
  }

  function add_to_cart(e) {
    e.preventDefault();
    if (e.target.innerHTML.trim() === "Add To Cart") {
      let one =
        img.loc +
        "<!>" +
        brand_name_heading.name +
        "<!>" +
        brand_name_heading.grade +
        "<!>" +
        brand_name_heading.sp +
        "<!>" +
        brand_name_heading.mrp +
        "<!>" +
        brand_name_heading.bag +
        "<!>1" +
        "<!>" +
        brand_name_heading.stock +
        "<!>" +
        product_name_heading +
        "<!>" +
        product_pos_in_sheets +
        "<!>" +
        samp_img.loc +
        "<!>" +
        bag_img.loc +
        "<!>"+product_rating;
      document.getElementById("cart_single_item_quantity_bro").innerHTML = "1";
      var add_to_cart_wala_array_get_change = JSON.parse(
        sessionStorage.getItem("cart_wala_array_web_wala_version")
      );
      add_to_cart_wala_array_get_change.push(one);
      sessionStorage.setItem(
        "cart_wala_array_web_wala_version",
        JSON.stringify(add_to_cart_wala_array_get_change)
      );
      setState({ key: add_to_cart_wala_array_get_change.length });
      e.target.style.display = "none";
      document.getElementById("add_to_cart_wala_karne_ke_baad").style.display =
        "flex";
      $("#click_pe_visible_cart_wala_pop_up").fadeIn(1000);
      document.getElementById(
        "click_pe_visible_cart_wala_pop_up"
      ).style.display = "flex";
      setTimeout(function () {
        $("#click_pe_visible_cart_wala_pop_up").fadeOut(1000);
        setTimeout(function () {
          document.getElementById(
            "click_pe_visible_cart_wala_pop_up"
          ).style.display = "none";
        }, 1000);
      }, 5000);
    }
  }
};

export default Single;
