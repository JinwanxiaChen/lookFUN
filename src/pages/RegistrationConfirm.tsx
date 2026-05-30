import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { activities } from '@/data/mockData';

export default function RegistrationConfirm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh]">
        <p className="text-ink-400">活動不存在</p>
        <button onClick={() => navigate(-1)} className="mt-4 text-matcha-500 text-sm">返回</button>
      </div>
    );
  }

  const handleConfirm = () => {
    if (agreed) {
      setConfirmed(true);
    }
  };

  if (confirmed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-matcha-50 px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <CheckCircle size={64} strokeWidth={1.5} className="text-matcha-500" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif font-bold text-xl text-ink-800 mt-4"
        >
          報名成功！
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-ink-400 mt-2 text-center"
        >
          你已成功報名「{activity.title}」
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/my-activities')}
          className="mt-8 w-full max-w-[280px] h-12 bg-matcha-800 text-white rounded-full font-semibold text-base shadow-[0_2px_8px_rgba(74,107,70,0.25)]"
        >
          查看我的活動
        </motion.button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-matcha-50">
      {/* Header */}
      <div className="flex items-center px-4 h-14">
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center">
          <ChevronLeft size={24} strokeWidth={1.5} className="text-ink-800" />
        </motion.button>
        <h1 className="absolute left-0 right-0 text-center font-serif font-semibold text-base text-ink-800 pointer-events-none">
          確認報名
        </h1>
      </div>

      <div className="flex-1 px-4 pb-6">
        {/* Activity summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
        >
          <div className="flex gap-3">
            <img src={activity.image} alt={activity.title} className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <h3 className="font-serif font-semibold text-sm text-ink-800">{activity.title}</h3>
              <p className="text-xs text-ink-400 mt-1">{activity.date} {activity.time}</p>
              <p className="text-xs text-ink-400">{activity.location}</p>
            </div>
          </div>
        </motion.div>

        {/* Risk acknowledgment */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
        >
          <h3 className="font-serif font-semibold text-sm text-ink-800 mb-2">活動須知</h3>
          <ul className="text-xs text-ink-500 space-y-1.5 leading-relaxed">
            <li>1. 請確認你的身體狀況適合參加此活動</li>
            <li>2. 戶外活動存在天氣等不可抗力因素，主辦方保留調整權利</li>
            <li>3. 請準時到達集合地點，遲到超過15分鐘視為放棄</li>
            <li>4. 取消報名需提前24小時通知</li>
            <li>5. 活動中請聽從工作人員指引，注意安全</li>
          </ul>
        </motion.div>

        {/* Agreement checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex items-start gap-2"
        >
          <button
            onClick={() => setAgreed(!agreed)}
            className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
              agreed
                ? 'bg-matcha-500 border-matcha-500'
                : 'border-matcha-200'
            }`}
          >
            {agreed && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <p className="text-xs text-ink-500 leading-relaxed">
            我已仔細閱讀並理解上述活動須知，自願參加此活動，願意承擔相應風險
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="sticky bottom-0 p-4 bg-white border-t border-matcha-100 z-20">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleConfirm}
          disabled={!agreed}
          className={`w-full h-12 rounded-full font-semibold text-base transition-colors ${
            agreed
              ? 'bg-matcha-800 text-white shadow-[0_2px_8px_rgba(74,107,70,0.25)]'
              : 'bg-matcha-100 text-matcha-300 cursor-not-allowed'
          }`}
        >
          確認報名 · {activity.price}
        </motion.button>
      </div>
    </div>
  );
}
