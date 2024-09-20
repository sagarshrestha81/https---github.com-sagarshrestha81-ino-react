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
import AxiosApi from './pages/AxiosApi';
import ListStudent from './pages/students/ListStudent';
import SingleStudent from './pages/students/SingleStudent';
import CreateStudent from './pages/students/CreateStudent';
import EditStudent from "./pages/students/EditStudent";
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
          <Route path="/axios" element={<AxiosApi />}/>       
          <Route path="/students" element={<ListStudent />}/>       
          <Route path="/student/:id" element={<SingleStudent />}/>       
          <Route path="/create-student" element={<CreateStudent />}/>       
          <Route path="/student-edit/:id" element={<EditStudent />}/>       
          <Route path="*" element={<PageNotfound />}/>       
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
