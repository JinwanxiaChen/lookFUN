import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '@/stores/useStore';
import { Compass, Search, Calendar, User } from 'lucide-react';

const tabs = [
  { key: 'explore', label: '探索', path: '/explore', Icon: Compass },
  { key: 'search', label: '搜索', path: '/search', Icon: Search },
  { key: 'my-activities', label: '我的活動', path: '/my-activities', Icon: Calendar },
  { key: 'profile', label: '個人中心', path: '/profile', Icon: User },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeTab, setActiveTab } = useStore();

  const handleTabClick = (tab: typeof tabs[0]) => {
    setActiveTab(tab.key);
    navigate(tab.path);
  };

  // Sync active tab with current route
  const currentPath = location.pathname;
  const matchedTab = tabs.find(t => currentPath.startsWith(t.path));
  const effectiveTab = matchedTab?.key || activeTab;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center">
      <div className="w-full max-w-[430px] bg-white border-t border-matcha-100 flex items-center justify-around h-14 pb-safe">
        {tabs.map((tab) => {
          const isActive = effectiveTab === tab.key;
          return (
            <motion.button
              key={tab.key}
              onClick={() => handleTabClick(tab)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="flex flex-col items-center justify-center gap-0.5 w-16 h-full select-none"
            >
              <tab.Icon
                size={24}
                strokeWidth={isActive ? 2 : 1.5}
                className={isActive ? 'text-matcha-800' : 'text-matcha-500'}
              />
              <span
                className={`text-[10px] tracking-[0.04em] ${
                  isActive
                    ? 'text-matcha-800 font-semibold'
                    : 'text-matcha-500'
                }`}
              >
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
