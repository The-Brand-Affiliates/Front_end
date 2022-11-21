import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./body.css"
import slice6 from '../../img/Slice6.svg'
import slice5 from '../../img/Slice 5.svg'
import slice4 from '../../img/Slice 4.svg'
import slice3 from '../../img/Slice 3.svg'
import slice2 from '../../img/Slice 2.svg'
import slice1 from '../../img/Slice 1.svg'
import stats from '../../Brand_statics.json'
import Pop from './Popup'
import Rupee from './rupee.svg';
import { useState, useEffect} from 'react';


function Body(){

    const [ Stat, setStats] = useState([]);

    function getCurrentUrl(){
        return window.location.href; 
      }

    const url_string = getCurrentUrl();
    var url = new URL(url_string);
    var brand_auth_token = url.searchParams.get("auth_token");
    
    localStorage.setItem('auth_token', brand_auth_token);
    useEffect( () => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://thebrandaffiliates.herokuapp.com/brands/statistics/?auth_token="+ localStorage.getItem('auth_token'), requestOptions)
          .then(response => response.json()).then(json => {
            console.log("jonsn", json)
            setStats(json)
          })
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
      ,[]
      )


    return (
    <>
    {/* {Statistics.map((Stat) => ( */}
        <div className="container" id='blur1'>
        <div className="row row-cols-md-2 g-2 stamps">

           <div className="col card1 navbar">
               <div className="num">
                   <p>Total Sales</p>
                   <h2><img src={Rupee} className="rupee" alt="" /> {Stat.sales}</h2>
               </div>
               <div >
                   <img className="logoC" src={slice1} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
                   <p>Acos</p>
                   <h2>{Stat.acos} %</h2>
               </div>
               <div >
                   <img className="logoC" src={slice3} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar ">
               <div className="num">
                   <p>Total Orders</p>
                   <h2>{Stat.orders}</h2>
               </div>
               <div >
                   <img className="logoC" src={slice5} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
               <p>Comission Given</p>
               <h2><img src={Rupee} className="rupee" alt="" /> {Stat.spend}</h2>
               </div>

               <div >
                   <img className="logoC" src={slice2} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
                   <p>Product with offers </p> 
                   <h2>{Stat.products_with_offer}</h2>
               </div>
               <div >
                   <img className="logoC" src={slice4} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
                   <p> Product without offers</p>
                   <h2>{Stat.products_without_offer}</h2>
               </div>
               <div >
                   <img className="logoC" src={slice6} alt="6" />
               </div>
           </div>

       </div>

   </div>
    {/* ))} */}
    
    </>
    )
}

export default Body;
