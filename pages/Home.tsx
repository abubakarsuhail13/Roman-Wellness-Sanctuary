
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Maximize2 } from 'lucide-react';

const Home: React.FC = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  // The requested images in order
  const galleryImages = [
    { src: 'input_file_0.png', title: 'Atmosphere I: The Vision' },
    { src: 'input_file_2.png', title: 'Atmosphere II: The Entrance' },
    { src: 'input_file_1.png', title: 'Atmosphere III: Classical Form' },
    { src: 'input_file_6.png', title: 'Atmosphere IV: The Sacred Cave' },
    { src: 'input_file_4.png', title: 'Atmosphere V: Monumental Void' },
    { src: 'input_file_3.png', title: 'Atmosphere VI: Thermal Light' },
    { src: 'input_file_5.png', title: 'Atmosphere VII: Social Thermae' },
    { src: 'input_file_7.png', title: 'Atmosphere VIII: Visionary Scale' },
  ];

  return (
    <div className="bg-stone-950 text-stone-200 selection:bg-gold-500/30">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-stone-950 z-10"></div>
          <img 
            src="input_file_0.png" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
            alt="Roman Wellness Sanctuary Vision"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000'; }}
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-6xl">
          <div className="animate-fade-in">
            <h2 className="font-cinzel text-gold-400 text-xs md:text-sm tracking-[0.8em] mb-8 uppercase drop-shadow-lg">
              Architectural Wellness Concept
            </h2>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white mb-10 leading-[0.9] animate-slide-up [animation-delay:200ms] drop-shadow-2xl">
              ANCIENT <span className="italic font-light">Ritual</span> <br/> 
              <span className="text-gold-200 uppercase">Modern</span> LUXURY
            </h1>
            <p className="font-sans text-stone-100 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light leading-relaxed animate-slide-up [animation-delay:400ms] drop-shadow-md">
              A destination-scale sanctuary rooted in Roman bath culture, reimagined through contemporary architecture and immersive design.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10 animate-slide-up [animation-delay:600ms]">
              <Link 
                to="/concept" 
                className="group flex items-center space-x-4 px-12 py-6 bg-gold-500 text-stone-950 font-bold tracking-[0.3em] uppercase text-[10px] transition-all hover:bg-gold-400 hover:scale-105 shadow-2xl"
              >
                <span>The Concept</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/investors" 
                className="group flex items-center space-x-4 px-12 py-6 border border-white/40 text-white font-bold tracking-[0.3em] uppercase text-[10px] backdrop-blur-md transition-all hover:bg-white/10"
              >
                <span>Investor Brief</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE SANCTUARY GALLERY (MASONRY) */}
      <section className="py-32 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div ref={addToRefs} className="scroll-reveal text-center mb-24">
            <h3 className="font-cinzel text-gold-500 text-xs tracking-[0.6em] mb-6 uppercase">The Gallery</h3>
            <h2 className="font-serif text-4xl md:text-7xl text-white mb-8">Architectural <span className="italic text-gold-200">Atmospheres</span></h2>
            <div className="w-24 h-px bg-gold-500 mx-auto mb-12"></div>
            <p className="text-stone-400 max-w-2xl mx-auto font-light tracking-wide text-lg italic leading-relaxed">
              A curated front-view exploration of the spatial rhythm, material textures, and monumental forms that define the Roman Wellness Sanctuary.
            </p>
          </div>

          {/* Masonry Layout Implementation */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                ref={addToRefs} 
                className="scroll-reveal break-inside-avoid group relative overflow-hidden bg-stone-900 border border-white/5 shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-105" 
                    // Fallback for missing local files
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518005020250-675f0f0f4a2d?auto=format&fit=crop&q=80&w=800&sig=${idx}`; }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                    <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="font-cinzel text-gold-400 text-[10px] tracking-[0.5em] uppercase mb-3">Front View</p>
                      <h3 className="font-serif text-2xl text-white italic mb-4">{img.title}</h3>
                      <div className="flex items-center space-x-2 text-white/50 text-[10px] font-cinzel tracking-widest uppercase">
                        <Maximize2 size={12} />
                        <span>Enlarge Concept</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Border Glow on Hover */}
                  <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFINEMENT CALLOUT */}
      <section className="py-24 bg-stone-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
           <div ref={addToRefs} className="scroll-reveal">
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 italic">"Architecture is the vessel for ritual."</h2>
              <p className="text-stone-400 font-light tracking-widest uppercase text-xs">Roman Wellness Sanctuary — A visionary project by Emin Sular</p>
           </div>
        </div>
      </section>

      {/* VISIONARY CTA */}
      <section className="py-48 bg-stone-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
           <img src="input_file_2.png" className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div ref={addToRefs} className="scroll-reveal max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-5xl md:text-8xl text-white mb-12 italic leading-tight">Connect With <br/> <span className="text-gold-200">the Vision</span></h2>
          <p className="text-stone-300 text-xl mb-16 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Roman Wellness Sanctuary is preparing for its first physical deployment. Strategic investment inquiries are now open for select partners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10">
            <Link to="/contact" className="w-full sm:w-auto px-16 py-7 bg-gold-500 text-stone-950 font-bold uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-gold-400 hover:-translate-y-2 shadow-2xl">
              Request Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
