import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <>
      <div id="app">
        <img className='mt-3 ml-5' src="/assets/icons/logo.svg" alt="logo" />
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
