import React from 'react';

const Hero = ({name, isLikeOrNot, place}) => {
    function changeMyMind() 
    {
        isLikeOrNot(place);
    }
    return (
        <div>
            <h1>{name}</h1>
            <p>is {isLikeOrNot ? '' : 'not'} liking React</p>
            <button onClick={changeMyMind}>I changed my mind</button>
        </div>
    );
};

export default Hero;<h1>Mahdi</h1>