// components/Education.js

import React from 'react';
import EducationItem from './EducationItem';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <EducationItem
        institution="University of South Florida"
        degree="Bachelor of Science in Business Analytics"
        years="2020 - 2024"
      />
    </div>
  );
}

export default Education;