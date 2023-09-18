// React
import React from 'react';

// Custom Components
import IntroBackground from '../intro/IntroBackground';
import Back from '../main/Back';
import Title from '../main/Title';


export default function VeryBerry() {
    return (
        <>
            <IntroBackground />
            <Back />
            <Title title="VERY BERRY" />
            <div className='container'>
                <div className='ratio ratio-16x9'>
                    <iframe src="https://i.simmer.io/@Xx_Bubbles_xX/very-berry" title='Very Berry'></iframe>
                </div>

                <div>
                    <b>Controls</b>
                    <p>W - move up</p>
                    <p>A - move left</p>
                    <p>S - move down</p>
                    <p>D - move right</p>
                    <p>spacebar - shoot</p>
                </div>
            </div>
        </>
    );
}
