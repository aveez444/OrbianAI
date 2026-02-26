import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedTechVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [glowHue, setGlowHue] = useState(150);

  // Subtle emerald hue cycling (stays within fresh emerald range)
  useEffect(() => {
    const interval = setInterval(() => {
      const hue = 140 + Math.sin(Date.now() * 0.002) * 10;
      setGlowHue(hue);
      document.documentElement.style.setProperty('--emerald-ai', `hsl(${hue}, 75%, 45%)`);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Grid & letter parameters
  const size = 140;
  const depth = 70;
  const iso = (x, y, z) => ({
    x: x - z * 0.6,
    y: y - (x * 0.2 + z * 0.4)
  });

  const s = size;
  const d = depth / 6;
  
  // Define corners for a isometric box (used as reference)
  const corners = {
    ftl: iso(-s, -s, 0), ftr: iso(s, -s, 0),
    fbl: iso(-s, s, 0), fbr: iso(s, s, 0),
    btl: iso(-s, -s, d*2.5), btr: iso(s, -s, d*2.5),
    bbl: iso(-s, s, d*2.5), bbr: iso(s, s, d*2.5)
  };

  // Create "A" and "I" letter shapes using paths (isometric style)
  // A shape: two slanted lines and a crossbar
  const aLeft = [iso(-40, -40, 20), iso(-70, 40, 40)];
  const aRight = [iso(40, -40, 20), iso(70, 40, 40)];
  const aBar = [iso(-25, 0, 30), iso(25, 0, 30)];
  
  // I shape: vertical line with small caps
  const iStem = [iso(120, -50, 20), iso(120, 50, 40)];
  const iTopCap = [iso(110, -45, 25), iso(130, -45, 25)];
  const iBottomCap = [iso(110, 45, 35), iso(130, 45, 35)];

  // Additional floating letters (smaller) to enhance AI theme
  const floatingLetters = [
    { char: 'A', x: -180, y: -120, z: 10, delay: 0 },
    { char: 'I', x: 180, y: -100, z: 30, delay: 1.2 },
    { char: '⚡', x: -150, y: 130, z: 5, delay: 2.4 },
    { char: '◉', x: 160, y: 120, z: 20, delay: 3.6 }
  ];

  // Path tracer for energy flow (through letters)
  const tracePoints = [
    iso(-140, -100, 10), iso(-60, -40, 25), iso(0, 0, 30), iso(70, -30, 40), iso(150, 30, 20), iso(100, 120, 10), iso(-80, 100, 5), iso(-140, -40, 15), iso(-140, -100, 10)
  ];
  const tracePath = tracePoints.map(p => `${p.x},${p.y}`).join(' L ');

  // Background grid lines (subtle, emerald)
  const gridLines = [];
  for (let i = -3; i <= 3; i++) {
    for (let j = -3; j <= 3; j++) {
      if (i !== 0 || j !== 0) {
        const p1 = iso(i*100, j*80, -20);
        const p2 = iso(i*100, j*80, 80);
        gridLines.push([p1, p2]);
      }
    }
  }

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient that shifts with emerald glow */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at 50% 40%, hsl(${glowHue}, 70%, 15%) 0%, black 90%)`
        }}
      />
      
      {/* Very subtle noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.2\'/%3E%3C/svg%3E")' }} 
      />

      <svg viewBox="-250 -250 500 500" width="100%" height="100%" className="relative z-10" style={{ filter: `drop-shadow(0 0 30px hsla(${glowHue}, 80%, 50%, 0.5))` }}>
        <defs>
          <filter id="glow-ai" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="letter-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10d399" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="pulse-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="1" />
            <stop offset="100%" stopColor="#10d399" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tracer-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10d399" stopOpacity="0" />
            <stop offset="30%" stopColor="#a7f3d0" stopOpacity="1" />
            <stop offset="70%" stopColor="#34d399" stopOpacity="1" />
            <stop offset="100%" stopColor="#10d399" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Extreme background grid (very faint) */}
        <g opacity="0.12" stroke="#34d399" strokeWidth="0.6">
          {gridLines.map(([p1, p2], idx) => (
            <line key={idx} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} />
          ))}
        </g>

        {/* Isometric base plane (translucent) */}
        <polygon points={`${corners.ftl.x},${corners.ftl.y} ${corners.ftr.x},${corners.ftr.y} ${corners.bbr.x},${corners.bbr.y} ${corners.bbl.x},${corners.bbl.y}`} 
                 fill="none" stroke="#34d399" strokeWidth="1" opacity="0.15" strokeDasharray="6 6" />

        {/* Main "AI" letters with animation */}
        {/* A left leg */}
        <motion.line 
          x1={aLeft[0].x} y1={aLeft[0].y} x2={aLeft[1].x} y2={aLeft[1].y}
          stroke="url(#letter-grad)" strokeWidth="5" strokeLinecap="round"
          filter="url(#glow-ai)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
        {/* A right leg */}
        <motion.line 
          x1={aRight[0].x} y1={aRight[0].y} x2={aRight[1].x} y2={aRight[1].y}
          stroke="url(#letter-grad)" strokeWidth="5" strokeLinecap="round"
          filter="url(#glow-ai)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        {/* A crossbar */}
        <motion.line 
          x1={aBar[0].x} y1={aBar[0].y} x2={aBar[1].x} y2={aBar[1].y}
          stroke="#34d399" strokeWidth="4" strokeLinecap="round"
          filter="url(#glow-ai)"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          style={{ transformOrigin: `${aBar[0].x}px ${aBar[0].y}px` }}
        />
        
        {/* I stem */}
        <motion.line 
          x1={iStem[0].x} y1={iStem[0].y} x2={iStem[1].x} y2={iStem[1].y}
          stroke="url(#letter-grad)" strokeWidth="5" strokeLinecap="round"
          filter="url(#glow-ai)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        {/* I top cap */}
        <motion.line 
          x1={iTopCap[0].x} y1={iTopCap[0].y} x2={iTopCap[1].x} y2={iTopCap[1].y}
          stroke="#34d399" strokeWidth="3.5" strokeLinecap="round"
          filter="url(#glow-ai)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        />
        {/* I bottom cap */}
        <motion.line 
          x1={iBottomCap[0].x} y1={iBottomCap[0].y} x2={iBottomCap[1].x} y2={iBottomCap[1].y}
          stroke="#34d399" strokeWidth="3.5" strokeLinecap="round"
          filter="url(#glow-ai)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Energy tracer that flows through letters */}
        <motion.path
          d={`M ${tracePath}`}
          fill="none"
          stroke="url(#tracer-glow)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow-ai)"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ pathOffset: { duration: 4, repeat: Infinity, ease: 'linear' }, pathLength: { duration: 0.8 } }}
        />
        
        {/* Floating AI-related symbols */}
        {floatingLetters.map((item, i) => {
          const pos = iso(item.x, item.y, item.z);
          return (
            <motion.text
              key={i}
              x={pos.x}
              y={pos.y}
              fill="#34d399"
              fontSize={item.char === '⚡' ? '28' : '36'}
              fontFamily="monospace"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
              opacity="0.25"
              filter="url(#glow-ai)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, delay: item.delay }}
            >
              {item.char}
            </motion.text>
          );
        })}

        {/* Pulsing nodes at key positions (representing data flow) */}
        {[aLeft[1], aRight[1], iStem[1], iStem[0]].map((pos, idx) => (
          <motion.circle
            key={idx}
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="#34d399"
            filter="url(#glow-ai)"
            animate={{ r: [6, 14, 6], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
          />
        ))}

        {/* Additional emerald accents (no particles, just clean shapes) */}
        <motion.path
          d="M -190,-150 Q -100,-50 20,-20 T 190,10"
          stroke="#10d399"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
          strokeDasharray="8 8"
          animate={{ strokeDashoffset: [0, 50] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {/* Floating labels with AI terminology (emerald chips) - no particles */}
      {!prefersReducedMotion && (
        <>
          <motion.div 
            className="absolute top-12 left-12 font-mono text-xs text-[#34d399] border border-[#34d399]/50 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, 20] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
          >
            Neural Mesh
          </motion.div>
          <motion.div 
            className="absolute bottom-16 right-16 font-mono text-xs text-[#34d399] border border-[#34d399]/50 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
          >
            Deep Core
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-8 font-mono text-xs text-[#34d399] border border-[#34d399]/50 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1.1, 0.8] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.2 }}
          >
            Emergent AI
          </motion.div>
          <motion.div 
            className="absolute bottom-20 left-20 font-mono text-xs text-[#34d399] border border-[#34d399]/50 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full shadow-2xl"
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: [0, 1, 1, 0], rotate: [-5, 0, 0, 5] }}
            transition={{ duration: 5.5, repeat: Infinity, delay: 0.8 }}
          >
            Vector Mind
          </motion.div>
        </>
      )}
      
      {/* Very subtle emerald scanline effect (no dots) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#10d399]/10 to-transparent pointer-events-none" />
    </div>
  );
}

export default AnimatedTechVisual;