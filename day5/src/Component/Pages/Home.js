import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import '../Assests/Home.css'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Home() {

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
    <Footer/>
    </div>
  )
}

export default Home