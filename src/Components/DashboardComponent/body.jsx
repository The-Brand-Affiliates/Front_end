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
import { useState } from 'react';


function Body(){

    const [Statics, setStatics] = useState(stats);

    return <>
    {Statics.map((Stat) => (
        <div className="container" id='blur1'>
        <div className="row row-cols-md-2 g-2 stamps">

           <div className="col card1 navbar">
               <div className="num">
                   <p>Total Sales</p>
                   <h2>&#8377; {Stat.sales}</h2>
               </div>
               <div className="logoC">
                   <img src={slice1} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
                   <p>Acos</p>
                   <h2>{Stat.acos}</h2>
               </div>
               <div className="logoC">
                   <img src={slice3} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar ">
               <div className="num">
                   <p>Total Orders</p>
                   <h2>{Stat.orders}</h2>
               </div>
               <div className="logoC">
                   <img src={slice5} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
               <p>Comission Given</p>
               <h2>&#8377; {Stat.spend}</h2>
               </div>

               <div className="logoC">
                   <img src={slice2} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
                   <p>Product with offers </p> 
                   <h2>{Stat.products_with_offer}</h2>
               </div>
               <div className="logoC">
                   <img src={slice4} alt="6" />
               </div>
           </div>

           <div className="col card1 navbar">
               <div className="num">
                   <p> Product without offers</p>
                   <h2>{Stat.products_without_offer}</h2>
               </div>
               <div className="logoC">
                   <img src={slice6} alt="6" />
               </div>
           </div>

       </div>

   </div>
    ))}
    
    </>
    
}

export default Body;
