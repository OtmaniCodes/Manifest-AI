import './ScrollProgressBar.css';
import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  var showProgressBar = progress > 18;

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
    <div className="ScrollProgressBar" style={{display: showProgressBar ? 'unset' : 'none'}}>
      <div className="ScrollProgressBar__progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}