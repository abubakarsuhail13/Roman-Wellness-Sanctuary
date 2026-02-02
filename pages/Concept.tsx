
import React, { useEffect, useState, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, ArrowRight } from 'lucide-react';

const IMG_URLS = {
  2: 'https://lh3.googleusercontent.com/d/1pfHxBgUGoP_0-L4nRVzsnuwA5pj8fDWV',
  3: 'https://lh3.googleusercontent.com/d/1ukGFnayhmOCydlHNEpuaDvJj1kvgpKR0',
  4: 'https://lh3.googleusercontent.com/d/15QvF4rpiT5s_IQU3v9mk6ehKsg42ppDB',
  6: 'https://lh3.googleusercontent.com/d/1RvgyP2HV1tB-EFxT2kVTB3qIw1fRs3y0',
};

const Concept: React.FC = () => {
  const [dynamicRitual, setDynamicRitual] = useState<{ title: string; description: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const generateRitualNarrative = useCallback(async () => {
    setLoading(true);
    try {
      // Direct use of process.env.API_KEY as per coding guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Craft a highly atmospheric, short, luxury architectural description (2-3 sentences) of a "Ritual of Restoration" in a Roman-inspired basalt sanctuary. Use words like "monolithic," "ether," "void," and "sacred."',
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ['title', 'description']
          }
        }
      });
      
      const data = JSON.parse(response.text || '{}');
      setDynamicRitual(data);
    } catch (error) {
      console.warn("Gemini service unavailable, using fallback narrative.");
      setDynamicRitual({
        title: "The Basalt Basin Ritual",
        description: "A ceremonial transition through monolithic stone corridors where the sound of distant water and rhythmic light beams create a meditative cadence for the spirit."
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    generateRitualNarrative();
  }, [generateRitualNarrative]);

  const experienceZones = [
    { title: "Subterranean Basin", desc: "Thermal waters cradled by volcanic rock, illuminated by rhythmic skylights.", img: IMG_URLS[6] },
    { title: "Caldarium Light", desc: "Radiant warmth within an architectural void of flickering shadows.", img: IMG_URLS[3] },
    { title: "Vestibule of Silence", desc: "The transition from external noise to the interior monumental silence.", img: IMG_URLS[2] },
    { title: "Silent Tectonics", desc: "A place for restoration grounding the physical form through raw materiality.", img: IMG_URLS[4] }
  ];

  return (
    <div className="bg-stone-950 min-h-screen pt-48 pb-32 text-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
          <h3 className="font-cinzel text-gold-500 text-[10px] tracking-[0.8em] mb-8 uppercase">The Architecture of Rest</h3>
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 italic leading-[0.9]">Sacred <br/> <span className="text-gold-200">Immersion</span></h1>
          <p className="text-xl md:text-2xl text-stone-400 font-light leading-relaxed max-w-2xl font-serif">
            Orchestrating a sensory journey through monumental transitions, shadow-play, and the visceral weight of ancient stone.
          </p>
        </div>

        {/* CONCEPT GRID */}
        <div className="grid lg:grid-cols-2 gap-24 mb-64">
          {experienceZones.map((zone, i) => (
            <div key={i} className="group scroll-reveal visible">
              <div className="relative overflow-hidden mb-12 aspect-[4/5] border border-white/5 shadow-2xl bg-stone-900">
                <img 
                  src={zone.img} 
                  alt={zone.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-700"></div>
                {/* Visual Label */}
                <div className="absolute top-10 right-10 flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-cinzel tracking-[0.4em] text-white uppercase">Study</span>
                  <span className="text-[12px] font-serif italic text-gold-400">00{i+1}</span>
                </div>
              </div>
              <div className="max-w-md">
                <h3 className="font-cinzel text-2xl text-white mb-6 tracking-widest">{zone.title}</h3>
                <p className="text-stone-400 font-light italic text-lg leading-relaxed mb-8">{zone.desc}</p>
                <div className="h-px w-12 bg-gold-500/30 group-hover:w-full transition-all duration-700 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* GENERATIVE AI NARRATIVE SECTION */}
        <div className="relative py-40 px-12 md:px-32 bg-stone-900/30 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <Sparkles className="text-gold-500/40 mb-12 animate-pulse" size={40} />
            <h3 className="font-cinzel text-gold-500 text-[9px] tracking-[1em] mb-12 uppercase">Visionary Narrative</h3>
            
            {loading ? (
              <div className="space-y-6 flex flex-col items-center">
                <div className="h-10 bg-white/5 rounded w-64 animate-pulse"></div>
                <div className="h-4 bg-white/5 rounded w-96 animate-pulse"></div>
                <div className="h-4 bg-white/5 rounded w-72 animate-pulse"></div>
              </div>
            ) : dynamicRitual ? (
              <>
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-10 italic leading-tight">{dynamicRitual.title}</h2>
                <p className="text-stone-300 text-2xl md:text-4xl font-light leading-relaxed mb-20 italic font-serif">
                  "{dynamicRitual.description}"
                </p>
              </>
            ) : null}

            <button 
              onClick={generateRitualNarrative}
              className="group flex items-center space-x-6 text-gold-500 text-[10px] font-cinzel tracking-[0.6em] uppercase hover:text-white transition-colors py-4 border-b border-gold-500/20 hover:border-white transition-all duration-500"
            >
              <span>Evolve Ritual Path</span>
              <ArrowRight size={14} className="group-hover:translate-x-4 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
