import React from 'react';

const Greeter = props => {
    const { phrase, name } = props;

    return (
        <div>
            <div>{props.phrase} {props.name}!</div>
        </div>
    )
}

export default Greeter;