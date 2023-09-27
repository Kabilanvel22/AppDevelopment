import React, { useState } from 'react';
import "../../assets/css/Addplant.css"
import NavBar from '../NavBar/NavBar';

function PlantForm() {
  const [plantData, setPlantData] = useState({
    image: null, 
    name: '',
    type: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData({
      ...plantData,
      [name]: value
    });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPlantData({
      ...plantData,
      image: file
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', plantData.image); 
    console.log('Submitted Data:', plantData);
    setPlantData({
      image: null,
      name: '',
      type: '',
      description: ''
    });
  }

  return (
    <>
    <NavBar/>
    <div className="add-plan-container">
    <div>
    <div>
    <form onSubmit={handleSubmit} className="add-plant-container">
      <div>
        <label htmlFor="image">Plant Image:</label>
        <input 
          type="file" 
          accept="image/*" 
          id="image" 
          name="image" 
          onChange={handleImageChange} 
          required 
        />
      </div>
      <div>
      <label htmlFor="name">Plant Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={plantData.name} 
        onChange={handleChange} 
        required 
      />
    </div>
    <div>
      <label htmlFor="type">Plant Type:</label>
      <input 
        type="text" 
        id="type" 
        name="type" 
        value={plantData.type} 
        onChange={handleChange} 
        required 
      />
    </div>
    <div>
      <label htmlFor="description">Description:</label>
      <textarea 
        id="description" 
        name="description" 
        value={plantData.description} 
        onChange={handleChange} 
        required 
      />
    </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    </div>
    </>
  );
}

export default PlantForm;
