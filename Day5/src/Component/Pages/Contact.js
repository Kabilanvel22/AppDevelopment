import React, { useState } from 'react';
import Navbar from './NavBar'
import Footer from './Footer'
import '../Assests/Contact.css'

function Contact() {
  
  return (
    <div>
      <Navbar/>
        <div className='conatiner'>
          <p className='para1 mt-3'>Contact Us!</p>
        </div>
        <div className='container-contact'>

                <p className='cp'>
                <i class='bx bxs-home-smile'></i> Coimbatore,India
                </p>
                <p className='cp'>
                    <i class='bx bx-envelope'></i> 727821tuit043@skct.edu.in
                </p>
                <p className='cp'>
                <i class='bx bx-phone'></i> +91 3453485343
                </p>
                <p className='cp'>
                <i class='bx bx-printer' ></i>+01 238 238 23
                </p>
                  
        </div>
        <div className='container'>
      <div className='row'>
         <div className='col-sm-4'>
           <img  src="https://www.thehomegarden.com/static/images/contacts/contact1.jpg"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded"src="https://assets-news.housing.com/news/wp-content/uploads/2022/10/18145120/Rose-flower-30-images-and-over-20-interesting-facts.jpg"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded" src="https://rukminim2.flixcart.com/image/850/1000/jvcp9jk0/plant-seed/x/f/z/10-dahlia-mixed-seed-bio-kisan-original-imafywtrrcffj3ft.jpeg?q=90"/>
         </div>
      </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Contact