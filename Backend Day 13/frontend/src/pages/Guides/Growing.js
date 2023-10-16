import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import StyledInputBase from '@mui/material/InputBase';
import { useSelector } from 'react-redux';
import "../../assets/css/Grow.css";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Growing() {
  const featuredProducts = useSelector((state) => state.featuredProducts.products);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredProducts = featuredProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <NavBar />
      <div className="grow-container">
        <div className="grow-header">
          <h4 className="grow-search">Search</h4>
          <SearchIcon />
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grow-mid-header">
          {filteredProducts.map((product) => (
            <div className="grow-all-display" key={product.id}>
              <Link to={product.path}>
                <img src={product.imageUrl} alt={product.name} className="st-grow" />
              </Link>
              <h3 className="grow-h3-name">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Growing;
