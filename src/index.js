// React
import React from 'react';
import * as ReactDOM from 'react-dom';

// React Router
import {
  // createBrowserRouter,
  // RouterProvider,
  HashRouter,
} from 'react-router-dom';

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './index.css';

// Custom Components
import App from './App';


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
  <HashRouter>
    <App />
  </HashRouter>
  </React.StrictMode>
);
