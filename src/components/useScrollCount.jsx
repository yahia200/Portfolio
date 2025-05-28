import { useEffect, useRef, useState } from 'react';

export function useScrollCounter(targetCount, onThresholdReached) {
  const lastTouch = useRef(null);
  const scrollCountsRef = useRef({ up: 0, down: 0, left: 0, right: 0 });
  const isCooldown = useRef(false); // prevent multiple triggers in timeout

  useEffect(() => {
    const trigger = (dir) => {
      if (isCooldown.current) return;

      isCooldown.current = true;
      onThresholdReached(dir);
      scrollCountsRef.current = { up: 0, down: 0, left: 0, right: 0 };

      setTimeout(() => {
        isCooldown.current = false;
        scrollCountsRef.current = { up: 0, down: 0, left: 0, right: 0 };
      }, 500);
    };

    const updateCount = (dir) => {
      const counts = scrollCountsRef.current;
      counts[dir] += 1;
      if (counts[dir] >= targetCount) {
        trigger(dir);
      }
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        updateCount(e.deltaY > 0 ? 'down' : 'up');
      } else {
        updateCount(e.deltaX > 0 ? 'right' : 'left');
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      lastTouch.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (!lastTouch.current) return;

      const deltaX = touch.clientX - lastTouch.current.x;
      const deltaY = touch.clientY - lastTouch.current.y;

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        updateCount(deltaY < 0 ? 'down' : 'up');
      } else {
        updateCount(deltaX < 0 ? 'right' : 'left');
      }

      lastTouch.current = { x: touch.clientX, y: touch.clientY };
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [targetCount, onThresholdReached]);
}
