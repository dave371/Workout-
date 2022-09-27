export const overlay = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  animation: {
    type: 'tween',
    duration: 0.5,
  },
  exit: {
    opacity: 0,
    translate: {
      duration: 0.2,
      type: 'tween',
    },
  },
};

// animation for the panel
export const modal = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: 0,
  },
  animation: {
    type: 'tween',
    duration: 0.5,
  },
  exit: {
    x: '100vw',
    translate: {
      duration: 0.2,
      type: 'tween',
    },
  },
};
