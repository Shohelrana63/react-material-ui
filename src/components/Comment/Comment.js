import React, { useState, useEffect } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';



const Comment = (props) => {
    const postId = props.postid;
    const [comments, setComments] = useState([]);
    const [image, setImage] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setImage(data))

    }, [])

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'blue'}}> Comments For PostId :{postId}</h1>
            {
                comments.map(comment => <CommentDetails comment={comment} image={image}></CommentDetails>)
            }

        </div>
    );
};

export default Comment;