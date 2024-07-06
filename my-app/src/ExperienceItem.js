// components/ExperienceItem.js

import React from 'react';

const ExperienceItem = ({ title, company, duration }) => {
  return (
    <div className="experience-item">
      <h3>{title}</h3>
      <p>{company} ({duration})</p>
    </div>
  );
}

export default ExperienceItem;