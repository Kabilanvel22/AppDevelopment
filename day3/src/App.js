import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path ="/register" element={<Signup/>}/>
            <Route path ="/home" element={<home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
