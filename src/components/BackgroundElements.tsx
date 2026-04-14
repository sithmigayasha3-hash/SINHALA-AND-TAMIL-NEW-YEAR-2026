import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/30 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/20 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="absolute top-10 right-10 opacity-10 animate-pulse">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" />
          <path d="M100 20 L100 180 M20 100 L180 100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 opacity-10 animate-bounce">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 10 C100 40 130 75 75 140 C20 75 50 40 75 10Z" fill="white" />
          <circle cx="75" cy="40" r="10" fill="#FFD700" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundElements;
