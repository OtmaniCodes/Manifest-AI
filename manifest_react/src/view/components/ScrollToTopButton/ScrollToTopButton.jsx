import './ScrollToTopButton.css'
// import { BsArrowUp } from 'react-icons/bs';
import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      {/* <BsArrowUp /> */}
      <i class="bi bi-arrow-up-short"></i>
    </button>
  );
}
export default ScrollToTopButton;