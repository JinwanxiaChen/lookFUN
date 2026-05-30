import { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { activities, capsules } from '@/data/mockData';
import ActivityCard from '@/components/ActivityCard';
import CapsuleCard from '@/components/CapsuleCard';

const featuredActivities = activities.filter(a => a.isFeatured);

export default function Explore() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(5);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Infinite scroll
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && visibleCount < activities.length) {
      setVisibleCount(prev => Math.min(prev + 5, activities.length));
    }
  }, [visibleCount]);

  useEffect(() => {
    if (loadMoreRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        rootMargin: '200px',
      });
      observerRef.current.observe(loadMoreRef.current);
    }
    return () => observerRef.current?.disconnect();
  }, [handleIntersection]);

  const visibleActivities = activities.filter(a => !a.isFeatured).slice(0, visibleCount);

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar overscroll-contain">
      {/* Featured Activities Carousel */}
      <section className="mt-1">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="font-serif font-semibold text-lg text-ink-800">
            本周精選活動
          </h2>
          <button
            onClick={() => navigate('/search')}
            className="flex items-center gap-0.5 text-matcha-500 text-sm active:scale-95 transition-transform"
          >
            <span>查看全部</span>
            <ChevronRight size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div
          className="flex gap-3 overflow-x-auto no-scrollbar px-4 pb-2 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {featuredActivities.map((activity, i) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              variant="featured"
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Nearby Capsules Grid */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif font-semibold text-lg text-ink-800">
            附近的空間膠囊
          </h2>
          <button
            onClick={() => navigate('/search')}
            className="flex items-center gap-0.5 text-matcha-500 text-sm active:scale-95 transition-transform"
          >
            <span>查看全部</span>
            <ChevronRight size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {capsules.slice(0, 6).map((capsule, i) => (
            <CapsuleCard key={capsule.id} capsule={capsule} index={i} />
          ))}
        </div>
      </section>

      {/* Activity Waterfall */}
      <section className="mt-6 px-4 pb-6">
        <h2 className="font-serif font-semibold text-lg text-ink-800 mb-3">
          發現更多活動
        </h2>

        <div className="flex flex-col gap-4">
          {visibleActivities.map((activity, i) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              variant="waterfall"
              index={i}
            />
          ))}
        </div>

        {/* Load more trigger / Skeleton */}
        <div ref={loadMoreRef} className="mt-4">
          {visibleCount < activities.filter(a => !a.isFeatured).length && (
            <div className="flex flex-col gap-4">
              {[0, 1, 2].map(i => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <div className="w-full h-[200px] shimmer-skeleton" />
                  <div className="p-3.5">
                    <div className="w-3/4 h-4 shimmer-skeleton rounded" />
                    <div className="flex gap-2 mt-2">
                      <div className="w-20 h-3 shimmer-skeleton rounded" />
                      <div className="w-24 h-3 shimmer-skeleton rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
