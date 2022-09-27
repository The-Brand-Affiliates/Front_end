import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../DashboardComponent/body.css"
import tick from './bluetick.svg';
// import { useState } from 'react';

function Basicdetail(){
    // const [, set] = useState(second)

    return (
        <>
        <div className="details rounded-2 p-5">


        <div className="transdiv navbar pe-5">
            <div className="float-left">
            <p className="td">
                Commission Deducted
            </p>
            <p className="statusdate">
                <img src={tick} alt="" /> Complete | 26 Aug , 1:03AM
            </p>
            <p className="tid">
                TXN ID : STCUWV23688494090004
            </p>
            </div>
            <div className="float-right">
                <p className="moneyt">
                    - &#8377;900
                </p>
            </div>
        </div>

        <div className="transdiv navbar pe-5">
            <div className="float-left">
            <p className="td">
                Commission Deducted
            </p>
            <p className="statusdate">
            <img src={tick} alt="" /> Complete | 26 Aug , 1:03AM
            </p>
            <p className="tid">
                TXN ID : STCUWV23688494090004
            </p>
            </div>
            <div className="float-right">
                <p className="moneyt">
                    - &#8377;900
                </p>
            </div>
        </div>

        <div className="transdiv navbar pe-5">
            <div className="float-left">
            <p className="td">
                Commission Deducted
            </p>
            <p className="statusdate">
            <img src={tick} alt="" />  Complete | 26 Aug , 1:03AM
            </p>
            <p className="tid">
                TXN ID : STCUWV23688494090004
            </p>
            </div>
            <div className="float-right">
                <p className="moneyt">
                    - &#8377;900
                </p>
            </div>
        </div>


         </div>
        </>
    )
    
    
}

export default Basicdetail;
