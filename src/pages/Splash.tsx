import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/city');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[100dvh] px-6"
      style={{
        background: 'linear-gradient(180deg, #F5F7F4 0%, #7A9B76 100%)',
      }}
    >
      {/* Tree Silhouette SVG */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="w-full max-w-[320px]"
      >
        <svg viewBox="0 0 430 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          {/* Layer 1 - tallest tree */}
          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{ transformOrigin: 'bottom' }}
            d="M80 400 L85 320 Q70 300 60 280 Q75 285 90 270 Q70 250 55 230 Q80 240 95 220 Q75 190 70 160 Q90 180 100 150 Q95 120 100 90 Q105 120 110 150 Q120 180 135 160 Q130 190 115 220 Q135 240 145 230 Q130 250 120 270 Q140 285 150 280 Q135 300 130 320 L135 400 Z"
            fill="#7A9B76"
            fillOpacity="0.9"
          />
          {/* Layer 2 - medium tree left */}
          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{ transformOrigin: 'bottom' }}
            d="M160 400 L165 340 Q150 325 140 310 Q160 315 170 300 Q155 280 145 265 Q165 275 175 255 Q160 230 158 210 Q175 225 180 200 Q178 175 180 155 Q183 175 185 200 Q195 225 205 210 Q200 230 190 255 Q210 275 215 265 Q205 280 198 300 Q215 315 220 310 Q210 325 205 340 L210 400 Z"
            fill="#6A8B66"
            fillOpacity="0.85"
          />
          {/* Layer 3 - tallest tree center-right */}
          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{ transformOrigin: 'bottom' }}
            d="M230 400 L235 310 Q215 290 200 270 Q225 280 240 255 Q220 225 210 200 Q235 215 245 185 Q240 150 242 120 Q245 90 248 60 Q252 90 255 120 Q260 150 258 185 Q275 215 290 200 Q275 225 265 255 Q290 280 300 270 Q285 290 275 310 L280 400 Z"
            fill="#5A7B56"
            fillOpacity="0.9"
          />
          {/* Layer 4 - small tree right */}
          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{ transformOrigin: 'bottom' }}
            d="M310 400 L313 355 Q302 345 295 335 Q310 340 316 328 Q305 315 300 302 Q314 310 318 295 Q310 280 308 268 Q318 278 322 262 Q320 248 322 235 Q324 248 326 262 Q334 278 340 268 Q334 280 332 295 Q344 310 346 302 Q338 315 334 328 Q348 340 350 335 Q340 345 337 355 L340 400 Z"
            fill="#7A9B76"
            fillOpacity="0.75"
          />
        </svg>
      </motion.div>

      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="text-center mt-6"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          {/* Leaf icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5F7F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5 0 3-.3 4.3-1" />
            <path d="M12 2c3 3 6 8 6 13" />
            <path d="M12 22V12" />
            <path d="M18 5c2 2 3.5 5 3.5 8.5" />
          </svg>
          <h1 className="font-serif font-bold text-2xl text-white tracking-tight">
            lookFUN
          </h1>
        </div>
        <p className="font-serif text-sm text-white/80 tracking-wider">
          在自然中，重新連結
        </p>
      </motion.div>
    </div>
  );
}
