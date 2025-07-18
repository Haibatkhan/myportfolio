import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderSection from './components/headersection.jsx';
import HeroSection from './components/herosection.jsx';
import Aboutussection from './components/aboutussection.jsx';
import MyWorkSection from './components/myWorkSection.jsx';
import CardDetailPage from './components/CardDetailPage';
import MyServicessection from './components/myServicessection.jsx';
import MyContactsection from './components/myContactsection.jsx';
import MyExperiencesection from './components/myExperiencesection.jsx';
import TestiMonalsection from './components/testiMonalsection.jsx';
import Footersection from './components/footersection.jsx';

function App() {
  return (
    <Router>
      <HeaderSection />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Aboutussection />
            <MyWorkSection />
            <MyServicessection />
            <MyExperiencesection />
            <TestiMonalsection />
            <MyContactsection />
          </>
        } />
        <Route path="/about" element={<Aboutussection />} />
        <Route path="/projects" element={<MyWorkSection />} />
        <Route path="/services" element={<MyServicessection />} />
        <Route path="/contacts" element={<MyContactsection />} />
        <Route path="/details/:id" element={<CardDetailPage />} />
      </Routes>
      <Footersection />
    </Router>
  );
}

export default App;
