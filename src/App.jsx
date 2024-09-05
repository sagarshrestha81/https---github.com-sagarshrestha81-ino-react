import Homepage from "./pages/Homepage";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";


import Profile from './pages/Profile';
function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<AboutPage />}/>       
          <Route path="/profile" element={<Profile />}/>       
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
