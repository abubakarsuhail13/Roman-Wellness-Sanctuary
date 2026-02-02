
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concept', path: '/concept' },
    { name: 'Vision', path: '/#vision' },
    { name: 'Design', path: '/#design' },
    { name: 'Investors', path: '/investors' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-stone-950/95 backdrop-blur-md py-4 border-white/10' : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-cinzel text-xl md:text-2xl tracking-[0.2em] text-gold-200 hover:text-white transition-colors"
        >
          ROMAN SANCTUARY
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-xs uppercase tracking-[0.3em] font-medium text-stone-300 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 border border-gold-400 text-gold-400 text-xs uppercase tracking-[0.2em] hover:bg-gold-400 hover:text-stone-950 transition-all duration-300"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-300 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-stone-950 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-cinzel text-stone-300 tracking-widest hover:text-gold-400"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="px-10 py-3 border border-gold-400 text-gold-400 text-sm uppercase tracking-[0.2em]"
        >
          Connect
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
