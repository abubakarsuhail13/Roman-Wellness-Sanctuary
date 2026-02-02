
import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple Loading View for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-stone-950 flex items-center justify-center">
    <div className="w-12 h-px bg-gold-500 animate-[pulse_2s_infinite]"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-gold-500 selection:text-white bg-stone-950 font-sans antialiased overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow relative z-10">
          <Suspense fallback={<PageLoader />}>
            <div className="page-transition">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concept" element={<Concept />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
