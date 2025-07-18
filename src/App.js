import React from 'react';
import HeaderSection from './components/headersection.jsx';
import HeroSection  from './components/herosection.jsx';
import Aboutussection from './components/aboutussection.jsx';
import MyWorkSection from './components/myWorkSection.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDetailPage from './components/CardDetailPage'
import MyServicessection from './components/myServicessection.jsx';
import MyContactsection from './components/myContactsection.jsx';
import MyExperiencesection from './components/myExperiencesection.jsx';
import TestiMonalsection from './components/testiMonalsection.jsx';
import Footersection from './components/footersection.jsx';

function App() {
  return (
    <Router>
      <Routes>
       <Route 
          path="/" 
          element={
            <div>
              <HeaderSection />
              <HeroSection />
              <Aboutussection />
              <MyWorkSection />
              <MyServicessection />
              <MyExperiencesection />
              <TestiMonalsection />
              <MyContactsection />
              <Footersection />
            </div>
          } 
        />


        <Route 
          path="/home" 
          element={
            <div>
              <HeaderSection />
              <HeroSection />
            </div>
          } 
        />
         
        <Route 
          path="/about" 
          element={
            <div>
              <HeaderSection />
              <Aboutussection />
            </div>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <div>
              <HeaderSection />
              <MyWorkSection />
            </div>
          } 
        />
        <Route 
          path="/services" 
          element={
            <div>
              <HeaderSection />
              <MyServicessection />
            </div>
          } 
        />
        <Route 
          path="/contacts" 
          element={
            <div>
              <HeaderSection />
              <MyContactsection />
            </div>
          } 
        />
        <Route path="/details/:id" element={<CardDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
