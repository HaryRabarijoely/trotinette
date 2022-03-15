import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home/index';
import SignIn from './Pages/SignIn/index';
import SignOut from './Pages/SignOut/index';
import SignUp from './Pages/SignUp/index';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Articles from './Pages/Articles';
import Profile from './Pages/Profile';
// import { UserContext } from './UserContext';
// import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <SearchBar /> */}
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/sign_up" element={<SignUp />} /> 
            <Route path="/sign_in" element={<SignIn />} /> 
            <Route path="/sign_out" element={<SignOut />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
