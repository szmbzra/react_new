import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Layout/Blog'
import Home from './Layout/Home'
import Property from './Layout/Property'
import Paage from './Layout/Paage'
import './index.css';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Property" element={<Property />} />
      <Route path="/Page" element={<Paage />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  </Router>
  )
}

export default App
