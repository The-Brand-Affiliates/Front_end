import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'
import { Link } from 'react-router-dom';

function Wallet(){

    return (
    <>
        <div className="details rounded-2 p-5 d-flex">
            <div className="balance rounded-2">
                <Link to= '' className="wbalance nav-link"> Wallet Balance <p1 ></p1></Link>
                <h2 className="sbalance"> &#8377; 500.00</h2>
            </div>

            <div className="dwallet rounded-2">
                <div className="wsection d-flex p-3">
                   <Link className="nav-link m-2">Deposit</Link> 
                    <Link className="nav-link m-2">Withdraw </Link>

                </div>
                <div className="navbar amt-d">
                    <p>Enter Amount</p>
                    <input type="Number" placeholder='Rupees' className='depo'/>
                </div>

                <div className="btn-d">
                    <button className='btn-in'>Deposit</button>
                    <p className="note">Note : Upon Clicking , you will be redirected to Razorpay’s payment gateway </p>
                </div>

            </div>
        </div>
    </>
    )
    
}

export default Wallet;
