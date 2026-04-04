import { useState, useEffect, useCallback } from 'react';

export const SCROLL_TO_MOVEMENT_RATIO = 0.8;
export const TOTAL_WORLD_WIDTH = 8000;
export const START_X = 80;

export function useGameWorld() {
  const [characterX, setCharacterX] = useState(START_X);
  const [isRunning, setIsRunning] = useState(false);
  const [isFacingRight, setIsFacingRight] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateCharacter = useCallback((delta: number) => {
    setCharacterX((prev) => {
      const nextX = prev + delta * SCROLL_TO_MOVEMENT_RATIO;
      const boundedX = Math.max(START_X, Math.min(nextX, TOTAL_WORLD_WIDTH - START_X));
      
      // Update running and facing states
      if (Math.abs(delta) > 0.5) {
        setIsRunning(true);
        setIsFacingRight(delta > 0);
      } else {
        setIsRunning(false);
      }

      setProgress(boundedX / TOTAL_WORLD_WIDTH);
      return boundedX;
    });
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frameId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      updateCharacter(delta);

      // Reset running state after a short delay if no more scroll
      clearTimeout(frameId);
      frameId = window.setTimeout(() => setIsRunning(false), 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Keyboard Support
    const handleKeyDown = (e: KeyboardEvent) => {
      const speed = 20;
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 's' || e.key === 'ArrowDown') {
        updateCharacter(speed);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'w' || e.key === 'ArrowUp') {
        updateCharacter(-speed);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(frameId);
    };
  }, [updateCharacter]);

  return { characterX, isRunning, isFacingRight, progress };
}
