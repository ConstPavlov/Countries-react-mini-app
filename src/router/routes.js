import React from 'react';
import About from '../components/screens/about/About.jsx';
import Countries from '../components/screens/countries/Countries.jsx';
import Home from '../components/screens/home/Home.jsx';

console.log(Home);
export const pages = [
  { path: '/countries', element: <Countries /> },
  { path: '/about', element: <About /> },
  { path: '/home', element: <Home /> },
];
