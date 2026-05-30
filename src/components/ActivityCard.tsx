import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import type { Activity } from '@/data/mockData';
import TagPill from './TagPill';

interface ActivityCardProps {
  activity: Activity;
  variant?: 'waterfall' | 'featured';
  index?: number;
}

export default function ActivityCard({ activity, variant = 'waterfall', index = 0 }: ActivityCardProps) {
  const navigate = useNavigate();

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        whileTap={{ scale: 0.97 }}
        onClick={() => navigate(`/activity/${activity.id}`)}
        className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer snap-start"
      >
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-[160px] object-cover rounded-t-xl"
          loading="lazy"
        />
        <div className="p-3">
          <h4 className="font-serif font-semibold text-base text-ink-800 line-clamp-2 leading-snug">
            {activity.title}
          </h4>
          <div className="flex items-center gap-3 mt-2 text-ink-400">
            <span className="flex items-center gap-1 text-xs">
              <Clock size={12} strokeWidth={1.5} />
              {activity.date} {activity.time}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-ink-400">
            <MapPin size={12} strokeWidth={1.5} />
            <span className="text-xs">{activity.location}</span>
          </div>
          <div className="mt-2">
            <TagPill label={activity.capsuleName} />
          </div>
        </div>
      </motion.div>
    );
  }

  // Waterfall variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(`/activity/${activity.id}`)}
      className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden cursor-pointer"
    >
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-[200px] object-cover rounded-t-xl"
        loading="lazy"
      />
      <div className="p-3.5">
        <h4 className="font-serif font-semibold text-base text-ink-800 line-clamp-2 leading-snug">
          {activity.title}
        </h4>
        <div className="flex items-center justify-between mt-2 text-ink-400">
          <span className="flex items-center gap-1 text-xs">
            <Clock size={12} strokeWidth={1.5} />
            {activity.date} {activity.time}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <MapPin size={12} strokeWidth={1.5} />
            {activity.location}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className="text-xs text-matcha-500 font-medium">{activity.capsuleName}</span>
          {activity.tags.map(tag => (
            <TagPill key={tag} label={tag} small />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2.5">
          <span className="text-xs text-ink-400">
            已報名 {activity.participants}/{activity.maxParticipants}人
          </span>
          <span className="text-sm font-semibold text-matcha-800">{activity.price}</span>
        </div>
      </div>
    </motion.div>
  );
}
