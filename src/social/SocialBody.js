// React
import React from 'react';

// Meida
import github from '../media/github.png';
import linkedin from '../media/linkedin.png';
import expo from '../media/expo.png';


export default function SocialBody() {
    return (
        <div className='container'>
            <h1 className='display-5'>Social Media</h1>
            <div className='row row-cols-lg-5 justify-content-md-center'>
                <div className='col m-4'>
                    <a href='https://github.com/hoalex21' target='_blank' rel='noreferrer'>
                        <img src={github} alt='GitHub Logo' className='w-100' />
                    </a>
                </div>
                <div className='col m-4'>
                    <a href='https://www.linkedin.com/in/alex-h-52923113a/' target='_blank' rel='noreferrer'>
                        <img src={linkedin} alt='Linkedin Logo' className='w-100' />
                    </a>
                </div>
                <div className='col m-4'>
                    <a href='https://expo.dev/@aleton' target='_blank' rel='noreferrer'>
                        <img src={expo} alt='Expo Logo' className='w-100' />
                    </a>
                </div>
            </div>
        </div>
    );
}
