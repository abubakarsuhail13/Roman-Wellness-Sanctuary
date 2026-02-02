
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Maximize2, MoveDown } from 'lucide-react';

const IMG_URLS = {
  0: 'https://lh3.googleusercontent.com/d/1sAtYc7QXK3LkU-w8hKxmn9tqvXc7Gdcb',
  1: 'https://lh3.googleusercontent.com/d/1r0gpkJRSZDmn8-Vw0w8IC9P2_QOE5Mu_',
  2: 'https://lh3.googleusercontent.com/d/1pfHxBgUGoP_0-L4nRVzsnuwA5pj8fDWV',
  3: 'https://lh3.googleusercontent.com/d/1ukGFnayhmOCydlHNEpuaDvJj1kvgpKR0',
  4: 'https://lh3.googleusercontent.com/d/15QvF4rpiT5s_IQU3v9mk6ehKsg42ppDB',
  5: 'https://lh3.googleusercontent.com/d/1yoG5ekFNhUwWgSKPOHgIW2FFH5P35ZU5',
  6: 'https://lh3.googleusercontent.com/d/1RvgyP2HV1tB-EFxT2kVTB3qIw1fRs3y0',
  7: 'https://lh3.googleusercontent.com/d/1U8QiWVOdP_7NpzYFRnQEavg3i2fCJDWq',
  8: 'https://lh3.googleusercontent.com/d/1QRfjdbUeBGEfkjsNPWA_8F2ODqNcDn5L',
};

const GalleryCard: React.FC<{ img: any, idx: number, addToRefs: (el: HTMLDivElement | null) => void }> = ({ img, idx, addToRefs }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={(el) => {
        addToRefs(el);
        (cardRef as any).current = el;
      }} 
      onMouseMove={handleMouseMove}
      className="scroll-reveal break-inside-avoid group relative overflow-hidden bg-stone-900 border border-white/5 shadow-2xl transition-all duration-700 hover:border-gold-500/30"
    >
      <div className="relative overflow-hidden aspect-auto">
        <img 
          src={img.src} 
          alt={img.title} 
          className="w-full h-auto object-cover transition-transform duration-[3s] ease-out group-hover:scale-110" 
          crossOrigin="anonymous"
        />
        
        {/* SPECULAR LIGHT LAYER */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-soft-light"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`
          }}
        ></div>

        {/* OVERLAY CONTENT */}
        <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/60 transition-all duration-700 flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100">
          <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <p className="font-cinzel text-gold-400 text-[9px] tracking-[0.6em] uppercase mb-4 opacity-70">Atmosphere {idx + 1}</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white italic mb-6 leading-tight">{img.title}</h3>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-px bg-gold-500/50"></div>
              <span className="text-stone-400 text-[9px] font-cinzel tracking-[0.4em] uppercase">Architecture Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      if (heroImgRef.current) {
        // Subtle Parallax with Scale: image moves slower and zooms out slightly for depth
        const scale = 1.1 - scrolled * 0.00015;
        const translate = scrolled * 0.4;
        heroImgRef.current.style.transform = `translate3d(0, ${translate}px, 0) scale(${Math.max(scale, 1)})`;
      }
      
      if (heroContentRef.current) {
        // Content moves faster than background but slower than scroll
        const translate = scrolled * -0.15;
        heroContentRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;
        heroContentRef.current.style.opacity = `${Math.max(1 - scrolled / 800, 0)}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  const galleryImages = [
    { src: IMG_URLS[0], title: 'The Eternal Basin' },
    { src: IMG_URLS[2], title: 'Vestibule of Silence' },
    { src: IMG_URLS[1], title: 'Classical Reflection' },
    { src: IMG_URLS[6], title: 'Subterranean Sanctum' },
    { src: IMG_URLS[4], title: 'Monumental Transition' },
    { src: IMG_URLS[3], title: 'The Thermal Void' },
    { src: IMG_URLS[5], title: 'Collective Immersion' },
    { src: IMG_URLS[7], title: 'Celestial Bridge' },
    { src: IMG_URLS[8], title: 'Geometric Cadence' },
  ];

  return (
    <div className="bg-stone-950 text-stone-200 selection:bg-gold-500/30">
      {/* SCROLL INDICATOR SIDEBAR */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-6 pointer-events-none">
        <div className="w-px h-24 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-gold-500/50 h-full -translate-y-full animate-[slideUp_3s_infinite]"></div>
        </div>
        <span className="text-[8px] font-cinzel text-stone-500 tracking-[0.5em] rotate-90 origin-center whitespace-nowrap translate-y-8 uppercase">Navigation Ritual</span>
      </div>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-stone-950 z-10"></div>
          <img 
            ref={heroImgRef}
            src={IMG_URLS[0]} 
            className="w-full h-full object-cover scale-110 brightness-[0.6] will-change-transform"
            alt="Roman Wellness Sanctuary Vision"
            crossOrigin="anonymous"
          />
          {/* Dust/Atmosphere Overlay */}
          <div className="absolute inset-0 z-15 opacity-20 pointer-events-none mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
        </div>

        {/* Content Layer */}
        <div ref={heroContentRef} className="relative z-20 text-center px-6 max-w-7xl will-change-transform">
          <div className="animate-fade-in flex flex-col items-center">
            {/* Tagline with line animation */}
            <div className="flex items-center space-x-4 mb-8 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
              <div className="h-px w-8 bg-gold-500/40"></div>
              <h2 className="font-cinzel text-gold-400 text-[9px] md:text-xs tracking-[1.2em] uppercase">
                An Architectural Narrative
              </h2>
              <div className="h-px w-8 bg-gold-500/40"></div>
            </div>
            
            {/* Masked Main Heading */}
            <div className="overflow-hidden mb-12">
              <h1 className="font-serif text-6xl md:text-9xl lg:text-[12rem] text-white leading-[0.85] tracking-tight animate-[slideUp_1.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                SACRED <br/> 
                <span className="italic text-gold-200 font-light opacity-80 inline-block translate-y-full animate-[slideUp_1.4s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">Architecture</span>
              </h1>
            </div>
            
            {/* Descriptive Text */}
            <p className="font-sans text-stone-300 text-lg md:text-xl max-w-xl mx-auto mb-16 font-light leading-relaxed opacity-0 animate-[fadeIn_2s_ease-out_0.8s_forwards]">
              Honoring the monumental rhythm of Rome through contemporary void and material silence.
            </p>

            {/* Primary Action */}
            <div className="opacity-0 animate-[fadeIn_2s_ease-out_1.2s_forwards]">
              <Link 
                to="/concept" 
                className="group relative inline-flex items-center justify-center px-14 py-6 border border-white/20 text-white font-bold tracking-[0.4em] uppercase text-[10px] backdrop-blur-sm transition-all hover:border-gold-500"
              >
                <div className="absolute inset-0 bg-gold-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <span className="relative z-10 flex items-center">
                  Descend into the Sanctuary
                  <ArrowRight size={14} className="ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer animate-[fadeIn_2s_ease-out_1.5s_forwards]">
          <span className="text-[8px] font-cinzel tracking-[0.4em] text-white uppercase">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* LIGHT & SHADOW GALLERY */}
      <section className="py-48 px-6 bg-stone-950 relative">
        {/* Abstract Light Shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gold-500/5 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-stone-500/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={addToRefs} className="scroll-reveal flex flex-col items-center text-center mb-32">
            <span className="font-cinzel text-gold-500 text-[10px] tracking-[0.8em] mb-8 uppercase">Portfolio I</span>
            <h2 className="font-serif text-5xl md:text-8xl text-white mb-10 max-w-4xl leading-tight">Interaction of <span className="italic text-gold-100">Light & Void</span></h2>
            <div className="w-px h-24 bg-gradient-to-b from-gold-500 to-transparent mb-12"></div>
            <p className="text-stone-400 max-w-xl mx-auto font-light tracking-widest text-sm uppercase leading-loose opacity-70">
              The orchestration of natural illumination within heavy monolithic structures.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
            {galleryImages.map((img, idx) => (
              <GalleryCard key={idx} img={img} idx={idx} addToRefs={addToRefs} />
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALITY SECTION */}
      <section className="py-48 bg-stone-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div ref={addToRefs} className="scroll-reveal order-2 lg:order-1">
             <div className="relative aspect-[4/5] overflow-hidden border border-white/10 shadow-3xl group">
                <img src={IMG_URLS[4]} className="w-full h-full object-cover brightness-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Material Detail" />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:opacity-0 transition-opacity"></div>
             </div>
          </div>
          <div ref={addToRefs} className="scroll-reveal order-1 lg:order-2">
            <h3 className="font-cinzel text-gold-400 text-[10px] tracking-[0.6em] mb-10 uppercase">The Tectonics</h3>
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-10 italic">Brutalist <br/> <span className="text-gold-200">Refinement</span></h2>
            <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-12 opacity-80">
              The project utilizes cold-cast basalt stone, raw bronze, and tadelakt plaster. This tactile palette grounds the sensory experience, providing a visceral connection to the architectural ritual.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="border-t border-white/10 pt-6">
                <p className="font-cinzel text-gold-500 text-[10px] tracking-widest uppercase mb-2">Structure</p>
                <p className="text-stone-400 text-sm font-light">Basaltic Grain</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="font-cinzel text-gold-500 text-[10px] tracking-widest uppercase mb-2">Radiance</p>
                <p className="text-stone-400 text-sm font-light">Burnished Bronze</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VISIONARY STATEMENT */}
      <section className="py-64 bg-stone-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src={IMG_URLS[7]} className="w-full h-full object-cover grayscale" alt="Background Texture" />
           <div className="absolute inset-0 bg-stone-950/90"></div>
        </div>
        <div ref={addToRefs} className="scroll-reveal max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-5xl md:text-[9rem] text-white mb-16 italic leading-none animate-float">"Rest is <span className="text-gold-300">Resurrection</span>"</h2>
          <div className="flex flex-col items-center">
            <div className="w-px h-32 bg-gold-500/30 mb-16"></div>
            <Link to="/contact" className="group text-gold-500 text-[11px] font-cinzel tracking-[0.8em] uppercase flex items-center hover:text-white transition-colors">
              Secure Executive Portfolio
              <ArrowRight size={14} className="ml-4 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
