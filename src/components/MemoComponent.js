import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MemoComponent = ({url, step, interval}) => {
    const [totalFeedLength, setTotalFeedLength] = useState(0);
    const [feed, setFeed] = useState([]);
    const [limit, setLimit] = useState(0);

    useEffect(() => {
        const timer = setTimeout( async () => {
            const {data} =  await axios.get(`${url}/?limit=${limit + step}`);

            if(data) {
                setLimit(prevLimit => prevLimit + step);
                setTotalFeedLength(prevState => data.length);

                setFeed([...data.slice(limit)]);

                console.log(feed);
            }
        }, interval * 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [limit, totalFeedLength]);

    return (
        <div>

        </div>
    );
};

export default MemoComponent;