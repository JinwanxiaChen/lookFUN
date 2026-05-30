import { Star, CheckCircle } from 'lucide-react';
import type { Review } from '@/data/mockData';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.04)] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={review.avatar}
            alt={review.userName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-serif font-semibold text-sm text-ink-800">
            {review.userName}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              strokeWidth={1.5}
              className={i < review.rating ? 'text-star fill-star' : 'text-ink-300'}
            />
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-ink-800 line-clamp-3 leading-relaxed">
        {review.text}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[10px] text-ink-400">{review.timestamp}</span>
        {review.verified && (
          <span className="flex items-center gap-0.5 bg-matcha-800 text-white text-[10px] px-2 py-0.5 rounded-full">
            <CheckCircle size={10} strokeWidth={1.5} />
            已參加
          </span>
        )}
      </div>
    </div>
  );
}
