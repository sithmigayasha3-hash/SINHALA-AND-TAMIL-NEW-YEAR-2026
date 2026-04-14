import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Heart, Share2, Info } from 'lucide-react';
import { NAKATH_2026 } from './constants/nakath';
import { fireConfetti } from './utils/confetti';
import Countdown from './components/Countdown';
import NakathCard from './components/NakathCard';
import BackgroundElements from './components/BackgroundElements';
import Traditions from './components/Traditions';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'rituals'>('all');
  const [showGreeting, setShowGreeting] = useState(false);
  
  const targetDate = new Date('2026-04-14T09:32:00');

  useEffect(() => {
    fireConfetti();
    const timer = setTimeout(() => setShowGreeting(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleShare = () => {
    const nakathList = NAKATH_2026.map(n => `${n.title}: ${n.time} (${n.date})`).join('\n');
    const shareText = `🌸 Sinhala & Tamil New Year 2026 🌸\n\nNakath (Auspicious Times):\n${nakathList}\n\nWishing you a Happy New Year!`;

    if (navigator.share) {
      navigator.share({
        title: 'Sinhala & Tamil New Year 2026',
        text: shareText,
        url: window.location.href,
      }).catch((error) => {
        console.log('Error sharing', error);
        copyToClipboard(shareText);
      });
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Nakath times copied to clipboard! Share with your friends and family.');
  };

  const playRabana = () => {
    fireConfetti();
    // Simulate drum haptic/sound
  };

  return (
    <div className="min-h-screen bg-[#4a0404] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img 
          src="/images/hero.jpg" 
          alt="Festive Background" 
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a0404]/80 via-transparent to-[#4a0404]" />
      </div>
      <BackgroundElements />
      
      {/* Header */}
      <header className="relative z-10 pt-10 pb-6 px-4 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-6 flex flex-col items-center"
        >
          <button 
            onClick={playRabana}
            className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl mb-4 border-2 border-yellow-200 hover:scale-110 active:scale-95 transition-transform"
          >
            <Sparkles size={40} className="text-[#4a0404]" />
          </button>
          <h1 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200 drop-shadow-lg">
            New Year 2026
          </h1>
          <div className="flex flex-col items-center mt-2 space-y-1">
            <p className="text-xl md:text-2xl font-bold text-amber-100 sinhala-font">සිංහල සහ දෙමළ අලුත් අවුරුද්ද</p>
            <p className="text-lg md:text-xl font-medium text-amber-200/80 tamil-font">சிங்கள மற்றும் தமிழ் புத்தாண்டு</p>
          </div>
        </motion.div>

        {/* Countdown */}
        <div className="mb-12">
          <p className="text-center text-sm uppercase tracking-[0.3em] mb-4 text-white/60">Countdown to Dawn</p>
          <Countdown targetDate={targetDate} />
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        {/* Main Greeting Section */}
        <AnimatePresence>
          {showGreeting && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 text-center backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Heart className="text-red-500 fill-red-500" size={24} />
                <span>Happy New Year!</span>
                <Heart className="text-red-500 fill-red-500" size={24} />
              </h2>
              
              <div className="space-y-4 max-w-2xl mx-auto text-lg text-amber-50/90 italic">
                <p>Wishing you and your family a year filled with prosperity, happiness, and health. May this 2026 New Year bring endless blessings to your life.</p>
                <div className="flex flex-col items-center py-2 space-y-1">
                  <p className="sinhala-font">ඔබටත් ඔබේ පවුලේ සැමටත් සාමය සතුට පිරි සුබ අලුත් අවුරුද්දක් වේවා!</p>
                  <p className="tamil-font">உங்களுக்கும் உங்கள் குடும்பத்தினருக்கும் இனிய புத்தாண்டு நல்வாழ்த்துக்கள்!</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-[#4a0404] px-6 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95"
                >
                  <Share2 size={20} />
                  <span>Share Wishes</span>
                </button>
                <button 
                  onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full font-bold transition-all backdrop-blur-md active:scale-95"
                >
                  <Calendar size={20} />
                  <span>View Nakath</span>
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Tabs for Nakath */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/30 backdrop-blur-md p-1 rounded-xl flex">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'all' ? 'bg-amber-500 text-[#4a0404]' : 'text-white/60 hover:text-white'}`}
            >
              Nakath List
            </button>
            <button 
              onClick={() => setActiveTab('rituals')}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'rituals' ? 'bg-amber-500 text-[#4a0404]' : 'text-white/60 hover:text-white'}`}
            >
              Rituals
            </button>
          </div>
        </div>

        {/* Content Section */}
        {activeTab === 'all' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NAKATH_2026.map((nakath, index) => (
                <NakathCard key={nakath.id} nakath={nakath} index={index} />
              ))}
            </div>
            <Traditions />
          </div>
        )}

        {activeTab === 'rituals' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/20 p-8 rounded-3xl border border-white/5">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-amber-400 flex items-center space-x-3">
                  <Info className="text-amber-400" size={24} />
                  <span>Sinhala Rituals</span>
                </h3>
                <ul className="space-y-4 text-white/80 list-disc pl-5">
                  <li>Lighting the Traditional Oil Lamp</li>
                  <li>Preparing and Eating Kiribath (Milk Rice)</li>
                  <li>Offering Betel Leaves to Elders (Gaurawa)</li>
                  <li>Exchanging Money (Ganu-Denu)</li>
                  <li>Anointing Oil (Hisa-Thel Gema)</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-orange-400 flex items-center space-x-3">
                  <Info className="text-orange-400" size={24} />
                  <span>Tamil Rituals</span>
                </h3>
                <ul className="space-y-4 text-white/80 list-disc pl-5">
                  <li>Bathing and wearing New Clothes</li>
                  <li>Performing Puja at Kovils</li>
                  <li>Eating Pongal (Sweet Rice)</li>
                  <li>Kolam (Decorative Floor Patterns)</li>
                  <li>Kaivisesham (Exchanging Money)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-white/40">
        <p className="mb-2">Happy Sinhala and Tamil New Year 2026</p>
        <p className="text-xs">Based on traditional astrological calculations</p>
        <div className="mt-8 opacity-20 hover:opacity-100 transition-opacity">
           <svg className="w-12 h-12 mx-auto" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2" />
              <path d="M30 30 L70 70 M30 70 L70 30" stroke="currentColor" strokeWidth="2" />
           </svg>
        </div>
      </footer>
    </div>
  );
};

export default App;
