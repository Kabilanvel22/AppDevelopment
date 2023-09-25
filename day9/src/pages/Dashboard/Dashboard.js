import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "../../assets/css/Dashboard.css"
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { selectUser } from '../Redux/Userslice';

function Dashboard() {
     const user = useSelector(selectUser);
     const mail = user ? user.email : "Guest";
     const featuredProducts = useSelector((state) => state.featuredProducts.products);
  return (
    <div>
    <NavBar/>
    <div className='dashboard'>
    <h2 className="dashboard-title">Welcome {mail}!!</h2>
    <h2 className="dashboard-head">Featured Products</h2>
    <div className="product-show">
      {featuredProducts.map((product) => (
        <div className="product-all-display" key={product.id}>
          <img src={product.imageUrl} alt={product.name} className="st" />
          <h3>{product.name}</h3>
          <p className="product-desc">{product.detail}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Dashboard;