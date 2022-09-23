import React from "react";
import './body.css';
import data from '../../temp_data.json';
import { useState } from "react";
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
  
      // const [Details, setDetails] = useState([]);
      // useEffect( () => {
      //   var requestOptions = {
      //     method: 'GET',
      //     redirect: 'follow'
      //   };
        
      //   fetch("http://172.17.43.46:8000/brands/products/?auth_token=755e22bd-1aa0-48fa-a6e8-c7db3911be5e&format=json", requestOptions)
      //     .then(response => response.json()).then(json => {
      //       console.log("jonnsn", json)
      //       setDetails(json)
      //     })
      //     .then(result => console.log(result))
      //     .catch(error => console.log('error', error));
      // }
      // )

    return(
        <>
        {Details.map((Detail)=>(

        <div className='pop' id="popup">
        <div className="tittle">
            <p className="font-s">Edit Details</p>
        </div>
        <p className="font-s">Product</p>
        <p className="font-d">{Detail.name}</p>
        <div className="dc d-flex navbar">
            <div className="end">
                <p className="font-s">Offer Ends on</p>
                <input className ="datebar" type="date" />
                <button className="sav" >save</button>
            </div>
            <div className="commision">
                <p className="font-s">Commission (%)</p>
                <input className="datebar" type="date" />
                <button className="sav" >save</button>
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