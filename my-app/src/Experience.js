// components/Experience.js

import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <ExperienceItem
        title="Barista"
        company="Starbucks"
        duration="2020 - 2024"
      />
    </div>
  );
}

export default Experience;