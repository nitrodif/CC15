// components/Skills.js

import React from 'react';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <SkillItem name="Video Games" proficiency="Extremley Advanced" />
      <SkillItem name="Coffee Making" proficiency="Intermediate" />
      <SkillItem name="Fitness" proficiency="Intermediate" />
    </div>
  );
}

export default Skills