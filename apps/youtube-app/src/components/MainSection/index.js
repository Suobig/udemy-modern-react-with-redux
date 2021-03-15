import React from 'react';
import './style.css';

const MainSection = ({ children }) => {
  return <section id="main" className="main">
    { children }
  </section>
}

export default MainSection;