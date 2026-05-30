import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Clock, MapPin, Share2, Heart } from 'lucide-react';
import { useState } from 'react';
import { activities } from '@/data/mockData';
import TagPill from '@/components/TagPill';

export default function ActivityDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh]">
        <p className="text-ink-400">活動不存在</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-matcha-500 text-sm">返回</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-matcha-50">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-[240px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Top actions */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
          >
            <ChevronLeft size={20} strokeWidth={1.5} className="text-ink-800" />
          </motion.button>
          <div className="flex gap-2">
            <motion.button whileTap={{ scale: 0.9 }} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
              <Share2 size={18} strokeWidth={1.5} className="text-ink-800" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setLiked(!liked)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
            >
              <Heart size={18} strokeWidth={1.5} className={liked ? 'text-red-500 fill-red-500' : 'text-ink-800'} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 px-4 -mt-4 relative z-10"
      >
        <div className="bg-white rounded-t-2xl p-5 min-h-[300px]">
          <h1 className="font-serif font-bold text-xl text-ink-800">{activity.title}</h1>

          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="text-sm text-matcha-500 font-medium">{activity.capsuleName}</span>
            {activity.tags.map(tag => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3">
              <Clock size={18} strokeWidth={1.5} className="text-matcha-500" />
              <div>
                <p className="text-xs text-ink-400">時間</p>
                <p className="text-sm text-ink-800">{activity.date} {activity.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} strokeWidth={1.5} className="text-matcha-500" />
              <div>
                <p className="text-xs text-ink-400">地點</p>
                <p className="text-sm text-ink-800">{activity.location}</p>
              </div>
            </div>
          </div>

          {/* Map preview */}
          <div className="mt-4 rounded-xl overflow-hidden">
            <img src="/map-preview.jpg" alt="地圖" className="w-full h-[120px] object-cover" />
          </div>

          {/* Description */}
          <div className="mt-5">
            <h3 className="font-serif font-semibold text-base text-ink-800 mb-2">活動介紹</h3>
            <p className="text-sm text-ink-500 leading-relaxed">
              歡迎參加{activity.title}！這是一個由「{activity.capsuleName}」舉辦的精彩活動。
              我們將在{activity.location}相聚，一起度過美好的時光。
              無論你是初次嘗試還是經驗豐富，都歡迎加入我們！
            </p>
          </div>

          {/* Participants */}
          <div className="mt-5">
            <h3 className="font-serif font-semibold text-base text-ink-800 mb-2">報名情況</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-500">
                已報名 {activity.participants}/{activity.maxParticipants}人
              </span>
              <div className="flex -space-x-2">
                {['/avatar-1.jpg', '/avatar-2.jpg', '/avatar-3.jpg'].map((a, i) => (
                  <img key={i} src={a} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                ))}
                {activity.participants > 3 && (
                  <span className="w-7 h-7 rounded-full border-2 border-white bg-matcha-100 flex items-center justify-center text-[10px] text-matcha-800">
                    +{activity.participants - 3}
                  </span>
                )}
              </div>
            </div>
            {/* Progress bar */}
            <div className="mt-2 w-full h-1.5 bg-matcha-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-matcha-500 rounded-full transition-all"
                style={{ width: `${(activity.participants / activity.maxParticipants) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-matcha-100 z-20">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold text-matcha-800">{activity.price}</div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(`/register/${activity.id}`)}
            className="flex-1 h-12 bg-matcha-800 text-white rounded-full font-semibold text-base shadow-[0_2px_8px_rgba(74,107,70,0.25)] active:shadow-none transition-shadow"
          >
            立即報名
          </motion.button>
        </div>
      </div>
    </div>
  );
}
