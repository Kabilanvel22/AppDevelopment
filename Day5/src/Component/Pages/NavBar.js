import React from 'react';
import { Link } from 'react-router-dom';
import '../Assests/Navbar.css';
import Sidebar from './Sidebar';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-success">
        <div className="container-fluid">
      

        
          <a className="navbar-brand text-white" id="garden"><i class='bx bx-leaf' ></i>LittleGarden</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3" >
              <Link to="/" id='link'><a className="nav-link text-light" id="nav">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" id='link'><a className="nav-link text-light" id="nav">About Us</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" id='link'><a className="nav-link text-light" id="nav">Contact</a></Link>
            </li>
            <li className="nav-item">
             
              <Link to="/login"><button type='button' className="btn btn-dark" > Login</button></Link>
            </li>
            <li className="nav-item">
             <Link to="/signup"><button type='button' className="btn btn-dark" >Sign In</button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
