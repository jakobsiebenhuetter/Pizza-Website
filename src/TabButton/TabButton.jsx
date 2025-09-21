import React from "react";
import "./TabButton.css";

export default function TabButton (props) {
    let title = null

    function checkProps() {
        if(props.title) {
            title = props.title;
        } else {
            title = 'Nur ein Button';
        };
    };

    checkProps();
    return(
        <div className="tab-button" onClick={props.onSelect}>
            <span>{title}</span>
            <span>{props.title || 'Tab'}</span>
        </div>
    )
}