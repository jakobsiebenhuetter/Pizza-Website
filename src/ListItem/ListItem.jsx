import React from "react";

export default function ListItem({children, info}) {
    return(
        <div data-type={info}>
            <span>icon</span>
            <p>{children}</p>    
        </div>
    )
};