// components/EducationItem.js

import React from 'react';

const EducationItem = ({ institution, degree, years }) => {
  return (
    <div className="education-item">
      <h3>{institution}</h3>
      <p>{degree} ({years})</p>
    </div>
  );
}

export default EducationItem;