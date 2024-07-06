// components/SkillItem.js

import React from 'react';

const SkillItem = ({ name, proficiency }) => {
  return (
    <div className="skill-item">
      <p>{name} - {proficiency}</p>
    </div>
  );
}

export default SkillItem;