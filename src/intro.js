// React
import React from 'react';

// Media
import background from './media/background.mp4';


export function IntroBackground() {
    return (
        <video autoplay autoPlay muted loop playsinline className='w-100 vh-100 d-block object-fit-cover position-absolute z-index-1 mask-image-topdown-opacity'>
            <source src={background} type='video/mp4' />
        </video>
    );
}

export function IntroText() {
    return (
        <div className='container'>
            <div className='d-flex vh-100 text-center align-items-center'>
                <div className='w-100'>
                    <h1 className='display-1'>Alex Ho</h1>
                    <h2 className='display-6'>Portfolio</h2>
                </div>
            </div>
        </div>
    );
}
