// components/PersonalInfo.js

import React from 'react';

const PersonalInfo = ({ name, bio, email, linkedin }) => {
  return (
    <div className="personal-info">
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Email: {email}</p>
      <p>LinkedIn: <a href={linkedin}>{linkedin}</a></p>
    </div>
  );
}

export default PersonalInfo;