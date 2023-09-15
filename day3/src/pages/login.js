import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

   
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
  

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      alert("login sucessfully")
    }
    
   
  }
  const handleChange = (e) => {
    e.preventDefault();
    nav("/register");
  }
  const imageStyle = {
    width: '50px', 
    height: '50px', 
    border: '1px solid #ccc', 
    borderRadius: '50%' 
  };

  return (
    <div className='login_body'>
    <div class="login_box">
    <form className="form" onSubmit={handleSubmit}>
    <span>
    <img 
    src="https://as1.ftcdn.net/v2/jpg/02/93/62/34/1000_F_293623430_HJ0wBHMOp6OcIixtUnSl9Y1FZ9PK3S2B.jpg" 
    alt="My Image" 
    style={imageStyle} 
  />
    </span>
    <span className='log_appli'>Welcome To</span>
     <span className='log_appli'>Little Garden</span>
          <h2 className='log_header'>Login</h2>
        <div>
        <input
          type="email"
          className='log_input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <h6 className="errors">{errors.email && <span>{errors.email}</span>}</h6>
      </div>
      <div>
        <input
          type="password"
          className='log_input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
       <h6 className="errors"> {errors.password && <span>{errors.password}</span>}</h6>
       </div>
         <button className='log_button'>Login</button>
         <span className="log_or">or</span>
          <span className='re_btn'>Don't have acccount?</span><span class="reg_btn" onClick={handleChange}>create Account</span>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
