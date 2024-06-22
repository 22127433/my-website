import React from 'react';
import { Outlet } from 'react-router-dom';

const Interest: React.FC = () => {
  return (
    <div>
      <h2>Interests</h2>
      <Outlet />
    </div>
  );
};

export default Interest;
