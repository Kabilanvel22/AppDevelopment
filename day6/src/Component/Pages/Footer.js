import React from 'react';
import '../Assests/Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
  <div>
  
  <footer className='bg-dark text-white pt-5 pb-4'>
      <div className='container text-center text-md-left'>
          <div className='row text-center text-md-left'>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Little Garden</h5>
                <p>Welcom to LittleGarden !</p>
                <p> 
                <i class='bx bxl-instagram ' style={{marginLeft:"2%"}} ></i>
                <i class='bx bxl-twitter' style={{marginLeft:"8%"}}></i>
                </p>
                <p className='text-primary'>Copyright @2023</p>
               
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Products</h5>
                <p> 
                  <a className='text-white' style={{textDecoration:"none"}}>Plants</a>
                </p>
                <p> 
                  <a className='text-white' style={{textDecoration:"none"}}>Flowers</a>
                </p>
                <p> 
                  <a  className='text-white' style={{textDecoration:"none"}}>  Fruits </a>
                </p>
              </div>
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font weight-bold text-warning'>Help</h5>
                <p> 
                  <Link to="/home" id="link"><a className='text-white' style={{textDecoration:"none"}}> Home</a></Link>
                </p>
                <p> 
                  <Link to="/about" id='link'><a  className='text-white' style={{textDecoration:"none"}}>Aboutus  </a></Link>
                </p>
                <p> 
                  <Link to="/login" id="link"><a className='text-white' style={{textDecoration:"none"}}> Login</a></Link>
                </p>
                <p> 
                  <Link to="signup" id='link'><a  className='text-white' style={{textDecoration:"none"}}>SignIn</a></Link>
                </p>
              </div>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
              <Link to="/contact" id="link"><h5 className='text-uppercase mb-4 font weight-bold text-warning'>Contact</h5></Link>
                <p>
                <i class='bx bxs-home-smile'></i> Coimbatore,India
                </p>
                <p>
                    <i class='bx bx-envelope'></i> 727821tuit046@skct.edu.in
                </p>
                <p>
                <i class='bx bx-phone'></i> +91 9638527414
                </p>
                <p>
                <i class='bx bx-printer' ></i>+01 238 238 23
                </p>
              </div>
             
          </div>
      </div>
    </footer>
   
   </div>
  
  )
}

export default Footer