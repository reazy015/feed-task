import React  from 'react';
import Moment from 'react-moment';
import './styles.css';

const Post = ({post}) => {
    return (
        <div className='feeds-item'>
            <div className='feeds-item__date'><strong>Posted at:</strong> <Moment format='YYYY/MM/DD HH:mm'>{new Date(post.created_at).toISOString()}</Moment></div>
            <div className='feeds-item__name'><strong>By:</strong> {post.user.name}</div>
            <div className='feeds-item__text'>{post.text}</div>
        </div>
    )
};

const MemoPost = React.memo(Post, (prevProps, nextProps) => {
    if(prevProps.post.id === nextProps.post.id) {
        return true;
    }
    return false;
})

export default MemoPost