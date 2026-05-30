import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';

type ActivityStatus = 'upcoming' | 'completed' | 'review';

interface MyActivityItem {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  capsuleName: string;
  status: ActivityStatus;
  registrationCode: string;
}

const tabs = [
  { key: 'upcoming' as ActivityStatus, label: '即將開始' },
  { key: 'completed' as ActivityStatus, label: '已完成' },
  { key: 'review' as ActivityStatus, label: '待評價' },
];

const mockMyActivities: MyActivityItem[] = [
  {
    id: 'act-1',
    title: '週末山野徒步',
    image: 'activity-hiking.jpg',
    date: '週六',
    time: '08:00',
    location: '茂名市電白區',
    capsuleName: '山野行者',
    status: 'upcoming',
    registrationCode: 'LK-2024-0315',
  },
  {
    id: 'act-3',
    title: '樹下讀書分享會',
    image: 'activity-reading.jpg',
    date: '週六',
    time: '15:00',
    location: '茂名市圖書館後花園',
    capsuleName: '靜心閱讀',
    status: 'upcoming',
    registrationCode: 'LK-2024-0317',
  },
  {
    id: 'act-6',
    title: '戶外茶藝體驗',
    image: 'activity-tea.jpg',
    date: '上週六',
    time: '10:00',
    location: '茂名市人民公園',
    capsuleName: '茶道雅集',
    status: 'completed',
    registrationCode: 'LK-2024-0308',
  },
  {
    id: 'act-2',
    title: '親子草地野餐會',
    image: 'activity-picnic.jpg',
    date: '上週日',
    time: '14:00',
    location: '茂名市森林公園',
    capsuleName: '親子樂園',
    status: 'review',
    registrationCode: 'LK-2024-0309',
  },
];

export default function MyActivities() {
  const navigate = useNavigate();
  const [activeStatus, setActiveStatus] = useState<ActivityStatus>('upcoming');
  const [selectedActivity, setSelectedActivity] = useState<MyActivityItem | null>(null);

  const filteredActivities = mockMyActivities.filter(a => a.status === activeStatus);

  const getStatusBadge = (status: ActivityStatus) => {
    switch (status) {
      case 'upcoming': return <StatusBadge status="confirmed" />;
      case 'completed': return <StatusBadge status="completed" />;
      case 'review': return <StatusBadge status="to-review" />;
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-matcha-50">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="font-serif font-bold text-xl text-ink-800">我的活動</h1>
      </div>

      {/* Tabs */}
      <div className="flex px-4 gap-4 border-b border-matcha-100">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveStatus(tab.key)}
            className={`pb-2 text-sm font-medium transition-colors relative ${
              activeStatus === tab.key ? 'text-matcha-800' : 'text-ink-400'
            }`}
          >
            {tab.label}
            {activeStatus === tab.key && (
              <motion.div
                layoutId="myActivitiesTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-matcha-800 rounded-full"
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Activity List */}
      <div className="flex-1 px-4 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStatus}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            {filteredActivities.length > 0 ? (
              filteredActivities.map(activity => (
                <motion.button
                  key={activity.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (activity.status === 'upcoming') {
                      setSelectedActivity(activity);
                    } else {
                      navigate(`/activity/${activity.id}`);
                    }
                  }}
                  className="flex gap-3 bg-white rounded-xl p-3 shadow-[0_1px_6px_rgba(0,0,0,0.04)] text-left w-full"
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif font-semibold text-sm text-ink-800 line-clamp-1">{activity.title}</h4>
                      {getStatusBadge(activity.status)}
                    </div>
                    <p className="text-xs text-ink-400 mt-1">{activity.date} {activity.time}</p>
                    <p className="text-xs text-ink-400">{activity.location}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-xs text-matcha-500">{activity.capsuleName}</span>
                      {activity.status === 'upcoming' && (
                        <span className="flex items-center text-xs text-matcha-500">
                          查看憑證
                          <ChevronRight size={12} strokeWidth={1.5} />
                        </span>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                {/* Sprout decoration */}
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" className="text-matcha-300 mb-3">
                  <path d="M32 56V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M32 32C32 32 24 28 24 20C24 12 32 8 32 8C32 8 40 12 40 20C40 28 32 32 32 32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32 40C32 40 20 36 16 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32 36C32 36 44 32 48 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm text-ink-400">暫無{tabs.find(t => t.key === activeStatus)?.label}的活動</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* QR Credential Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
            onClick={() => setSelectedActivity(null)}
          >
            <div className="absolute inset-0 bg-black/40" />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
              onClick={e => e.stopPropagation()}
              className="relative bg-white rounded-2xl p-6 w-full max-w-[320px]"
            >
              {/* QR Code */}
              <div className="flex flex-col items-center">
                <div className="w-[200px] h-[200px] border-2 border-dashed border-matcha-500 rounded-2xl flex items-center justify-center">
                  {/* QR pattern SVG */}
                  <svg width="160" height="160" viewBox="0 0 160 160" className="text-matcha-500">
                    <rect x="10" y="10" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="15" y="15" width="30" height="30" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="20" y="20" width="20" height="20" rx="1" fill="currentColor" />

                    <rect x="110" y="10" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="115" y="15" width="30" height="30" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="120" y="20" width="20" height="20" rx="1" fill="currentColor" />

                    <rect x="10" y="110" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <rect x="15" y="115" width="30" height="30" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="20" y="120" width="20" height="20" rx="1" fill="currentColor" />

                    {/* Center pattern */}
                    <rect x="60" y="60" width="40" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="80" cy="80" r="10" fill="currentColor" opacity="0.5" />

                    {/* Random dots */}
                    <rect x="60" y="15" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="80" y="25" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="55" y="115" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="115" y="60" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="125" y="80" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="115" y="115" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="60" y="125" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                    <rect x="80" y="115" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" />
                  </svg>
                </div>
                <h4 className="font-serif font-semibold text-base text-ink-800 mt-4">{selectedActivity.title}</h4>
                <p className="text-xs text-ink-400 mt-1">報名編號：{selectedActivity.registrationCode}</p>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="mt-5 w-full h-11 bg-matcha-100 text-matcha-800 rounded-full font-medium text-sm active:scale-[0.97] transition-transform"
              >
                關閉
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
