// React
import React from 'react';
import * as ReactDOM from 'react-dom';

// React Router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

// Main Components
import Index from './main/Index';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
