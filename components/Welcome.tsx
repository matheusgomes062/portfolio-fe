import Image from "next/image";
import Hello from "./Hello";
import Button from './Button';
import EmojiAnimation from './EmojiAnimation';
import { useState } from 'react';

export default function Welcome() {
  const [emojis, setEmojis] = useState<{ id: number; x: number; y: number; endX: number; endY: number }[]>([]);

  const handleProfileClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.random() * 2 * Math.PI;
    const distance = 100;
    const endX = centerX + Math.cos(angle) * distance;
    const endY = centerY + Math.sin(angle) * distance;

    const newEmoji = {
      id: Date.now(),
      x: centerX,
      y: centerY,
      endX,
      endY,
    };

    setEmojis(prev => [...prev, newEmoji]);
    setTimeout(() => {
      setEmojis(prev => prev.filter(e => e.id !== newEmoji.id));
    }, 1000);
  };

  return (
    <section>
      <div className="flex md:flex-row flex-col-reverse gap-5">
        <div className="flex-row mr-[2rem]">
          <Hello/>
          <h1 className='font-bold text-5xl max-w-5xl mb-3'>I&apos;m Matheus Gomes
          </h1>
          <h3 className='text-xl text-gray-600 dark:text-gray-300 mb-6'>I may not be a rocket scientist 🚀,<br/>
          but I can launch your website into orbit 🪐!</h3>
        </div>
        
        <div
          className="relative rounded-xl"
          style={{ width: 150, height: 150 }}
        >
          <Image
            className="rounded-xl md:self-center hidden md:block hover:-translate-y-1 transition-all cursor-pointer"
            src="/images/profile-pic.png"
            alt="Profile picture of Matheus Gomes"
            height={150} // Desired size with correct aspect ratio
            width={150} // Desired size with correct aspect ratio
            onClick={handleProfileClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleProfileClick(e as any);
              }
            }}
            aria-label="Click to see a fun animation"
          />
        </div>
      </div>
      <button
        className="flex items-center justify-center px-10 py-3 font-medium bg-blue-500 dark:bg-blue-500 text-gray-100 rounded-lg shadow-blue-900 shadow-lg active:shadow-none active:scale-95 hover:bg-blue-800 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
        onClick={() => {
          window.open("/MatheusGomesCV.pdf", "_blank")
        }}
      >
        My CV
      </button>
      <EmojiAnimation emojis={emojis} />
    </section>
  );
}