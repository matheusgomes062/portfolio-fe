import { motion } from 'framer-motion';

interface EmojiAnimationProps {
  emojis: Array<{
    id: number;
    x: number;
    y: number;
    endX: number;
    endY: number;
  }>;
}

export default function EmojiAnimation({ emojis }: EmojiAnimationProps) {
  return (
    <>
      {emojis.map(emoji => (
        <motion.div
          key={emoji.id}
          className="absolute pointer-events-none text-4xl"
          initial={{ x: emoji.x, y: emoji.y, scale: 1, opacity: 1 }}
          animate={{ x: emoji.endX, y: emoji.endY, scale: 1.5, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ left: 0, top: 0 }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}