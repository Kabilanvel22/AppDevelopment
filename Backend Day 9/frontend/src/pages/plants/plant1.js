import React from 'react';
import 'animate.css/animate.min.css';
import"../../assets/css/Plant1.css"
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function ChilliGrowing() {
  return (
    <>
    <NavBar/>
    <div className="plant-container">
    <main className="plant-main">
      <h4 className="plant-header">A Comprehensive Guide to Growing Chilli</h4>

      <div className="plant-section">
        <span  className="plant-header-sub"><i className="fas fa-sun"></i> Position</span>
        <p className="plant-para">Chilli plants require a sunny, sheltered position.</p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-snowflake"></i> Frost Tolerant</span>
        <p className="plant-para">No, Chilli plants are not frost tolerant.</p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-arrows-alt-h"></i> Spacing</span>
        <p className="plant-para">Plant your Chilli plants around 40cm apart.</p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-seedling"></i> Planting</span>
        <p className="plant-para">
          Chilli are warm season crops that are best grown in temperatures between 18 and 30°C (65–86°F).
          Sow Chilli seeds indoors in late winter and transplant seedlings outdoors in spring, once the danger of frost has passed.
          Seeds can also be sown outdoors in spring. Keep the soil moist and warm to ensure successful germination.
          If transplanting seedlings, plant out in the early morning or evening and/or on an overcast day. Avoid planting at peak sun times or on windy days, this will allow your plants to settle in comfortably and protect them from windburn and sunburn.
          Plants will overwinter if protected from frosts.
        </p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-seedling"></i> Feeding</span>
        <p className="plant-para">Apply an organic fertiliser to your Chilli plants throughout the season.</p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-pepper-hot"></i> Harvesting</span>
        <p className="plant-para">Chilies can be harvested green once they have reached a good size, otherwise they can be harvested at any colour which follows.</p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-bug"></i> Pests</span>
        <p className="plant-para">Pests that affect Chilli plants include: Aphids, Slug, Snail, Fruit Fly, Spider Mites, Thrips, Root Knot Nematodes, Flea Beetle, Armyworm, Leafroller, Leafminer, Pepper Weevil, Tomato Fruit Worm.</p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-biohazard"></i> Diseases</span>
        <p className="plant-para">Diseases that affect Chilli plants include: Aphids, Slug, Snail, Mosaic Virus, Leaf Spot, Blight, Verticillium wilt, Fusarium Wilt, Powdery Mildew.</p>
      </div>

      <div className="plant-section">
        <span className="plant-header-sub"><i className="fas fa-sticky-note"></i> Notes</span>
        <p className="plant-para">Chilli plants may require staking for support.</p>
      </div>
      </main>
    </div>
    <Footer/>
    </>
  );
}

export default ChilliGrowing;
