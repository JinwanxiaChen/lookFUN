import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useStore } from '@/stores/useStore';
import { cities } from '@/data/mockData';

export default function Navbar() {
  const navigate = useNavigate();
  const { selectedCityName, setSelectedCity } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId);
    setShowCityDropdown(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-30 h-14 flex items-center justify-between px-4 transition-all duration-200"
      style={{
        backgroundColor: scrolled ? 'rgba(245, 247, 244, 0.85)' : '#F5F7F4',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #E8EDE6' : '1px solid transparent',
      }}
    >
      {/* City Selector */}
      <div className="relative">
        <button
          onClick={() => setShowCityDropdown(!showCityDropdown)}
          className="flex items-center gap-1 text-ink-800 font-semibold text-base select-none"
        >
          <span>{selectedCityName}</span>
          <ChevronDown
            size={12}
            strokeWidth={1.5}
            className={`transition-transform duration-200 ${showCityDropdown ? 'rotate-180' : ''}`}
          />
        </button>

        {/* City Dropdown */}
        {showCityDropdown && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowCityDropdown(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-matcha-200 z-50 overflow-hidden"
            >
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCitySelect(city.id)}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    city.name === selectedCityName
                      ? 'bg-matcha-100 text-matcha-800 font-semibold'
                      : 'text-ink-700 hover:bg-matcha-50'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </div>

      {/* Search Icon */}
      <button
        onClick={() => navigate('/search')}
        className="w-10 h-10 flex items-center justify-center rounded-full active:scale-95 transition-transform"
      >
        <Search size={24} strokeWidth={1.5} className="text-ink-800" />
      </button>
    </motion.header>
  );
}
