import React from 'react';
import './ScrollUpTop.scss';

const ScrollUpBtn = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scrollButton" onClick={scrollTop}>
      <div className="topButtonBox">⌃</div>
    </button>
  );
};

export default ScrollUpBtn;
