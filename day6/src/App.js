import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import React from 'react';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Aboutus from './Component/Pages/Aboutus';
import { Provider } from 'react-redux';
import store from './Component/Redux/Store';
import Sidebar from './Component/Pages/Sidebar';
import Dashboard from './Component/Pages/Dashboard';





function App() {
  return (
   
      <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
         <Route path="/" element ={<Home />}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path="/register" element ={<Signup />}></Route>
         <Route path="/contact" element ={<Contact />}></Route>
         <Route path='/about' element={<Aboutus/>}></Route>
         <Route path='/Dashboard' element={<Dashboard/>}></Route>
     
         </Routes>
        </BrowserRouter>
   </Provider>
      </div>
    
  );
}

export default App;