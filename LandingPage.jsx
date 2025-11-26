import React, { useState } from 'react';
import { Search, ShieldCheck, MessageSquare, Stethoscope, Menu, X, ArrowRight, Star, UserCheck, CheckCircle } from 'lucide-react';

// --- MAIN LANDING PAGE COMPONENT ---
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-slate-900 pb-8 px-4 pt-4">
      
      {/* --- SECTION 1: HEADER & HERO (White Card) --- */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-12 mb-6 relative overflow-hidden shadow-sm">
        
        {/* Navigation */}
        <header className="flex items-center justify-between mb-16 md:mb-24 relative z-20">
          <div className="flex items-center gap-3">
            <div className="bg-black p-2.5 rounded-xl">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">ProDoc</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
             <a href="#features" className="hover:text-black transition-colors">Features</a>
             <a href="#how-it-works" className="hover:text-black transition-colors">How it Works</a>
             <a href="#reviews" className="hover:text-black transition-colors">Reviews</a>
             <button className="bg-slate-100 text-black px-6 py-2.5 rounded-full hover:bg-slate-200 transition-colors">
                Doctor Login
             </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 pr-4 pl-1 py-1 rounded-full mb-8">
                <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center">
                   <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Now Live in Sri Lanka</span>
             </div>

             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900">
               Healthcare you can <span className="text-slate-400">trust.</span><br className="hidden md:block"/>
               Doctors you can <span className="text-slate-400">verify.</span>
             </h1>
             
             <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
               Stop guessing. ProDoc connects you with verified specialists, authentic surgical histories, and structured patient reviews.
             </p>

             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
               <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
                 Find a Specialist <Search size={18} />
               </button>
               <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all w-full sm:w-auto justify-center">
                 How it works
               </button>
             </div>

             <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-semibold text-slate-400">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                     <div key={i} className={`w-9 h-9 rounded-full border-2 border-white bg-slate-${i+1}00 flex items-center justify-center text-[10px] text-white overflow-hidden bg-slate-200`}>
                       <UserCheck size={16} className="text-slate-400" />
                     </div>
                   ))}
                </div>
                <p>Trusted by 10,000+ patients</p>
             </div>
          </div>

          {/* Right: Abstract Graphic / Mockup */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
             {/* Main Card Mockup */}
             <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-xl relative z-10 rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-start gap-4 mb-6">
                   <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-8 h-8 text-slate-500" />
                   </div>
                   <div>
                      <h3 className="font-bold text-xl text-slate-900">Dr. Sarah Perera</h3>
                      <p className="text-slate-500 font-medium">Cardiologist • MBBS, MD</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[1,2,3,4,5].map(s => (
                           <Star key={s} className={`w-3.5 h-3.5 ${s < 5 ? 'text-black fill-black' : 'text-slate-300'}`} />
                        ))}
                        <span className="text-xs text-slate-400 ml-2 font-mono">(124 Verified)</span>
                      </div>
                   </div>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase">Experience</span>
                      <span className="font-bold text-slate-900">12 Years</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase">SLMC Status</span>
                      <span className="font-bold text-green-600 flex items-center gap-1 text-sm"><ShieldCheck size={14}/> Verified</span>
                   </div>
                </div>
             </div>

             {/* Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: TRUST STRIP --- */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <div className="bg-slate-100 rounded-3xl p-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
           {/* Simple text logos to keep it clean */}
           <span className="font-bold text-lg text-slate-500 tracking-tight">LankaHospitals</span>
           <span className="font-serif font-bold text-xl text-slate-500 italic">Nawaloka</span>
           <span className="font-mono font-bold text-lg text-slate-500">Durdans</span>
           <span className="font-bold text-lg text-slate-500 tracking-widest">ASIRI</span>
           <span className="font-semibold text-lg text-slate-500">Kings Hospital</span>
        </div>
      </div>

      {/* --- SECTION 3: FEATURES (Bento Grid) --- */}
      <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
         
         {/* Large Feature Card 1 */}
         <div className="bg-white rounded-[2.5rem] p-10 col-span-1 md:col-span-2 group">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
               <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Verified Profiles</h3>
            <p className="text-slate-500 leading-relaxed max-w-lg">
               Every doctor on ProDoc is verified against SLMC records. We check qualifications, practice history, and current standing so you don't have to worry about authenticity.
            </p>
         </div>

         {/* Tall Feature Card 2 */}
         <div className="bg-white rounded-[2.5rem] p-10 col-span-1 flex flex-col justify-between group">
            <div>
               <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Star className="w-7 h-7" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Evidence-Based Reviews</h3>
               <p className="text-slate-500 leading-relaxed text-sm">
                  No more fake reviews. We require proof of consultation (like a receipt) before a review is published.
               </p>
            </div>
            <div className="mt-8 flex gap-1">
               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-black rounded-full"></div>
               </div>
               <span className="text-xs font-bold">4.8/5</span>
            </div>
         </div>

         {/* Wide Feature Card 3 */}
         <div className="bg-black text-white rounded-[2.5rem] p-10 col-span-1 md:col-span-3 overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
               <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 text-white">
                  <MessageSquare className="w-7 h-7" />
               </div>
               <h3 className="text-2xl md:text-3xl font-bold mb-4">Multilingual AI Chatbot</h3>
               <p className="text-slate-300 leading-relaxed">
                  Describe your symptoms in Sinhala, Tamil, or English, and our AI will guide you to the right specialist immediately. Breaking language barriers in healthcare.
               </p>
               <button className="mt-8 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
                  Try Chatbot Demo
               </button>
            </div>
            {/* Decoration */}
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50 hidden md:block"></div>
         </div>
      </div>

      {/* --- SECTION 4: HOW IT WORKS (Steps) --- */}
      <div id="how-it-works" className="bg-white rounded-[2.5rem] p-10 md:p-16 mb-6">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simplifying your healthcare journey.</h2>
            <p className="text-slate-500">Three simple steps to find the care you need.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Step 1 */}
            <div className="relative">
               <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">1</div>
               <h3 className="text-xl font-bold mb-3">Search or Chat</h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                  Search by name/hospital or tell our AI chatbot your symptoms to get matched with the right specialist type.
               </p>
            </div>
            {/* Step 2 */}
            <div className="relative">
               <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">2</div>
               <h3 className="text-xl font-bold mb-3">Compare Verified Profiles</h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                  View qualifications, surgical history, and real patient feedback side-by-side to make an informed choice.
               </p>
            </div>
            {/* Step 3 */}
            <div className="relative">
               <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0">3</div>
               <h3 className="text-xl font-bold mb-3">Book with Confidence</h3>
               <p className="text-slate-500 text-sm leading-relaxed">
                  Choose the best doctor for your specific needs and book your appointment directly through the platform.
               </p>
            </div>
         </div>
      </div>

      {/* --- SECTION 5: FOOTER (CTA Card) --- */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-sm">
        <div className="relative z-10">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl mx-auto flex items-center justify-center mb-8 rotate-3 transition-transform hover:rotate-12 duration-500">
             <Stethoscope className="w-10 h-10 text-black" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto tracking-tight leading-[1.1]">
            Ready to make informed <br/> healthcare decisions?
          </h2>

          <p className="text-lg text-slate-500 mb-12">Join thousands of Sri Lankans using ProDoc today.</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-colors w-full sm:w-auto shadow-lg shadow-slate-200">
               Get Started Now
             </button>
             <button className="bg-white border border-slate-200 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors w-full sm:w-auto">
               Doctor Login
             </button>
          </div>

          <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-slate-400 border-t border-slate-100 pt-10">
             <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>System Operational</span>
             </div>
             <div className="flex gap-8">
               <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-black transition-colors">Contact</a>
             </div>
             <p className="mt-4 md:mt-0">© {new Date().getFullYear()} ProDoc Group Project</p>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- APP EXPORT ---
function App() {
  return (
    <LandingPage />
  )
}

export default App;