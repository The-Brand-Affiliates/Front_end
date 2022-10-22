import React from "react";
import './contact.css';
import logo from '../img/logo.svg'
import msgp from '../img/msgp.svg'
import callp from '../img/callp.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Contactus(){

    return(
        <>
        <div className="containerC d-flex p-5">

          <nav className='sidebar1 p-auto'>
            <div className="list">
                <h3 className="About">About <b>us</b></h3> 
                <Link to ="/" className="hello" >
                    <img src={logo} alt="profile" className='rounded-circle img logo'/>
                </Link>
            </div>
            </nav>

            <div className="about-Me">
                <p>
                    At Luenze , we are on a mission to disrupt the influencer marketing industry
                </p>
                <p> Luenze is a great alternative to traditional influencer marketing for brands since it virtually eliminates all the unnecessary hassles of getting an influencer on board. Simply install our plugin on your Shopify store , set the commission on products you want to be promoted, and that's about it!
                    Sit back and relax while our influencers generate sales for your products.
                </p>
                <p>
                Join us, and help us bring about the change we wish to see. 
                </p>
            </div>

        </div>
        
        <nav className='sidebar2 p-auto rounded-2 '>
            <div className="Container Contact-us mb-5">
                <h3>Contact US</h3>
            </div>
            <div className="info">
                <div className="phone d-flex">
                    <img className="ms-2" src={callp} alt=""/>
                    <p className="con ps-5">+91 7024XXXXXX </p>
                </div>
                
                <div className="mail d-flex m-2">
                    <img className="ms-1" src={msgp} alt=""/>
                    <p className="con ps-5">
                    luenze.in@gmail.com</p>
                </div>
            </div>
         </nav>
        </>
    )
}

export default Contactus;