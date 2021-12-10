import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>lgo</p>
          <ul style={{ display: 'flex' }}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
