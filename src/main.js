// React
import React from 'react';

// Media
import ah from './media/1655484593486.jpg';
import background from './media/background.mp4';


// export is required for other files to use these components
function IntroBackground() {
    return (
        <video autoPlay muted loop playsinline className='w-100 vh-100 d-block object-fit-cover position-absolute z-index-1 mask-image-topdown-opacity'>
            <source src={background} type='video/mp4' />
        </video>
    );
}

function IntroText() {
    return (
        <div className='container'>
            <div className='d-flex vh-100 text-center align-items-center'>
                <div className='w-100'>
                    <h1 className='display-2'>Alex Ho</h1>
                    <h2 className='display-6'>Portfolio</h2>
                </div>
            </div>
        </div>
    );
}

export function Index() {
    return (
        <>
            <IntroBackground />
            <IntroText />
        </>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>
            <img src={ah} alt='Alex Ho' />
        </div>
    );
}
