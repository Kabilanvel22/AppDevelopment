import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/signup";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import { Provider } from "react-redux";
import Store from "./pages/Redux/Store";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faq from "./pages/Faq/Faq";
import Growing from "./pages/Guides/Growing";
import Maintain from "./pages/MaintainGarden/Maintain";
import ChilliGrowing from "./pages/plants/plant1";
import BringalGrowing from "./pages/plants/plant2";
import ZucciniGrowing from "./pages/plants/plant3";
import PumpkinGrowing from "./pages/plants/plant4";
import TomatoGrowing from "./pages/plants/plant5";
import OnionGrowing from "./pages/plants/plant6";
import GrapesGrowing from "./pages/plants/plant7";
import Preparegarden from "./pages/PrepareGarden/Preparegarden";
import Privacy from "./pages/Privacy/Privacy";
import Structures from "./pages/Structures/Structures";
import PlantForm from "./pages/Addplant/Addplant";
import Seasoncrop from "./pages/Seasoncrop/Seasoncrop";
import NoteApp from "./pages/Journal/NoteApp";
import CanvasComponent from "./pages/Visualise/Visualise";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./pages/Loading/Loading";
import Feedback from "./pages/FeedBack/FeedBack";
import Term from "./pages/Term/Term";
import Profile from "./pages/Profile/Profile";

function App() {

    const [loading,setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },5000)
    },[])

  return (
    <div className="App">
    {
      loading ? <Loading/>
      :
    <BrowserRouter>
    <Provider store={Store}>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path ="/register" element={<Signup/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/dashboard" element={<Dashboard/>}/>
          <Route path ="/faq" element={<Faq/>}/>
          <Route path ="/guides" element={<Growing/>}/>
          <Route path ="/p1" element={<ChilliGrowing/>}/>
          <Route path ="/p2" element={<BringalGrowing/>}/>
          <Route path ="/p3" element={<ZucciniGrowing/>}/>
          <Route path ="/p4" element={<PumpkinGrowing/>}/>
          <Route path ="/p5" element={<TomatoGrowing/>}/>
          <Route path ="/p6" element={<OnionGrowing/>}/>
          <Route path ="/p7" element={<GrapesGrowing/>}/>
          <Route path ="/maintain" element={<Maintain/>}/>
          <Route path ="/prepare" element={<Preparegarden/>}/>
          <Route path ="/privacy" element={<Privacy/>}/>
          <Route path ="/structure" element={<Structures/>}/>
          <Route path ="/addplant" element={<PlantForm/>}/>
          <Route path ="/season" element={<Seasoncrop/>}/>
          <Route path ="/journal" element={<NoteApp/>}/>
          <Route path ="/visualise" element={<CanvasComponent/>}/>
          <Route path ="/feedback" element={<Feedback/>}/>
          <Route path ="/terms" element={<Term/>}/>
          <Route path ="/profile" element={<Profile/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
    }
    </div>
    );
}

export default App;
