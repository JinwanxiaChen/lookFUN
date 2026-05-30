import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cities } from '@/data/mockData';
import { useStore } from '@/stores/useStore';

export default function CitySelection() {
  const navigate = useNavigate();
  const { setSelectedCity } = useStore();

  const handleSelectCity = (cityId: string) => {
    setSelectedCity(cityId);
    navigate('/explore');
  };

  return (
    <div
      className="flex flex-col items-center min-h-[100dvh] px-6 pt-16"
      style={{
        background: 'linear-gradient(180deg, #F5F7F4 0%, #7A9B76 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="font-serif font-bold text-2xl text-ink-800 mb-2">選擇你的城市</h1>
        <p className="font-serif text-sm text-ink-500">開啟你的自然探索之旅</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-[360px]">
        {cities.map((city, i) => (
          <motion.button
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelectCity(city.id)}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-0 right-0 text-center font-serif font-semibold text-white text-lg">
              {city.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
