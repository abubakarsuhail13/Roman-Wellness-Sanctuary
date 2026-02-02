
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concept', path: '/concept' },
    { name: 'Investors', path: '/investors' },
    { name: 'Portfolio', path: '/#portfolio' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled ? 'bg-stone-950/90 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="/" 
          className="group flex flex-col"
        >
          <span className="font-cinzel text-lg md:text-xl tracking-[0.4em] text-white group-hover:text-gold-200 transition-colors uppercase">
            ROMAN SANCTUARY
          </span>
          <span className="text-[7px] tracking-[0.8em] text-gold-500 uppercase font-cinzel opacity-0 group-hover:opacity-100 transition-opacity">
            Ritual & Space
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-14 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-[10px] uppercase tracking-[0.4em] font-medium transition-all duration-500 py-2 ${
                isActive(link.path) ? 'text-gold-400' : 'text-stone-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-px bg-gold-500 scale-x-0 transition-transform duration-500 origin-left ${isActive(link.path) ? 'scale-x-100' : 'group-hover:scale-x-50'}`}></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="group relative px-8 py-3 overflow-hidden border border-gold-500/50 text-gold-500 text-[9px] uppercase tracking-[0.4em] font-bold"
          >
            <div className="absolute inset-0 bg-gold-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 group-hover:text-stone-950 transition-colors">Strategic Inquiries</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-stone-300 p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col space-y-1.5 w-6 items-end">
            <span className={`block h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-full translate-y-2 rotate-45' : 'w-full'}`}></span>
            <span className={`block h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-2/3'}`}></span>
            <span className={`block h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-full -translate-y-2.5 -rotate-45' : 'w-1/3'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-950 z-[90] flex flex-col items-center justify-center space-y-10 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent"></div>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl md:text-3xl font-serif text-white tracking-widest hover:text-gold-400 transition-all italic"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-8 px-12 py-4 border border-gold-500/40 text-gold-500 text-xs uppercase tracking-[0.4em] font-bold"
        >
          Connect
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
