import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Users, Heart } from 'lucide-react';
import { useState } from 'react';
import { capsules, activities, reviews } from '@/data/mockData';
import TagPill from '@/components/TagPill';
import ActivityCard from '@/components/ActivityCard';
import ReviewCard from '@/components/ReviewCard';

export default function CapsuleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [joined, setJoined] = useState(false);

  const capsule = capsules.find(c => c.id === id);
  const capsuleActivities = activities.filter(a => a.capsuleId === id);
  const capsuleReviews = reviews.filter(r => r.capsuleId === id);

  if (!capsule) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh]">
        <p className="text-ink-400">空間艙不存在</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-matcha-500 text-sm">返回</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-matcha-50 pb-4">
      {/* Cover */}
      <div className="relative">
        <img src={capsule.image} alt={capsule.name} className="w-full h-[180px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
        >
          <ChevronLeft size={20} strokeWidth={1.5} className="text-ink-800" />
        </motion.button>
      </div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-4 -mt-10 relative z-10 bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-serif font-bold text-xl text-ink-800">{capsule.name}</h1>
            <div className="flex items-center gap-1 mt-1.5">
              <Users size={14} strokeWidth={1.5} className="text-ink-400" />
              <span className="text-sm text-ink-400">{capsule.memberCount} 位成員</span>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setJoined(!joined)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              joined
                ? 'bg-matcha-100 text-matcha-800'
                : 'bg-matcha-800 text-white'
            }`}
          >
            <Heart size={14} strokeWidth={1.5} className={joined ? 'fill-matcha-800' : ''} />
            {joined ? '已加入' : '加入'}
          </motion.button>
        </div>
        <div className="flex gap-2 mt-3">
          {capsule.tags.map(tag => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-500 leading-relaxed">{capsule.description}</p>
      </motion.div>

      {/* Recent Activities */}
      <div className="mt-5 px-4">
        <h3 className="font-serif font-semibold text-base text-ink-800 mb-3">近期活動</h3>
        {capsuleActivities.length > 0 ? (
          <div className="flex flex-col gap-3">
            {capsuleActivities.slice(0, 3).map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} variant="waterfall" index={i} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-ink-400 text-center py-6">暫無活動</p>
        )}
      </div>

      {/* Reviews */}
      <div className="mt-6 px-4">
        <h3 className="font-serif font-semibold text-base text-ink-800 mb-3">成員評價</h3>
        {capsuleReviews.length > 0 ? (
          <div className="flex flex-col gap-3">
            {capsuleReviews.slice(0, 4).map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-ink-400 text-center py-6">暫無評價</p>
        )}
      </div>
    </div>
  );
}
