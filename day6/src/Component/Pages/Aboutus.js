
import React from 'react'
import Footer from './Footer';
import '../Assests/Aboutus.css';
import Navbar from './NavBar';
function Aboutus() {
  return (
  
    <div>
     <Navbar/>
      <div className='container'> 
      <p className='para mt-3' >About Us!</p>
      <p className="p1">Thankyou for taking the time to explore this page.</p>

      <p className="p1">Here at The Home Garden, I aim to provide you with the confidence and inspiration to create your very own edible garden.</p>
      
      <p className="p1">On this page you will find fuss-free, easy to read guides on how to create and maintain your edible garden, everything from preparing your soil to harvesting your food.</p>
      
      <p className="p1">In addition, there are over 100 growing guides on an extensive range of fruits, vegetables and herbs. I have worked hard to ensure that these growing guides are comprehensive, yet succinct and easy to follow. There is something for everyone, no matter the size or location of your growing space.</p>
      
      <p className="p1">The ‘Kitchen and Garden’ section is updated weekly and features interesting garden hacks and advice, as well as creative ways to prepare your produce.</p>
      
      <p className="p1">The Pest, Disease & Beneficial Insects guides are effective tools to help you troubleshoot issues as they arise.</p>
      
      <p className="p1">If you’ve read the guides and still have some unanswered questions or find yourself needing a little guidance along the way, the handy ‘Ask a Question’ feature is here to help. I will do my very best to address any of your queries or concerns.</p>
      
      <p className="p1">Everyone should have the opportunity to grow food, even if it’s something as small as harvesting a sprig of parsley from your very own garden to bring to your table.</p>
      
      <p className="p1">I hope that you enjoy this website and look forward to helping you grow your love for gardening!</p>
      <p className='para'>Kabilan , we are here to give information about ,The Home Gardening</p>
      
      </div>
      <div className='container'>
      <div className='row'>
         <div className='col-sm-4'>
           <img  src="https://assets-news.housing.com/news/wp-content/uploads/2022/10/18145120/Rose-flower-30-images-and-over-20-interesting-facts.jpg"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded"src="https://www.thehomegarden.com/static/images/contacts/contact2.jpg"/>
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

export default Aboutus