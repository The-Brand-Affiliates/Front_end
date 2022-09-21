import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./body.css"
import data from '../../temp_data.json';
// import data from 'https://jsonplaceholder.typicode.com/posts'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';


function Body(){

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

  function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var blur1 = document.getElementById('blur1');
    blur1.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
  }


    return <>


    
    <div className="container-l m-3 border rounded-3" id='blur'>
    
    <table className="table">
    <thead className='thead'>

      <div className="filter">
      </div>
         <tr>
            <th className="col"> <input type="checkbox" /> </th>
            <th scope="col">Product</th>
            <th scope="col"> 
            <select className='status' name="Status" id="s" >
              <option value="1">all</option>
              <option value="2">running</option>
              <option value="3">expired</option>
            </select>
            </th>
            <th scope="col">Offer Expiry</th>
            <th scope="col"> Comission(%)</th>
            <th scope="col"> Orders </th>
            <th scope="col"> Acos</th>
            <th scope="col"> Comission Spent</th>
            <th scope="col"> Salse </th>

            <th scope="col">?</th>
         </tr>
    </thead>

  <tbody className='table-borderless text-align-center'>
    
    {Details.map((Detail) => (

    <tr>
      <td> <input type="checkbox"/></td>
      <th scope="row"><Link className='productName' to={Detail.product_link}>{Detail.name}</Link></th>
      <td>{Detail.status}</td>
      <td>{Detail['expiry_date']}</td>
      <td>{Detail.commission}%</td>
      <td>{Detail.orders}</td>
      <td>{Detail.acos}</td>
      <td>{Detail['spend']}</td>
      <td>{Detail.sales}</td>
      <td><Link to="" onClick={toggle}>edit</Link></td>
    </tr>
    ))}

    

  </tbody>
  
</table>

</div>
    </>
    
}

export default Body;
