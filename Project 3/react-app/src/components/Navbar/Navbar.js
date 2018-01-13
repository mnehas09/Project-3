import React from "react";
import "./Navbar.css";
import logo from "./logo1.png";



const Navbar = props =>
    <nav className = "navbar navbar-default" >
     <div className="container-fluid">
      <div className="navbar-header">
       <div className="navbar-brand" to="/">
        <a href="/"><img src= {logo} style={{width:100, marginTop: -7}} /></a>
        </div> 
       </div>      
     </div>
    </nav>;

export default Navbar;