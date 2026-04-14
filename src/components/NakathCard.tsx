import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Utensils, Coins, Droplet, Briefcase, Sprout, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Minus } from 'lucide-react';
import { Nakath } from '../constants/nakath';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const iconMap: Record<string, any> = {
  Sun,
  Moon,
  Utensils,
  Coins,
  Droplet,
  Briefcase,
  Sprout,
};

const directionIcon: Record<string, any> = {
  North: ArrowUp,
  South: ArrowDown,
  East: ArrowRight,
  West: ArrowLeft,
  None: Minus,
};

interface NakathCardProps {
  nakath: Nakath;
  index: number;
}

const NakathCard: React.FC<NakathCardProps> = ({ nakath, index }) => {
  const Icon = iconMap[nakath.icon] || Sun;
  const DirectionIcon = directionIcon[nakath.direction] || Minus;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl flex flex-col h-full relative overflow-hidden"
    >
      <div className={cn("absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl", nakath.color, "opacity-20")} />
      
      <div className="flex items-center space-x-4 mb-4">
        <div className={cn("p-3 rounded-xl", nakath.color, "text-white shadow-lg")}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white leading-tight">{nakath.title}</h3>
          <p className="text-xs text-yellow-200 uppercase tracking-wider">{nakath.time}</p>
        </div>
      </div>

      <div className="space-y-4 flex-grow">
        <div className="space-y-1">
          <p className="text-lg font-medium text-amber-200 sinhala-font">{nakath.sinhalaTitle}</p>
          <p className="text-md font-medium text-orange-200 tamil-font">{nakath.tamilTitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-black/20 p-2 rounded-lg border border-white/5">
            <p className="text-white/60">Direction</p>
            <div className="flex items-center space-x-1 text-white font-semibold">
              <DirectionIcon size={14} />
              <span>{nakath.direction}</span>
            </div>
          </div>
          <div className="bg-black/20 p-2 rounded-lg border border-white/5">
            <p className="text-white/60">Dress Color</p>
            <p className="text-white font-semibold">{nakath.dressColor}</p>
          </div>
        </div>

        <div className="space-y-2 border-t border-white/10 pt-4">
          <p className="text-sm text-white/80 italic">"{nakath.description}"</p>
          <p className="text-xs text-white/60 sinhala-font">{nakath.sinhalaDescription}</p>
          <p className="text-xs text-white/60 tamil-font">{nakath.tamilDescription}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-[10px] text-white/40 text-center uppercase tracking-tighter">{nakath.date}</p>
      </div>
    </motion.div>
  );
};

export default NakathCard;
