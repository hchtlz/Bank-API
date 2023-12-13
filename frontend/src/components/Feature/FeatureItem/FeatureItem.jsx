import React from 'react';
import './FeatureItem.css'; 

const FeatureItem = ({ iconSrc, title, content }) => {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p className="feature-item-content">{content}</p>
    </div>
  );
};

export default FeatureItem;