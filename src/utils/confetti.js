
import confetti from 'canvas-confetti';

/**
 * Fires a luxury golden confetti cannon burst.
 */
export const triggerGoldConfetti = () => {
  // Center blast
  confetti({
    particleCount: 75,
    spread: 70,
    origin: { y: 0.65 },
    colors: ['#ffd700', '#ffde59', '#f5b300', '#ffffff', '#e5a50a'],
    disableForReducedMotion: true,
  });

  // Delayed side burst
  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.6 },
      colors: ['#ffd700', '#ffde59', '#f5b300', '#ffffff']
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.6 },
      colors: ['#ffd700', '#ffde59', '#f5b300', '#ffffff']
    });
  }, 180);
};

export default triggerGoldConfetti;
