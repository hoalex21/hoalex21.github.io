// React
import React from 'react';


export default function ExperiencePoints(props) {
    if (props.points) {
        let elements = props.points.map(point => <li>{point}</li>);

        return (
            <ul>
                {elements}
            </ul>
        );
    }
}
