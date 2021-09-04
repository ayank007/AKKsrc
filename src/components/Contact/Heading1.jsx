import React from 'react';

export const Heading1 = (props) => {
    return(
        <div className="Heading1 mt-4 border-b border-gray-300 mb-4">
            <h1 className="font-bold text-xl mb-2">{props.heading}</h1>
        </div>
    );
}