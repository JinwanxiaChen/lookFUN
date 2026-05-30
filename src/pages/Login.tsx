import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendCode = () => {
    if (phone.length >= 8) {
      setSending(true);
      setTimeout(() => setSending(false), 30000);
    }
  };

  const handleLogin = () => {
    navigate('/explore');
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-matcha-50 px-6 pt-4">
      {/* Back */}
      <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-start active:scale-95 transition-transform">
        <ChevronLeft size={24} strokeWidth={1.5} className="text-ink-800" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8"
      >
        <h1 className="font-serif font-bold text-2xl text-ink-800 mb-2">歡迎回來</h1>
        <p className="font-serif text-sm text-ink-400 mb-8">登入你的帳號，繼續探索</p>

        {/* Phone */}
        <div className="mb-4">
          <label className="block font-serif text-sm text-ink-700 mb-2">手機號碼</label>
          <div className="flex gap-2">
            <span className="h-12 flex items-center text-sm text-ink-500 border border-matcha-200 rounded-lg px-3 bg-white">
              +86
            </span>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="請輸入手機號碼"
              className="flex-1 h-12 px-4 border border-matcha-200 rounded-lg text-sm bg-white placeholder:text-ink-300 focus:outline-none focus:border-matcha-500 focus:ring-2 focus:ring-matcha-500/15 transition-all"
            />
          </div>
        </div>

        {/* Code */}
        <div className="mb-6">
          <label className="block font-serif text-sm text-ink-700 mb-2">驗證碼</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="請輸入驗證碼"
              className="flex-1 h-12 px-4 border border-matcha-200 rounded-lg text-sm bg-white placeholder:text-ink-300 focus:outline-none focus:border-matcha-500 focus:ring-2 focus:ring-matcha-500/15 transition-all"
            />
            <button
              onClick={handleSendCode}
              disabled={sending || phone.length < 8}
              className="h-12 px-4 bg-matcha-100 text-matcha-800 rounded-lg text-sm font-medium disabled:opacity-50 active:scale-95 transition-transform whitespace-nowrap"
            >
              {sending ? '30s後重試' : '獲取驗證碼'}
            </button>
          </div>
        </div>

        {/* Login button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleLogin}
          className="w-full h-12 bg-matcha-800 text-white rounded-full font-semibold text-base shadow-[0_2px_8px_rgba(74,107,70,0.25)] active:scale-[0.97] active:shadow-none transition-all"
        >
          登入
        </motion.button>

        <p className="text-center text-xs text-ink-400 mt-6">
          登入即表示你同意我們的服務條款和隱私政策
        </p>
      </motion.div>
    </div>
  );
}
