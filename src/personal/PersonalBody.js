// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Media
import blubbydodge from '../media/blubbydodgeicon.png';
import caltrak from '../media/caltrak1024x500.png';
import getItOnGooglePlay from '../media/google@2x.png';
import itchio from '../media/itchio-textless-black.svg';


export default function PersonalBody() {
    return (
        <div className='container mb-3'>
            <h1 className='display-5'>Personal Projects</h1>

            <div className='row row-cols-1 row-cols-md-3'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-center'>
                            <div className='w-50 d-flex justify-content-center'>
                                <img className='w-100' src={blubbydodge} />
                            </div>
                        </div>
                        <div className='card-body'>
                            <b><Link to="blubbydodge">Blubby Dodge</Link></b>
                            <p></p>
                            <p>
                                Your reflexes and quick thinking will be put to the ultimate test!
                                Challenge yourself to beat your high score with each run.
                                The objective is simple yet exhilarating: dodge and weave through a barrage of pillars raining down from above.
                                As Blubby dashes along, players will immerse themselves in a colorful, cartoon-inspired setting with a touch of whimsy.
                            </p>
                        </div>

                        <div className='row justify-content-center mb-3'>
                            <div className='col-6'>
                                <a href="https://play.google.com/store/apps/details?id=com.aleton100100.blubbydodge" target="_blank">
                                    <img className='w-100' src={getItOnGooglePlay} />
                                </a>
                            </div>

                            <p></p>

                            <div className='col-5'>
                                <a href="https://aleton.itch.io" target="_blank">
                                    <img className='w-100' src={itchio} />
                                </a>
                            </div>
                        </div>

                        <div className='card-footer'>
                            August 31, 2023
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-center'>
                            <div className='d-flex justify-content-center'>
                                <img className='w-100' src={caltrak} />
                            </div>
                        </div>
                        <div className='card-body'>
                            <b><Link to="calotrak">CaloTrak</Link></b>
                            <p></p>
                            <p>
                                A simple, easy-to-use lightweight calorie tracking app.
                                Calories in, calories out. No macro or micronutrient information is provided.
                                Useful for quickly logging your meals and snacks without needing the details.
                                Calories do not reset after each day. No registration is required.
                                The data is saved to your local device.
                            </p>
                        </div>

                        <div className='row justify-content-center mb-3'>
                            <div className='col-6'>
                                <a href="https://play.google.com/store/apps/details?id=com.aleton.CalorieTracker" target="_blank">
                                    <img className='w-100' src={getItOnGooglePlay} />
                                </a>
                            </div>
                        </div>

                        <div className='card-footer'>
                            May 2023
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <b><Link to="veryberry">Very Berry</Link></b>
                            <p></p>
                            <p>
                                A class project involving a group of 4.
                                This space-shooter type game where you operate a strawberry vessel (using the W,A,S, and D keys to move and spacebar to shoot projectiles) and survive an onslaught of endless blueberry drones.
                                The boss - evil emoji guy - will appear if you survive long enough.
                            </p>
                        </div>
                        <div className='card-footer'>
                            June 2020
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
