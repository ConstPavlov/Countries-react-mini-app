import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pages } from '../router/routes.js';

const AppRouter = () => {
  return (
    <Routes>
      {pages.map((page) => (
        <Route path={page.path} element={page.element} key={page.path} />
      ))}
      <Route path="/*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default AppRouter;
