import { useEffect } from 'react';

const useScrollToTop = (smoothly = false) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: smoothly ? "smooth" : "instant",
    });
  }, []);

};

export default useScrollToTop;
