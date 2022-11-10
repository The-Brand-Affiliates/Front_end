import React from "react";
import './body.css';
import data from '../../temp_data.json';
import { useState , useEffect } from "react";
import image from '../../img/productimg.png';

function Popup(){
    function toggle(){
        var blur = document.getElementById('blur');
        blur.classList.toggle('active')
        var blur1 = document.getElementById('blur1');
        blur1.classList.toggle('active')
        var popup = document.getElementById('popup');
        popup.classList.toggle('active')
      }

      const [Details, setDetails] = useState(data);
  
    //   const [Details, setDetails] = useState([]);
    //   useEffect( () => {
    //     var requestOptions = {
    //       method: 'GET',
    //       redirect: 'follow'
    //     };
        
    //     fetch("http://172.17.43.46:8000/brands/products/?auth_token=755e22bd-1aa0-48fa-a6e8-c7db3911be5e&format=json", requestOptions)
    //       .then(response => response.json()).then(json => {
    //         console.log("jonnsn", json)
    //         setDetails(json)
    //       })
    //       .then(result => console.log(result))
    //       .catch(error => console.log('error', error));
    //   },[]
    //   )

      function myfunction() {
        var date;
          date = document.getElementById("myid").value;
          console.log(date);
        }

    return(
        <>
        {Details.map((Detail, ind)=>(
            
        <div className='pop' id="popup" key={ind}>
        <div className="tittle">
            <p className="font-title">Edit Details</p>
        </div>
        
        <div className="d-flex pdiv">
            <div className="productImg">
                <img className="Pimg me-3" src={image} alt="product Image" />
            </div>
            <div className="pdetail ms-5">
                <p className="product">Product</p>
                <p className="font-d">{Detail.ind}</p>
                
            </div>

        </div>

        <div className="dc d-flex navbar">
            <div className="end">
                <p className="font-s">Offer Ends on</p>
                <div className="d-flex">
                    <div className="dn">
                        <input className ="datebar" id='myid' type="date" />
                        <p className="note">Note : Changes made will be reflected after 48 hours</p>
                    </div>
                    <button className="sav" onClick={myfunction}>Save</button>
                </div>
            </div>
            <div className="commision">
                <p className="font-s">Commission (%)</p>
                <div className="d-flex">
                    <div className="dn">
                        <input className="datebar p-1" type="number" />
                        <p className="note">Note : Changes made will be reflected after 48 hours</p>
                    </div>
                    <button className="sav">Save</button>
                </div>
            </div>
        </div>
        
        <div className="clo">
            <button className="close" onClick={toggle}>Close</button>
        </div>
        </div>
        ))}
        </>
    )
}

export default Popup;