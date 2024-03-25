// React
import React from 'react';
import * as ReactDOM from 'react-dom';

// React Router
import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './index.css';

// Custom Components
import Index from './main/Index';
import VeryBerry from './personal/VeryBerry';
import CaloTrak from './personal/CaloTrak';
import BlubbyDodge from './personal/BlubbyDodge';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index />
//   },
//   {
//     path: "/veryberry",
//     element: <VeryBerry />
//   },
// ]);

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/veryberry",
    element: <VeryBerry />,
  },
  {
    path: "/calotrak",
    element: <CaloTrak />,
  },
  {
    path: "/blubbydodge",
    element: <BlubbyDodge />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
