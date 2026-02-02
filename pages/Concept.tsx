
import React, { useEffect, useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const Concept: React.FC = () => {
  const [dynamicRitual, setDynamicRitual] = useState<{ title: string; description: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const generateRitualNarrative = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Generate a short, luxury, architectural description of a fictional Roman-inspired wellness ritual named "The Path of Silence". Focus on monumental stone, ethereal light beams, and thermal restoration within a subterranean cave.',
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
      console.error("Gemini narrative failed", error);
      setDynamicRitual({
        title: "The Path of Silence",
        description: "A ceremonial walk through monumental stone corridors, where light falls in rhythmic slivers and the sound of distant falling water creates a meditative cadence for restoration."
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateRitualNarrative();
  }, []);

  const experienceZones = [
    { title: "Subterranean Sanctuary", desc: "A deep thermal basin where light shafts pierce the architectural void.", img: "input_file_6.png" },
    { title: "Candlelit Rituals", desc: "Radiant heat chambers inspired by the sacred candlelit traditions of the ancient caldariums.", img: "input_file_3.png" },
    { title: "The Grand Entrance", desc: "A monumental transition from the outside world into the collective restoration journey.", img: "input_file_2.png" },
    { title: "Monumental Rest", desc: "Silent restoration zones grounding the spirit through brutalist stone and rhythmic shadow.", img: "input_file_4.png" }
  ];

  return (
    <div className="bg-stone-950 min-h-screen pt-40 pb-32 text-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h3 className="font-cinzel text-gold-500 text-xs tracking-[0.5em] mb-6 uppercase">The Experience</h3>
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 italic leading-[0.9]">Architectural <br/> <span className="text-gold-200">Ritual</span></h1>
          <p className="text-xl md:text-2xl text-stone-400 font-light leading-relaxed max-w-2xl">
            Roman Wellness Sanctuary is more than a destination—it is an orchestrated journey through levels of transition, immersion, and restoration.
          </p>
        </div>

        {/* FRONT VIEW GALLERY SECTION */}
        <div className="grid md:grid-cols-2 gap-20 mb-48">
          {experienceZones.map((zone, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden mb-10 aspect-[4/5] md:aspect-square border border-white/5 shadow-2xl">
                <img 
                  src={zone.img} 
                  alt={zone.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="px-2">
                <h3 className="font-cinzel text-2xl text-white mb-4 tracking-widest">{zone.title}</h3>
                <p className="text-stone-400 font-light italic text-lg leading-relaxed">{zone.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DYNAMIC NARRATIVE SECTION */}
        <div className="bg-stone-900/50 border border-gold-500/10 p-12 md:p-32 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px]"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="font-cinzel text-gold-500 text-[10px] tracking-[0.6em] mb-12 uppercase">Visionary Narrative</h3>
            {loading ? (
              <div className="animate-pulse space-y-8">
                <div className="h-16 bg-white/5 rounded w-2/3 mx-auto"></div>
                <div className="h-4 bg-white/5 rounded w-full mx-auto"></div>
                <div className="h-4 bg-white/5 rounded w-1/2 mx-auto"></div>
              </div>
            ) : dynamicRitual ? (
              <>
                <h2 className="font-serif text-5xl md:text-8xl text-white mb-10 italic leading-tight">{dynamicRitual.title}</h2>
                <p className="text-stone-300 text-2xl md:text-3xl font-light leading-relaxed mb-20 italic">"{dynamicRitual.description}"</p>
              </>
            ) : null}
            <button 
              onClick={generateRitualNarrative}
              className="px-16 py-5 bg-transparent border border-gold-500/30 text-gold-500 text-[10px] font-cinzel tracking-[0.5em] uppercase hover:bg-gold-500 hover:text-stone-950 transition-all duration-700"
            >
              Evolve the Vision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
