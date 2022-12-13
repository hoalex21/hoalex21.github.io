// React
import React from 'react';

// Media
// Programming Languages
import java from '../media/java.png';
import python from '../media/python.png';
import javascript from '../media/javascript.png';
import c from '../media/c.png';
import ruby from '../media/ruby.png';
import racket from '../media/racket.png';
import html from '../media/html.png';
import css from '../media/css.png';
// Frameworks
import flask from '../media/flask.png';
import react from '../media/react.png';


export default function SkillsBody() {
    return (
        <div className='container'>
            <h1 className='display-5'>My Skills</h1>
            {/* Programming Languages: Python Java JavaScript SQL C# HTML CSS */}
            <div className='text-center'>
                <h1 className='display-6'>Programming Languages</h1>
                <div className='row row-cols-4 mb-4'>
                    <div className='col'>
                        <img src={java} alt='C Programming Language' className='w-100' />
                    </div>
                    <div className='col'>
                        <img src={python} alt='C Programming Language' className='w-100' />
                    </div>
                    <div className='col'>
                        <img src={javascript} alt='C Programming Language' className='w-100' />
                    </div>
                    <div className='col'>
                        <img src={c} alt='C Programming Language' className='w-100' />
                    </div>
                </div>
                <div className='row row-cols-4 mb-4'>
                    <div className='col'>
                        <img src={ruby} alt='C Programming Language' className='w-100' />
                    </div>
                    <div className='col'>
                        <img src={racket} alt='C Programming Language' className='w-100' />
                    </div>
                    <div className='col'>
                        <img src={html} alt='C Programming Language' className='w-100' />
                    </div>
                    <div className='col'>
                        <img src={css} alt='C Programming Language' className='w-100' />
                    </div>
                </div>
                <h1 className='display-6'>FrameWorks</h1>
                <div className='row row-cols-4'>
                    <div className='col'>
                        <img src={flask} alt='C Programming Language' className='w-100' />
                    </div>
                    <div className='col'>
                        <img src={react} alt='C Programming Language' className='w-100' />
                    </div>
                </div>
            </div>
            {/* FrameWorks: Flask, React */}
        </div>
    );
}