import React from 'react'
import "../../assets/css/Contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';



function Contact() {
  return (
    <div>
      <NavBar/>
      <section className="contact-page-sec">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      <div className="contact-info">
                          <div className="contact-info-item">
                              <div className="contact-info-icon">
                                  <i className="fas fa-map-marked"></i>
                              </div>
                              <div className="contact-info-text">
                                  <h2 className="contact-h2-info">Address</h2>
                                  <span className="contact-sapn-info"> SaiDhaan Enclave, Arivozi Nagar, Kovaipudur</span>
                                  <span className="contact-sapn-info">Coimbatore, Tamil Nadu 641105</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="contact-info">
                          <div className="contact-info-item">
                              <div className="contact-info-icon">
                                  <i className="fas fa-envelope"></i>
                              </div>
                              <div className="contact-info-text">
                                  <h2 className="contact-h2-info">E-mail</h2>
                                  <span className="contact-sapn-info">kabilan@gmail.com</span>
                                  <span className="contact-sapn-info">littlegarden@gmail.com</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="contact-info">
                          <div className="contact-info-item">
                              <div className="contact-info-icon">
                                  <i className="fas fa-phone"></i>
                              </div>
                              <div className="contact-info-text">
                                  <h2 className="contact-h2-info">Call US</h2>
                                  <span className="contact-sapn-info">+91 - 9876543217</span>
                                  <span className="contact-sapn-info">+91 - 8765432165</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-8">
                      <div className="contact-page-form">
                          <h2 className="contact-head-text">Get in Touch</h2>
                          <form action="contact-mail.php" method="post" className="contact-form-css">
                          <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="text" placeholder="Your Name" name="name" className="contact-form-input"/>
                            </div>
                          </div>  
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="email" placeholder="E-mail" name="email" required className="contact-form-input"/>
                            </div>
                          </div>                              
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="text" placeholder="Phone Number" name="phone" className="contact-form-input"/>
                            </div>
                          </div>  
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input type="text" placeholder="Subject" name="subject" className="contact-form-input"/>
                            </div>
                          </div>                
                          <div class="col-md-12 message-input">
                            <div class="single-input-field">
                              <textarea  placeholder="Write Your Message" name="message" className="contact-form-text"></textarea>
                            </div>
                          </div>                                                
                          <div class="single-input-fieldsbtn">
                            <input type="submit" value="Send Now" className="contact-form-submit"/>
                          </div>                          
                        </div>
                        </form>   
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Footer/>
      </div>
  )
}

export default Contact;