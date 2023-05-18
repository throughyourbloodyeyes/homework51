import React from "react";

interface BallProps {
    number: number;
}


const Ball = ({number}: BallProps) => {
    return (
        <div className ="ball">
        {number}
        </div>
    );
}

export default Ball;