import React from "react";

function NavList(props)
{
    return(
        <li><a href={props.ruta}>{props.text}</a></li>
    );
}

export {NavList};