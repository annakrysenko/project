import AppBar from 'components/AppBar/AppBar'
import Hero from 'components/Hero/Hero';
import React from 'react'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <AppBar/>
    <Hero/>
    <Outlet/>
    </>
  )
}

export default Layout