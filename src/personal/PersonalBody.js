// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

export default function PersonalBody() {
    return (
        <div className='container'>
            <h1 className='display-5'>Personal Projects</h1>
            <ul>
                <li><a href="https://github.com/Theguyat2012/calorie-tracker" target="_blank" rel="noreferrer">Calorie Tracker</a> (December 2022)</li>
                <li><Link to="veryberry">Very Berry</Link> (June 2020)</li>
            </ul>
        </div>
    );
}
