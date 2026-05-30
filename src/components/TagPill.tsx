import { motion } from 'framer-motion';

interface TagPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  small?: boolean;
}

export default function TagPill({ label, active = false, onClick, small = false }: TagPillProps) {
  return (
    <motion.span
      whileTap={onClick ? { scale: 0.95 } : undefined}
      onClick={onClick}
      className={`inline-block rounded-lg font-serif transition-colors select-none ${
        small ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-0.5'
      } ${
        active
          ? 'bg-matcha-500 text-white'
          : 'bg-matcha-100 text-matcha-800'
      } ${onClick ? 'cursor-pointer' : ''}`}
    >
      {label}
    </motion.span>
  );
}
