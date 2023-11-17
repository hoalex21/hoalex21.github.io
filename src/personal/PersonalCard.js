// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

import getItOnGooglePlay from '../media/google@2x.png';
import itchio from '../media/itchio-textless-black.svg';


export default function PersonalCard(props) {
    return (
        <div className='card h-100'>
            {
                props.headerImagePadding ?
                <div className='card-header d-flex justify-content-center'>
                    <div className='w-50 d-flex justify-content-center'>
                        <img className='w-100' src={props.headerImage} />
                    </div>
                </div>
                :
                <div className='card-header p-0'>
                    <img className='w-100 rounded-top' src={props.headerImage} />
                </div>
            }
            
            <div className='card-body'>
                <b><Link to={props.linkTo}>{props.linkText}</Link></b>
                <p></p>
                <p>{props.description}</p>
            </div>

            <div className='row justify-content-center mb-3'>

                {
                    props.googlePlayLink ? 
                    <div className='col-6'>
                        <a href={props.googlePlayLink} target="_blank">
                            <img className='w-100' src={getItOnGooglePlay} />
                        </a>
                    </div>
                    :
                    <></>
                }

                <p></p>

                {
                    props.itchioLink ? 
                    <div className='col-5'>
                        <a href={props.itchioLink} target="_blank">
                            <img className='w-100' src={itchio} />
                        </a>
                    </div>
                    :
                    <></>
                }
            </div>

            <div className='card-footer'>
                {props.date}
            </div>
        </div>
    );
}