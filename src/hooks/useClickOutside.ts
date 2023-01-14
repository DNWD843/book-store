import React, { useEffect } from 'react';

export const useClickOutside = (effect: (evt: any) => void, refs: Array<React.MutableRefObject<HTMLDivElement | HTMLButtonElement | null>>) => {
  useEffect(() => {
    const listener = (event: any) => {
      const res = refs.some((ref) => !ref.current || ref.current.contains(event.target));

      if (res) {
        return;
      }

      effect(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [effect, refs]);
};
