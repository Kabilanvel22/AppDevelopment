import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Navbar from './NavBar';
import "../Assests/Dashboard.css"

function Dashboard() {
     
    const featuredProducts = useSelector((state) => state.featuredProducts.products);

  return (
    <div>
    <Navbar/>
    <div className='hero'>
    <h2 className="hero-head">Featured Products</h2>
    <div className="row">
      {featuredProducts.map((product) => (
        <div className="product col-sm-4" key={product.id}>
          <img src={product.imageUrl} alt={product.name} className="st" />
          <h3>{product.name}</h3>
          <p className="product-desc">{product.description}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Dashboard;