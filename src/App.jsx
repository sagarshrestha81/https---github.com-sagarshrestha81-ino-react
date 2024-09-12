import Homepage from "./pages/Homepage";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";


import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Hook from './pages/Hook';
import PageNotfound from './pages/PageNotFound';
import Fetch from './pages/Fetch';
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
          <Route path="/blog" element={<Blog />}/>       
          <Route path="/blog/detail/:id/:classes" element={<BlogDetail />}/>        
          <Route path="/hook" element={<Hook />}/>       
          <Route path="/fetch" element={<Fetch />}/>       
          <Route path="*" element={<PageNotfound />}/>       
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
