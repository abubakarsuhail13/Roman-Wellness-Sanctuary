
import React, { useState } from 'react';
import { Lock, FileText, Globe, Building2 } from 'lucide-react';

const Investors: React.FC = () => {
  const [accessRequested, setAccessRequested] = useState(false);

  return (
    <div className="bg-stone-950 min-h-screen pt-32 pb-24 text-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full border border-gold-500/30">
              <Lock className="text-gold-500" size={32} />
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-8">Strategic Partnerships</h1>
          <p className="text-xl text-stone-400 font-light leading-relaxed">
            A destination-level wellness investment concept designed to scale across premium global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="bg-stone-900/50 p-10 border border-white/5">
            <Building2 className="text-gold-500 mb-6" size={24} />
            <h3 className="font-cinzel text-lg mb-4 tracking-widest text-white">Global Scalability</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              Designed for premium global destinations—from historic European capitals to exclusive resort enclaves in the Middle East and Asia.
            </p>
          </div>
          <div className="bg-stone-900/50 p-10 border border-white/5">
            <FileText className="text-gold-500 mb-6" size={24} />
            <h3 className="font-cinzel text-lg mb-4 tracking-widest text-white">Advanced Concept</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              We have refined the architectural language and brand positioning, preparing for international market deployment.
            </p>
          </div>
          <div className="bg-stone-900/50 p-10 border border-white/5">
            <Globe className="text-gold-500 mb-6" size={24} />
            <h3 className="font-cinzel text-lg mb-4 tracking-widest text-white">Cultural Resonance</h3>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              Aligning with the rising demand for experiential wellness and culturally immersive luxury hospitality investments.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-stone-900 border border-gold-500/20 overflow-hidden shadow-2xl">
          <div className="p-12 text-center">
            <h2 className="font-serif text-3xl text-white mb-6">Request Investor Overview</h2>
            <p className="text-stone-400 mb-10 font-light">
              Access detailed architectural plans, financial projections, and strategic deployment narratives.
            </p>
            
            {!accessRequested ? (
              <form 
                className="space-y-6 max-w-lg mx-auto"
                onSubmit={(e) => { e.preventDefault(); setAccessRequested(true); }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" required className="bg-transparent border-b border-white/20 p-3 focus:border-gold-500 outline-none transition-all placeholder:text-stone-600 text-stone-200" />
                  <input type="text" placeholder="Last Name" required className="bg-transparent border-b border-white/20 p-3 focus:border-gold-500 outline-none transition-all placeholder:text-stone-600 text-stone-200" />
                </div>
                <input type="email" placeholder="Professional Email" required className="w-full bg-transparent border-b border-white/20 p-3 focus:border-gold-500 outline-none transition-all placeholder:text-stone-600 text-stone-200" />
                <input type="text" placeholder="Company / Investment Entity" required className="w-full bg-transparent border-b border-white/20 p-3 focus:border-gold-500 outline-none transition-all placeholder:text-stone-600 text-stone-200" />
                <button 
                  type="submit"
                  className="w-full py-4 bg-gold-500 text-stone-950 font-bold uppercase tracking-[0.2em] hover:bg-gold-400 transition-colors mt-4"
                >
                  Verify Access
                </button>
              </form>
            ) : (
              <div className="py-12 px-6 bg-stone-950/50 rounded animate-fade-in">
                <h4 className="font-cinzel text-gold-500 mb-4 tracking-widest uppercase">Request Submitted</h4>
                <p className="text-stone-300">
                  Your credentials have been sent to our secure team. A representative will reach out shortly after verifying your entity.
                </p>
              </div>
            )}
          </div>
          <div className="bg-stone-950 p-6 text-center border-t border-white/5">
             <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
              Strictly Confidential & Proprietary Information
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
