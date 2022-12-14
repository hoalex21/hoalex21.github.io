// React
import React from "react";


export default function Title(props) {
    return (
        <div className="container text-center">
            <h1 className="display-3 text-white">{props.title}</h1>
        </div>
    );
}
