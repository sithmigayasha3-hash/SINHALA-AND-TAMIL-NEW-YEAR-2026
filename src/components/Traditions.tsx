import React from 'react';
import { motion } from 'framer-motion';

const traditions = [
  { name: 'Kiribath', description: 'Milk rice - first meal prepared in the new year.', icon: '🍚' },
  { name: 'Kavum', description: 'Traditional oil cakes.', icon: '🍩' },
  { name: 'Kokis', description: 'Crispy fried snack.', icon: '🏵️' },
  { name: 'Rabana', description: 'A large traditional drum played during the season.', icon: '🥁' },
  { name: 'Onchilla', description: 'Traditional swings for outdoor fun.', icon: '🎡' },
  { name: 'Bulath Ath', description: 'Betel leaves offered to elders for respect.', icon: '🍃' },
];

const Traditions: React.FC = () => {
  return (
    <div className="py-12 px-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-8 text-center text-amber-200">New Year Traditions & Flavors</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {traditions.map((item, idx) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-amber-500/30 transition-all group"
          >
            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
            <h4 className="font-bold text-white mb-1">{item.name}</h4>
            <p className="text-xs text-white/60">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Traditions;
