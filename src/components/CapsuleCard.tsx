import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import type { Capsule } from '@/data/mockData';
import TagPill from './TagPill';

interface CapsuleCardProps {
  capsule: Capsule;
  index?: number;
}

export default function CapsuleCard({ capsule, index = 0 }: CapsuleCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(`/capsule/${capsule.id}`)}
      className="bg-matcha-100 border border-matcha-200 rounded-2xl overflow-hidden cursor-pointer"
    >
      <img
        src={capsule.image}
        alt={capsule.name}
        className="w-full h-[100px] object-cover rounded-t-2xl"
        loading="lazy"
      />
      <div className="p-3">
        <h4 className="font-serif font-semibold text-base text-ink-800">
          {capsule.name}
        </h4>
        <div className="flex items-center gap-1 mt-1 flex-wrap">
          {capsule.tags.map(tag => (
            <TagPill key={tag} label={tag} small />
          ))}
        </div>
        <div className="flex items-center gap-1 mt-2 text-ink-400">
          <Users size={12} strokeWidth={1.5} />
          <span className="text-xs">{capsule.memberCount}人</span>
        </div>
      </div>
    </motion.div>
  );
}
