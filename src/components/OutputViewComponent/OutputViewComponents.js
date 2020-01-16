import React  from 'react';
import Moment from "react-moment";
import './styles.css';

const OutputViewComponents = (props) => {
    return (
        <div className='container'>
            <div className='feeds-wrapper'>
                {props.data.map((item) => (
                    <div key={item.id} className='feeds-item'>
                        <div className='feeds-item__date'><strong>Posted at:</strong> <Moment format="YYYY/MM/DD HH:mm">{item.created_at}</Moment></div>
                        <div className='feeds-item__name'><strong>By:</strong> {item.user.name}</div>
                        <div className='feeds-item__text'>{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default OutputViewComponents;