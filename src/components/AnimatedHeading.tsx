import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface AnimatedHeadingProps {
  fixedText: string;
  rotatingWords: string[];
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: "text-3xl lg:text-4xl",
  md: "text-4xl lg:text-5xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
  xl: "text-5xl md:text-7xl"
};

export function AnimatedHeading({ 
  fixedText, 
  rotatingWords = [], 
  className = "",
  size = 'lg'
}: AnimatedHeadingProps) {
  const { language } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Reset animation only when language changes
  useEffect(() => {
    setCurrentWordIndex(0);
    setDisplayedText("");
    setIsTyping(true);
  }, [language]);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    
    if (!currentWord) return;
    
    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait then start erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Finished erasing, move to next word
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }
    }
  }, [displayedText, isTyping, currentWordIndex, rotatingWords]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Measure the widest word to calculate min-width for preventing layout shifts
  useEffect(() => {
    const measureWidth = () => {
      const el = measureRef.current;
      if (!el || !rotatingWords || rotatingWords.length === 0) return;

      // Render every word (each with its trailing cursor) at once, then read all
      // widths in a single pass: one layout instead of a forced reflow per word.
      el.textContent = '';
      const wrappers = rotatingWords.map((word) => {
        const wrapper = document.createElement('span');
        wrapper.className = 'inline-block whitespace-nowrap';
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word;
        const cursorSpan = document.createElement('span');
        cursorSpan.className = 'inline-block ml-1';
        cursorSpan.style.fontSize = '1em';
        cursorSpan.style.lineHeight = '0.1';
        cursorSpan.textContent = '_';
        wrapper.appendChild(wordSpan);
        wrapper.appendChild(cursorSpan);
        el.appendChild(wrapper);
        return wrapper;
      });

      const totalWidth = Math.max(...wrappers.map((w) => w.offsetWidth));

      el.textContent = '';
      setMinWidth(totalWidth);
    };

    // Measure after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(measureWidth, 100);

    // Re-measure on resize, debounced so we don't thrash layout during drag-resize
    let resizeTimeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeoutId);
      resizeTimeoutId = setTimeout(measureWidth, 150);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(resizeTimeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [rotatingWords, size]);

  const sizeClass = sizeClasses[size];

  // If no rotating words, just show fixed text (after all hooks, per rules-of-hooks)
  if (rotatingWords.length === 0) {
    return (
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={`${sizeClass} font-bold mb-4 lg:mb-6 leading-[1.1] lg:leading-[1.2] text-center ${className}`}
      >
        {fixedText}
      </motion.h1>
    );
  }

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className={`${sizeClass} font-bold mb-4 lg:mb-6 leading-[1.1] lg:leading-[1.2] flex flex-col lg:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-4 text-center ${className}`}
    >
      <span className="lg:whitespace-nowrap">{fixedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-primary bg-clip-text text-transparent lg:whitespace-nowrap leading-[1.1] lg:leading-[1.2] text-left"
        style={{
          minWidth: minWidth ? `${minWidth}px` : undefined,
          display: 'inline-block'
        }}
      >
        {displayedText}
        <span 
          className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} 
          style={{ 
            fontSize: '1em', 
            lineHeight: '0.1', 
            color: 'transparent', 
            background: 'linear-gradient(135deg, #452BE9, #4569E7)', 
            backgroundClip: 'text', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}
        >
          _
        </span>
      </motion.span>
      {/* Hidden span for measuring longest word */}
      <span
        ref={measureRef}
        className={`${sizeClass} font-bold bg-gradient-primary bg-clip-text text-transparent absolute opacity-0 pointer-events-none whitespace-nowrap -z-10 leading-[1.1] lg:leading-[1.2]`}
        aria-hidden="true"
      />
    </motion.h1>
  );
}

