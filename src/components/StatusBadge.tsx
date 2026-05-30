interface StatusBadgeProps {
  status: 'registered' | 'confirmed' | 'to-review' | 'completed';
}

const statusConfig = {
  registered: { label: '已報名', bg: 'bg-matcha-100', text: 'text-matcha-800' },
  confirmed: { label: '已確認', bg: 'bg-matcha-500', text: 'text-white' },
  'to-review': { label: '待評價', bg: 'bg-star', text: 'text-white' },
  completed: { label: '已完成', bg: 'bg-ink-400', text: 'text-white' },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-[10px] font-serif font-medium ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
}
