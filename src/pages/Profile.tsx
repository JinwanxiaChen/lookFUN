import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, ChevronRight, LogOut, Heart, Bell, Shield } from 'lucide-react';
import { useStore } from '@/stores/useStore';
import { currentUser } from '@/data/mockData';

const menuItems = [
  { icon: Heart, label: '我的收藏', path: '' },
  { icon: Bell, label: '通知設定', path: '' },
  { icon: Shield, label: '隱私設定', path: '' },
  { icon: Settings, label: '帳號設定', path: '' },
];

export default function Profile() {
  const navigate = useNavigate();
  const { setActiveTab } = useStore();

  const handleLogout = () => {
    setActiveTab('explore');
    navigate('/splash');
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-matcha-50">
      {/* User Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-4 mt-4 bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center gap-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-matcha-200"
          />
          <div>
            <h2 className="font-serif font-bold text-lg text-ink-800">{currentUser.name}</h2>
            <p className="text-sm text-ink-400 mt-0.5">{currentUser.phone}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex mt-4 pt-4 border-t border-matcha-100">
          <div className="flex-1 text-center">
            <p className="font-semibold text-lg text-ink-800">3</p>
            <p className="text-xs text-ink-400 mt-0.5">參加活動</p>
          </div>
          <div className="w-px bg-matcha-100" />
          <div className="flex-1 text-center">
            <p className="font-semibold text-lg text-ink-800">2</p>
            <p className="text-xs text-ink-400 mt-0.5">加入空間艙</p>
          </div>
          <div className="w-px bg-matcha-100" />
          <div className="flex-1 text-center">
            <p className="font-semibold text-lg text-ink-800">1</p>
            <p className="text-xs text-ink-400 mt-0.5">待評價</p>
          </div>
        </div>
      </motion.div>

      {/* Menu */}
      <div className="mt-4 px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
          {menuItems.map((item, i) => (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center w-full px-4 py-3.5 text-left ${
                i < menuItems.length - 1 ? 'border-b border-matcha-50' : ''
              }`}
            >
              <item.icon size={20} strokeWidth={1.5} className="text-matcha-500 flex-shrink-0" />
              <span className="flex-1 ml-3 text-sm text-ink-700">{item.label}</span>
              <ChevronRight size={16} strokeWidth={1.5} className="text-ink-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="mt-4 px-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3.5 bg-white rounded-2xl text-left shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
        >
          <LogOut size={20} strokeWidth={1.5} className="text-error flex-shrink-0" />
          <span className="flex-1 ml-3 text-sm text-error">退出登入</span>
        </motion.button>
      </div>

      {/* Version */}
      <div className="mt-6 text-center">
        <p className="text-xs text-ink-300">lookFUN v1.0.0</p>
      </div>
    </div>
  );
}
