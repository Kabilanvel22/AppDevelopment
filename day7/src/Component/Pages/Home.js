import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import '../Assests/Home.css'

function Home() {
  return (
    <div>
    <Navbar/>
    <div className='container'>
    <h2 className="hero-head">Welcome to the Little Garden!!</h2>
    <div className='row'>
       <div className='col-sm-4'>
         <img  src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210120_212242_071/3dca7759ccf1972ff517cdefc14f60f5.jpg"/>
         
       </div>
       <div className='col-sm-4'>
         <img  className="lazyloaded"src="https://urbanplants.co.in/cdn/shop/products/abhishek-s-kumar-fruit-plant-thai-red-water-apple-plant-38659858792663.jpg?v=1672517326"/>
         
       </div>
       <div className='col-sm-4'>
         <img  className="lazyloaded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqmd_FZ7BAYiRYeHGdK1oN8lE2_6Sg0mnAmvRzBA6EstLFIGv76vnZ5WmvABvzv_7EgM&usqp=CAU"/>
         
       </div>
    </div>
    </div>
    <div className="home-min-con">
         <h4 className="home-mid-quote">The Complete Guide To Growing Food In Your Own Backyard</h4>
         <h4 className="home-mid-quot">Suitable For Gardeners Worldwide</h4>
    </div>
    <div className="home-mid-types">
       <div className="row">
            <div className="col-sm-4">
               <img className="lazyloaded" id="home-img" src="https://www.thehomegarden.com/static/icons/bee.png"/>
               <h3 className="home-types-quote">ORGANIC GARDENING</h3>
               <h5 className="home-types-quote1">How to grow and maintain your own organic garden</h5>
            </div>
            <div className="col-sm-4">
            <img className="lazyloaded" id="home-img" src="https://www.thehomegarden.com/static/icons/notes.png"/>
            <h3 className="home-types-quote">GROWING GUIDES</h3>
            <h5 className="home-types-quote1">Grow a variety of foods with our fuss-free growing guides</h5>
            </div>
            <div className="col-sm-4">
            <img className="lazyloaded" id="home-img" src="	https://www.thehomegarden.com/static/icons/question.png"/>
            <h3 className="home-types-quote">TROUBLESHOOTING</h3>
            <h5 className="home-types-quote1">Troubleshoot pests and diseases by using our handy charts and guides</h5>
            </div>
       </div>
    </div>
    <div className='container'>
      <h3 className="home-cont-mid">Posters</h3>
    <div className='row'>
       <div className='col-sm-4'>
         <img  src="https://www.thehomegarden.com/static/resources/THGCoolSeasonCropPoster.png"/>
         
       </div>
       <div className='col-sm-4'>
         <img  className="lazyloaded"src="https://www.thehomegarden.com/static/resources/THGWarmSeasonCropPoster.png"/>
        
       </div>
       <div className='col-sm-4'>
         <img  className="lazyloaded" src="https://www.thehomegarden.com/static/resources/THGHerbPoster.png"/>

       </div>
       <div className='col-sm-4'>
         <img  className="lazyloaded" src="https://www.thehomegarden.com/static/resources/THGEdibleWeedsPoster.png"/>

       </div>
       <div className='col-sm-4'>
         <img  className="lazyloaded" src="https://www.thehomegarden.com/static/resources/THGEdibleFlowersPoster.png"/>

       </div>
       <div className='col-sm-4'>
         <img  src="https://www.thehomegarden.com/static/resources/THGCoolSeasonCropPoster.png"/>
         
       </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Home