import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, X } from 'lucide-react';
import { activities, capsules } from '@/data/mockData';
import type { Activity } from '@/data/mockData';
import ActivityCard from '@/components/ActivityCard';

const hotTags = ['戶外', '親子', '閱讀', '兒童', '家庭', '幼兒'];

export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Activity[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const filtered = activities.filter(
        a =>
          a.title.includes(searchQuery) ||
          a.capsuleName.includes(searchQuery) ||
          a.tags.some(t => t.includes(searchQuery)) ||
          a.location.includes(searchQuery)
      );
      setResults(filtered);
      setSearched(true);
    } else {
      setResults([]);
      setSearched(false);
    }
  };

  const handleTagClick = (tag: string) => {
    setQuery(tag);
    handleSearch(tag);
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-matcha-50">
      {/* Search Header */}
      <div className="sticky top-0 z-30 bg-matcha-50 px-4 pt-3 pb-3">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center active:scale-95 transition-transform">
            <ChevronLeft size={22} strokeWidth={1.5} className="text-ink-800" />
          </button>
          <div className="flex-1 relative">
            <Search size={16} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              type="text"
              value={query}
              onChange={e => handleSearch(e.target.value)}
              placeholder="搜索活動、空間艙、標籤..."
              autoFocus
              className="w-full h-10 pl-9 pr-8 bg-white border border-matcha-200 rounded-full text-sm placeholder:text-ink-300 focus:outline-none focus:border-matcha-500 transition-colors"
            />
            {query && (
              <button onClick={() => { setQuery(''); setResults([]); setSearched(false); }} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X size={14} strokeWidth={1.5} className="text-ink-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 pb-6">
        {!searched ? (
          <>
            {/* Hot Tags */}
            <div className="mt-4">
              <h3 className="font-serif font-semibold text-base text-ink-800 mb-3">熱門標籤</h3>
              <div className="flex flex-wrap gap-2">
                {hotTags.map(tag => (
                  <motion.button
                    key={tag}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleTagClick(tag)}
                    className="px-4 py-2 bg-matcha-100 text-matcha-800 rounded-full text-sm font-medium active:bg-matcha-500 active:text-white transition-colors"
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Suggested Capsules */}
            <div className="mt-8">
              <h3 className="font-serif font-semibold text-base text-ink-800 mb-3">推薦空間艙</h3>
              <div className="flex flex-col gap-3">
                {capsules.slice(0, 4).map((capsule, i) => (
                  <motion.button
                    key={capsule.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/capsule/${capsule.id}`)}
                    className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-[0_1px_6px_rgba(0,0,0,0.04)] text-left"
                  >
                    <img src={capsule.image} alt={capsule.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-semibold text-sm text-ink-800 truncate">{capsule.name}</h4>
                      <p className="text-xs text-ink-400 mt-0.5">{capsule.tags.join(' · ')} · {capsule.memberCount}人</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Search Results */}
            {results.length > 0 ? (
              <div className="flex flex-col gap-4 mt-2">
                {results.map((activity, i) => (
                  <ActivityCard key={activity.id} activity={activity} variant="waterfall" index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20"
              >
                {/* Sprout SVG */}
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-matcha-300 mb-4">
                  <path d="M32 56V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M32 32C32 32 24 28 24 20C24 12 32 8 32 8C32 8 40 12 40 20C40 28 32 32 32 32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32 40C32 40 20 36 16 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32 36C32 36 44 32 48 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-serif text-ink-400 text-sm">沒有找到相關活動</p>
                <p className="text-ink-300 text-xs mt-1">試試其他關鍵詞或標籤</p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
