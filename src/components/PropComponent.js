import React, {useEffect, useState} from 'react';

const PropComponent = () => {
    const [state, setState] = useState({
        timerID: null,
        counter: 0
    });
    useEffect(() => {
        const timer = setInterval(() => {
            setState({...state,
                timerID: timer,
                counter: 1
            });
            console.log(state);
        }, 1000)
    },[]);
    return (
        <div>
            <h2>Component</h2>
        </div>
    );
};

export default PropComponent;