import React, { FC } from 'react';
import './style.css';

type Props = {
    content?: string;
    href?: string ;
}


const Button:  React.FC<Props> = (props) => {

    return (
        <a href={props.href} className="button">{props.content}</a>
    )
}

export default Button;