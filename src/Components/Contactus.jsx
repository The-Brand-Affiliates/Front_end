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
                <h3>Our Story</h3> 
                <Link to ="/" className="hello" >
                    <img src={logo} alt="profile" className='rounded-circle img logo'/>
                </Link>
            </div>
            </nav>

            <div className="about-Me">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus minima veniam velit totam corrupti ratione, incidunt necessitatibus sed debitis quisquam, quae ipsa. Architecto iusto dolore, fugiat excepturi rem, beatae repellendus asperiores officiis vero neque repudiandae animi perspiciatis quis hic laboriosam qui numquam consectetur ullam assumenda temporibus. Aliquid, quis consectetur. Repudiandae odit illo dolores nihil consequuntur, nobis dolore tempora praesentium exercitationem incidunt voluptas mollitia deserunt? Accusantium?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quis magni nesciunt odio ex nobis beatae eos sunt quaerat explicabo magnam minima veritatis. Fugiat voluptate autem excepturi, ullam praesentium nisi?
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
                    <img src={msgp} alt=""/>
                    <p className="con ps-5">l
                    luenze.in@gmail.com</p>
                </div>
            </div>
         </nav>
        </>
    )
}

export default Contactus;