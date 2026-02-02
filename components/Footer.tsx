
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link to="/" className="font-cinzel text-xl tracking-[0.2em] text-gold-200">
              ROMAN SANCTUARY
            </Link>
            <p className="mt-6 text-stone-500 text-sm leading-relaxed max-w-xs font-light">
              Where Ancient Ritual Meets Modern Luxury. A visionary architecture and wellness concept.
            </p>
          </div>
          
          <div>
            <h4 className="font-cinzel text-xs text-white tracking-widest uppercase mb-6">Explore</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><Link to="/concept" className="hover:text-gold-400 transition-colors">The Concept</Link></li>
              <li><Link to="/#vision" className="hover:text-gold-400 transition-colors">Our Vision</Link></li>
              <li><Link to="/investors" className="hover:text-gold-400 transition-colors">Investors</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs text-white tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li>vision@romansanctuary.com</li>
              <li>Strategic Inquiries Only</li>
              <li>London Concept Studio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xs text-white tracking-widest uppercase mb-6">Legal</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><Link to="#" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gold-400 transition-colors">Terms of Use</Link></li>
              <li><Link to="#" className="hover:text-gold-400 transition-colors">Confidentiality Agreement</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Roman Wellness Sanctuary. All Rights Reserved.
          </p>
          <div className="bg-stone-900 px-4 py-1 border border-white/5 text-[9px] uppercase tracking-[0.3em] text-gold-600">
            Confidential & Proprietary Concept
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-[9px] text-stone-700 leading-relaxed text-center uppercase tracking-widest">
            Notice: All elements of the Roman Wellness Sanctuary concept—including spatial design, experiential programming, brand narrative, and visual assets—are confidential and proprietary. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
