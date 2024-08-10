import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';
import MembershipPlans from './components/MembershipPlans';
import Improvements from './components/Improvements';
import GymFacilities from './components/GymFacilities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <ImageSection />
      <MembershipPlans />
      <Improvements />
      <GymFacilities />
      <Footer />
    </div>
  );
}

export default App;
