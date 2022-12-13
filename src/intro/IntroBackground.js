// React
import React from 'react';

// Media
import background from '../media/background.mp4';


export default function IntroBackground() {
    return (
        <video autoPlay muted loop playsInline className='w-100 vh-100 d-block object-fit-cover position-absolute z-index-1 mask-image-topdown-opacity'>
            <source src={background} type='video/mp4' />
        </video>
    );
}
