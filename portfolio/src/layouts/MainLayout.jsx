import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import BackgroundSnippet from '../components/BackgroundSnippet';

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <BackgroundSnippet />
    </>
  )
}

export default MainLayout