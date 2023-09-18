import React from "react";

export default function ExperienceTools(props) {
    if (props.tools) {
        let elements = props.tools.map(tool => <li>{tool}</li>);

        return (
            <>
                <b>Tools Used</b>
                <ul>
                    {elements}
                </ul>
            </>
        );
    }
}