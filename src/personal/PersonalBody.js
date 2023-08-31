// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

export default function PersonalBody() {
    return (
        <div className='container'>
            <h1 className='display-5'>Personal Projects</h1>
            <ul>
                <li>
                    <Link to="blubbydodge">Blubby Dodge</Link> (August 2023)
                    <ul>
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=com.aleton100100.blubbydodge" target="_blank">Google Play Store</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="calotrak">CaloTrak</Link> (May 2023)
                    <ul>
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=com.aleton.CalorieTracker" target="_blank">Google Play Store</a>
                        </li>
                    </ul>
                </li>
                <li><Link to="veryberry">Very Berry</Link> (June 2020)</li>
            </ul>
        </div>
    );
}
