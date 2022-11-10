import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profile.css"
import { useState, useEffect } from 'react';


function Basicdetail(){

    function getCurrentUrl(){
        return window.location.href;
    }
    
    const url_string = getCurrentUrl();
    var url = new URL(url_string);
    var brand_auth_token = url.searchParams.get("auth_token");
    
    if(brand_auth_token == null){ 
    }else {
        const auth_token = localStorage.setItem('auth_token', brand_auth_token);
    }
    
    const [Bdetails, setBdetails] = useState("");

    useEffect( () => {
        var requestOptions = {
          method: 'POST',
          redirect: 'follow'
        };

        fetch("https://thebrandaffiliates.herokuapp.com/brands/products/?auth_token="+ localStorage.getItem('auth_token'), requestOptions)
      .then(response => response.json()).then(json => {
        console.log("jonsn", json)
        // if(statusvalue == "All"){
        //   setDetails(json);
        // }else{
        //   // setDetails(json);
        //   let filters = json.filter(json => json.status == statusvalue)
        //   setDetails(filters);
        // }
        setBdetails(json);
        // console.log(brand_auth_token);
      })

    },[]
    )


    function savedetails(data){
        setBdetails(data)
    }

    return (

        
        <>
            <div className="details rounded-2 p-5">
            <div className="row">
                <div className="col">
                    <p className="tittle">Brand Name</p>
                    <input type="text" className="form-control" placeholder="Brand Name"/>
                </div>
                <div className="col">
                    <p className="tittle">Contact Name</p>
                    <input type="text" className="form-control" placeholder="Contact Name"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="tittle">Email</p>
                    <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="col">
                    <p className="tittle">Phone Number</p>
                    <input type="mobile" className="form-control" placeholder="Mobile Number"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="tittle">Standard Discount(%)</p>
                    <input type="text" className="form-control" placeholder="Discount"/>
                </div>
                
            </div>
            <div className="save">
            <button className="btn-2 rounded-2" onClick={savedetails}> Save</button>  

            </div>
            </div>
        </>
        
    )
}

export default Basicdetail;
