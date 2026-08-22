import { useCallback, useRef, useState } from 'react';

// Replaces react-is-visible, whose class component calls the now-removed
// ReactDOM.findDOMNode -- this uses a callback ref + IntersectionObserver instead.
export default function useIsVisible(threshold = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  const setNode = useCallback(node => {
    if (observerRef.current) observerRef.current.disconnect();
    if (node) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current.disconnect();
        }
      }, { threshold });
      observerRef.current.observe(node);
    }
  }, [threshold]);

  return [setNode, isVisible];
}
