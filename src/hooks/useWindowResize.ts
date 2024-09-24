import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState([0, 0]);

  useEffect(() => {
    setWidthHeight([window.innerHeight, window.innerWidth]);
  }, []);

  useEventListener(window, 'resize', () => {
    setWidthHeight([window.innerHeight, window.innerWidth]);
  });

  return widthHeight;
};
