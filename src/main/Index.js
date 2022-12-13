// React
import React from 'react';

// Components
import IntroBackground from '../intro/IntroBackground';
import IntroBody from '../intro/IntroBody';
import AboutBody from '../about/AboutBody';
import ExperienceBody from '../experience/ExperienceBody';
// import SkillsBody from '../skills/SkillsBody';


export default function Index() {
    return (
        <>
            <IntroBackground />
            <IntroBody />
            <AboutBody />
            <ExperienceBody />
            {/* <SkillsBody /> */}
        </>
    );
}
