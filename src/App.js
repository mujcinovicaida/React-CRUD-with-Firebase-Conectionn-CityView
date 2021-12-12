import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Home } from "./components/pages/Home";
import { AboutUs} from "./components/pages/AboutUs";
import {Form} from "./components/pages/Form.js";

function App() {
  return (
    <>
    <Router>
       <Navbar/>
       <div className="pages">
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<AboutUs/>}/>
              <Route exact path="/form" element={<Form/>}/>
            </Routes>
       </div>
    </Router>
    </>
  );
}

export default App;
