// React
import React from 'react';

// Components
import { IntroBackground, IntroText } from './intro';
import { AboutText } from './about';
import { ExperienceText } from './experience';
// import { SkillsText } from './skills';


export function Index() {
    return (
        <>
            <IntroBackground />
            <IntroText />
            <AboutText />
            <ExperienceText />
            {/* <SkillsText /> */}
        </>
    );
}

export function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}
