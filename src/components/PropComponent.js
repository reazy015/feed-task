import React, {useEffect, useState} from 'react';

const PropComponent = () => {
    const [time, setTime] = React.useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);
    return (
        <div>
            <h2>{time}</h2>
        </div>
    );
};

export default PropComponent;