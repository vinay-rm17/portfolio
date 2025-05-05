// src/App.js
import React from 'react';
import Home from './Home';
import About from './About';
import contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
