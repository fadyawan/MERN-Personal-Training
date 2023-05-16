import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage.js/ErrorPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ReactPage from './Pages/ReactPage/ReactPage';
import ExpressPage from './Pages/ExpressPage/ExpressPage';
import NodePage from './Pages/NodePage/NodePage';
import MongoPage from './Pages/MongoPage/MongoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <AboutPage />
  },
  {
    path: 'react',
    element: <ReactPage />
  },
  {
    path: 'express',
    element: <ExpressPage />
  },
  {
    path: 'node',
    element: <NodePage />
  },
  {
    path: 'mongo',
    element: <MongoPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);