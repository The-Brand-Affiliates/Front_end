import React from 'react'
import logo from '../img/logo.svg'
import './contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function nav(){
    return <>
        <nav className="navbar bg-light nav-txt">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top bg-black rounded-circle nav-log"/> 
            <p className="d-inline m-2 pt-5">Luenze</p>
          </Link>
         <div className="container-right d-flex">
          <Link to={"/?auth_token=" + localStorage.getItem('auth_token')}  className='nav-link me-3 ms-4'>Dashboard</Link>
          {/* <Link to="/profile/?auth_token=" className='nav-link me-3 ms-4' >Profile</Link> */}
          <Link to={"/profile/?auth_token=" + localStorage.getItem('auth_token')}  className='nav-link me-3 ms-4' >Profile</Link>
          <Link to={'/contact/?auth_token='+ localStorage.getItem('auth_token')}   className='nav-link me-3 ms-4'>About us</Link>
          </div>   
        </div> 
      </nav>
    </>


}

export default nav