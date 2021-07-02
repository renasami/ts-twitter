import React, { FC } from 'react';
import './style.css';

type Props = {
    content: string;
    href: string ;
    func: Function ;
}


const Button:  React.FC<Props> = (props) => {
    return (
        <a href={props.href} className="button" onClick={props.func}>{props.content}</a>
    )
}

export default Button;