// React
import React from 'react';

// React Router
import {
  Routes,
  Route,
} from 'react-router-dom';

// Custom Components
import Index from './main/Index';
import VeryBerry from './personal/VeryBerry';


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="/veryberry" element={<VeryBerry />}></Route>
            </Routes>
        </>
    );
}