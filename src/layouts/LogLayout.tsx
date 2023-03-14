import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router';

const LogLayout = () => {
  return (
    <>
      <div id="app">
        <Outlet />
      </div>
    </>

  );
};

export default LogLayout;
