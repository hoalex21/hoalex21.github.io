// React
import React from 'react';

// Media
import ah from '../media/1655484593486.jpg';


export default function AboutBody() {
    return (
        <div className='container'>
            <h1 className='display-5'>About Me</h1>
            <div className='text-center'>
                <img src={ah} alt='Alex Ho' className='rounded-circle'></img>
                <br /> <br />
                <p className='lead'>Computer Science B.S. undergraduate at Drexel University. </p>
            </div>
        </div>
    );
}