import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./body.css";
import data from "../../temp_data.json";
// import data from 'https://jsonplaceholder.typicode.com/posts'
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import Pop from "./Popup";

function Body() {
  // const [Details, setDetails] = useState(data);

  function getCurrentUrl() {
    return window.location.href;
  }

  const url_string = getCurrentUrl();
  var url = new URL(url_string);
  var brand_auth_token = url.searchParams.get("auth_token");

  if (brand_auth_token == null) {
  } else {
    const auth_token = localStorage.setItem("auth_token", brand_auth_token);
  }
  const [currIndex, setCurrIndex] = useState()
  const[currElement, setCurrElement] = useState({})
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://thebrandaffiliates.herokuapp.com/brands/products/?auth_token=" +
        localStorage.getItem("auth_token"),
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("jonsn", json);
        setDetails(json);
        // if(statusvalue == "All"){
        //   setDetails(json);
        // }else{
        //   // setDetails(json);
        //   let filters = json.filter(json => json.status == statusvalue)
        //   setDetails(filters);
        // }
        // console.log(brand_auth_token);
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  console.log(localStorage.getItem("auth_token"));

  function printlog() {
    console.log("hello");
  }

  function toggle() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var blur1 = document.getElementById("blur1");
    blur1.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  }

  // // //usestate for filter
  // const [statusvalue, setstatusvalue] = useState('All')

  // // //filter value selected
  // function filtervalueselected(filtervalue){
  //   console.log(filtervalue);
  //   setstatusvalue(filtervalue);
  // // }

  // function statuschanged(event){
  //   // console.log(event.target.value);
  //   // onchangefetch();
  //   filtervalueselected(event.target.value);
  // }

  return (
    <>
      <div className="container-l m-3 border rounded-3" id="blur">
        <div className="table-wrapper">
          <table className="table p-2">
            <thead className="thead p-2">
              <div className="filter"></div>
              <tr>
                <th scope="col" className="initial">
                  Product
                </th>
                <th scope="col">
                  {/* <select className='status' name="Status" id="s" onChange={statuschanged} > */}
                  <select className="status" name="Status" id="s">
                    <option value="All" className="statusOpt">
                      Status: &ensp;All
                    </option>
                    <option value="Active" className="statusOpt">
                      Active
                    </option>
                    <option value="About to expire" className="statusOpt">
                      About to Expire
                    </option>
                    <option value="notactive" className="statusOpt">
                      No active offer
                    </option>
                  </select>
                </th>
                <th scope="col">
                  {" "}
                  <div className="t-ele">Offer Expiry </div>{" "}
                </th>
                <th scope="col">
                  <div className="t-ele">Commission</div>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <div className="t-ele">orders</div>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <div className="t-ele">Acos</div>{" "}
                </th>
                <th scope="col">
                  {" "}
                  <div className="t-ele">Commission Spent</div>
                </th>
                <th scope="col">
                  {" "}
                  <div className="t-ele">Sales</div>
                </th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody className="table-borderless">
              {Details &&
                Details.map((Detail, i) => (
                  <>
                    <tr key={Detail.id}>
                      <th scope="row" className="initial">
                        <a
                          className="productName"
                          href={Detail.product_link}
                          target="_blank"
                        >
                          {Detail.name}
                        </a>
                      </th>
                      <td>
                        {" "}
                        <div className="tr-ele">
                          {Detail.status} {Detail.id}
                        </div>{" "}
                      </td>
                      <td>
                        <div className="tr-ele"> {Detail["expiry_date"]} </div>{" "}
                      </td>
                      <td>
                        <div className="tr-ele"> {Detail.commission}% </div>{" "}
                      </td>
                      <td>
                        <div className="tr-ele"> {Detail.orders} </div>{" "}
                      </td>
                      <td>
                        <div className="tr-ele"> {Detail.acos} </div>{" "}
                      </td>
                      <td>
                        <div className="tr-ele">{Detail["spend"]} </div>{" "}
                      </td>
                      <td>
                        <div className="tr-ele"> {Detail.sales} </div>
                      </td>
                      <td>
                        <div className="tr-ele">
                          {" "}
                          <Link onClick={()=>{
                            toggle();
                            setCurrElement(Detail);
                            setCurrIndex(i);
                            console.log(Detail);
                              }} className="editb2">
                            Edit
                          </Link>
                        </div>{" "}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pop detail={currElement} idx={currIndex} />
    </>
  );
}

export default Body;
