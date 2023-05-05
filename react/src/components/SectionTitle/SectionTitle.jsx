import React from 'react';
import './SectionTitle.css';

function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h4 className="title text-md-start text-center">{title}</h4>
      <div className="title-underline"></div>
    </div>
  );
}

export default SectionTitle;

