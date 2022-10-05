import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom';



ReactDom.render(
  
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  
  ,document.getElementById("root")
);






















// // -------------- 2nd method -------------for using reactdom.Rendor------------------------------------------------------------------
// var h2 = document.createElement("h2");
// const root = ReactDOM.createRoot(document.getElementById('root').appendChild(h2));
// root.render(
//  <React.StrictMode>
//    <h1>hello 2nd </h1>
//   </React.StrictMode>
// );


// //------------3rd method----------------------
// var h1 = document.createElement("h1");
// h1.innerHTML = "hello world 3rd ";
// document.getElementById("root").appendChild(h1)


