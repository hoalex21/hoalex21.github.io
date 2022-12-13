// React
import React from 'react';

// Experience Components
import ExperiencePoints from './ExperiencePoints';


export default function ExperienceCard(props) {
    return (
        <div className='col'>
            <div className='card h-100'>
                <a href={props.link} target='_blank' rel='noreferrer'>
                    <img className='card-img-top border-bottom h-rem-10 object-fit-contain p-3' src={props.src} alt={props.company}></img>
                </a>
                <div className='card-body'>
                    <h5 className='card-title'>{props.company}</h5>
                    <ExperiencePoints
                        points={props.points}
                    />
                </div>
                <div className='card-footer'>{props.footer}</div>
            </div>
        </div>
    );
}