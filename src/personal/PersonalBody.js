// React
import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Personal Component
import PersonalCard from './PersonalCard';

// Media
import blubbydodge from '../media/blubbydodgeicon.png';
import calotrak from '../media/calotrak1024x500.png';
import veryberry from '../media/VeryBerry.png';
import getItOnGooglePlay from '../media/google@2x.png';
import itchio from '../media/itchio-textless-black.svg';


export default function PersonalBody() {
    return (
        <div className='container mb-3'>
            <h1 className='display-5'>Personal Projects</h1>

            <div className='row row-cols-1 row-cols-md-3'>
                <div className='col mb-4'>
                    <PersonalCard 
                        headerImage={blubbydodge}
                        headerImagePadding={true}
                        linkTo='blubbydodge'
                        linkText='Blubby Dodge'
                        description="
                        Your reflexes and quick thinking will be put to the ultimate test!
                        Challenge yourself to beat your high score with each run.
                        The objective is simple yet exhilarating: dodge and weave through a barrage of pillars raining down from above.
                        As Blubby dashes along, players will immerse themselves in a colorful, cartoon-inspired setting with a touch of whimsy.
                        "
                        googlePlayLink="https://play.google.com/store/apps/details?id=com.aleton100100.blubbydodge"
                        itchioLink="https://aleton.itch.io"
                        date="August 31, 2023"
                    />
                </div>

                <div className='col mb-4'>
                    <PersonalCard 
                        headerImage={calotrak}
                        linkTo='calotrak'
                        linkText='CaloTrak'
                        description="
                        A simple, easy-to-use lightweight calorie tracking app.
                        Calories in, calories out. No macro or micronutrient information is provided.
                        Useful for quickly logging your meals and snacks without needing the details.
                        Calories do not reset after each day. No registration is required.
                        The data is saved to your local device.
                        "
                        googlePlayLink="https://play.google.com/store/apps/details?id=com.aleton.CalorieTracker"
                        date="May 30, 2023"
                    />
                </div>

                <div className='col mb-4'>
                    <PersonalCard 
                        headerImage={veryberry}
                        linkTo='veryberry'
                        linkText='Very Berry'
                        description="
                        A class project involving a group of 4.
                        This is a space-shooter type game where you operate a strawberry vessel (using the W,A,S, and D keys to move and spacebar to shoot projectiles) and survive an onslaught of endless blueberry drones.
                        The boss - evil emoji guy - will appear if you survive long enough.
                        "
                        date="June 2020"
                    />
                </div>
            </div>
        </div>
    );
}
