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
                <p className='lead container'>
                    Hi!
                    I'm Alex and I'm currently studying for my B.S. in Computer Science at Drexel University with an anticipated graduation in June 2024.
                    I have a passion for software and expressing myself creatively through code.
                    Whether it be a great web experience or a fun game, I hope that there is something that I can provide you through software development.
                </p>
            </div>
        </div>
    );
}