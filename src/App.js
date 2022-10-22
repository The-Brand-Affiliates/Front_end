import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Dashboard from './Components/Dashboard.jsx';
import Profile from './Components/Profile'
import Contactus from './Components/Contactus'
import Basicdetails from './Components/ProfileComponent/Basicdetails'
import Wallet from './Components/ProfileComponent/Wallet'
import Transaction from './Components/ProfileComponent/Transactions'
import Bank from './Components/ProfileComponent/Bank'
import Pdetail from './Components/ProfileComponent/Pdetails.jsx';

function App(){
    return (
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path ="/" element = {<Dashboard/>}/>
                <Route path ="/profile/" element = {<><Profile/><Pdetail/></>}> </Route>
                {/* <Route path ={"/profile/?auth_token= " + localStorage.getItem('auth_token')}  element = {<><Profile/> <Basicdetails/></>}> </Route> */}
                <Route path ="/profile/wallet" element = {<><Profile/> <Wallet/></>}/>
                <Route path ="/profile/Thistory" element = {<><Profile/> <Transaction/></>}/>
                <Route path ="/profile/Bankdetail" element = {<><Profile/> <Bank/></>}/>
                <Route path ="/contact" element = {<Contactus/>}/>
            </Routes>
            
            {/* <Route exact path = "./Profile" component = {ProductList}></Route> */}
            

        </div>
        
    )
}

export default App;