import React, { useState, useEffect } from 'react';

export default function ResponsiveCompo({ mobileChild, desktopChild }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (mobileChild || null) : (desktopChild || null);
}
