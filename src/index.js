// React
import React from 'react';
import * as ReactDOM from 'react-dom';

// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// React Components
import {
  Index,
  About,
} from './main.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/about",
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
