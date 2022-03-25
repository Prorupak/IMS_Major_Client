import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to="/dash/form">Form</Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
