import React, { useState } from 'react';
import './BackToTop.css';


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    
    <div>
      {isVisible && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
