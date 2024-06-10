import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { Redirect } from "react-router";

export default function Navbar() {
const [auth,setAuth]=useState(false)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Full Stack Application
          </a> */}
           <Link className="navbar-brand" to="/">
            Full Stack Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="navbar-brand" to="/login">
            Login
          </Link>
          

          {/* <button className="btn btn-outline-light">Add user</button> */}
          <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
          
        </div>
      </nav>
      
    </div>
  );
}