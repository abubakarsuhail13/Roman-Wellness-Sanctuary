
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-32 pb-24 text-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <h3 className="font-cinzel text-gold-500 text-sm tracking-[0.3em] mb-4 uppercase">Direct Channels</h3>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-10">Connect With the Team</h1>
            <p className="text-stone-400 text-lg leading-relaxed mb-12 font-light max-w-md">
              For strategic discussions, architectural inquiries, or media requests, please use our secure channels below.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="p-3 rounded-full border border-white/10 group-hover:border-gold-500 transition-colors">
                  <Mail className="text-stone-400 group-hover:text-gold-500 transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Inquiries</p>
                  <p className="text-lg text-white font-serif">vision@romansanctuary.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-3 rounded-full border border-white/10 group-hover:border-gold-500 transition-colors">
                  <MapPin className="text-stone-400 group-hover:text-gold-500 transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Concept Studio</p>
                  <p className="text-lg text-white font-serif">London | Milan | Dubai</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex space-x-6">
              <a href="#" className="p-3 rounded-full border border-white/10 hover:border-gold-500 text-stone-400 hover:text-gold-500 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 rounded-full border border-white/10 hover:border-gold-500 text-stone-400 hover:text-gold-500 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="bg-stone-900 p-12 border border-white/5 shadow-2xl">
            <h3 className="font-cinzel text-white text-xl mb-8 tracking-widest">General Inquiry</h3>
            <form className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-500 outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-500 outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Subject</label>
                <select className="w-full bg-stone-950 border-b border-white/20 py-2 focus:border-gold-500 outline-none transition-all text-stone-300">
                  <option>Strategic Partnership</option>
                  <option>Architectural Collaboration</option>
                  <option>Press & Media</option>
                  <option>General Interest</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-gold-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-gold-500 text-stone-950 font-bold uppercase tracking-[0.2em] hover:bg-gold-400 transition-colors mt-6">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
