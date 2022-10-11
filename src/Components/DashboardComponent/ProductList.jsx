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

  // const [Details, setDetails] = useState(data);
  
  const [Details, setDetails] = useState([]);
  useEffect( () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://thebrandaffiliates.herokuapp.com/brands/products/?auth_token=cec51945-c9db-4a65-9cf5-a6b09003f87c", requestOptions)
      .then(response => response.json()).then(json => {
        console.log("jonsn", json)
        setDetails(json)
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  },[]
  )

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
    <div className="table-wrapper">

    <table className="table p-2">
    <thead className='thead p-2'>
    
      <div className="filter">
      </div>
         <tr>
            
            <th scope="col" className='initial' >Product</th>
            <th scope="col"> 
            <select className='status' name="Status" id="s" >
              <option value="1">Status: &ensp;all</option>
              <option value="2">Active</option>
              <option value="3">expired</option>
            </select>
            </th>
            <th scope="col" > <div className="t-ele">Offer Expiry </div> </th>
            <th scope="col" ><div className="t-ele">Commission</div> </th>
            <th scope="col" > <div className="t-ele">orders</div> </th>
            <th scope="col" > <div className="t-ele">Acos</div> </th>
            <th scope="col" > <div className="t-ele">Commission Spent</div></th>
            <th scope="col" > <div className="t-ele">Sales</div></th>
            <th scope="col" ></th>
         </tr>
    </thead>

  <tbody className='table-borderless'>
    
    {Details.map((Detail) => (
      
      <tr>
      
      <th scope="row" className='initial'><Link className='productName' to={Detail.product_link}>{Detail.name}</Link></th>
      <td > <div className="tr-ele">{Detail.status} </div> </td>
      <td ><div className="tr-ele"> {Detail['expiry_date']} </div> </td>
      <td ><div className="tr-ele">  {Detail.commission}% </div> </td>
      <td ><div className="tr-ele"> {Detail.orders} </div> </td>
      <td ><div className="tr-ele"> {Detail.acos} </div> </td>
      <td ><div className="tr-ele">{Detail['spend']} </div> </td>
      <td ><div className="tr-ele">  {Detail.sales} </div></td>
      <td ><div className="tr-ele"> <button className='editb'> <Link to="" onClick={toggle} className = 'editb2'>Edit</Link> </button></div> </td>
    </tr>
    ))}

  </tbody> 
</table>
</div>

</div>
    </>
    
}

export default Body;
