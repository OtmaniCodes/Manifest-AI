import './ScrollProgressBar.css';
import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const newProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="ScrollProgressBar">
      <div className="ScrollProgressBar__progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}