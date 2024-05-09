import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './style.css';
const Preloader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    // Animation using GSAP
    const tl = gsap.timeline();
    tl.to(preloaderRef.current, { opacity: 1, duration: 0 }); // Show preloader
    tl.to(preloaderRef.current, { opacity: 0, duration: 1, delay: 2 }); // Fade out preloader after 2 seconds
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      {/* Your preloader content here */}
      <div className="spinner"></div>
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Preloader;
