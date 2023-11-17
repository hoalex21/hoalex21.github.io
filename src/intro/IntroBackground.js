// React
import React from 'react';

// Media
import background from '../media/background.mp4';
import backgroundPoster from '../media/background-poster.jpg';


export default function IntroBackground() {
    return (
        <video 
            muted 
            loop 
            autoPlay 
            playsInline 
            className='w-100 vh-100 d-block object-fit-cover position-absolute z-index-1 mask-image-topdown-opacity'
            poster={backgroundPoster}
        >
            <source src={background} type='video/mp4' />
        </video>
    );
}
