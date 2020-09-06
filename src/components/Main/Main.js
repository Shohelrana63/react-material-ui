import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Box from '@material-ui/core/Box';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))

  }, [])
  return (
    <div>

      <Box textAlign="center" m={5}>
        <h1 style={{color: 'blue'}}>Social Buddy React Router</h1>
      </Box>
      <Box ml={15} >
        <h2 style={{color: 'blue'}}>Posts: {posts.length}</h2>
      </Box>

      <Box ml={10} display="flex" flexWrap="wrap" p={1} m={1}>

        {
          posts.map(post => <Post post={post} ></Post>)
        }

      </Box>
    </div>
  );
};

export default Main;