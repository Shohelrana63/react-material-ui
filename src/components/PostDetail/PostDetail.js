import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
  root: {

    maxWidth: 345
  },
  media: {
    height: 140
  },

});

const PostDetail = () => {
  const classes = useStyles();
  const { postId } = useParams();


  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div>

      <Box m={2}>
        <h1 style={{color: 'blue'}}>This is post user details: {postId}</h1>
      </Box>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              ID: {post.id}
            </Typography>
            <Typography gutterBottom variant="h4" component="h2">
              Title: {post.title}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Body:</b> {post.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>


        </CardActions>
      </Card>

      <Comment postid={postId}></Comment>

    </div>

  );
};

export default PostDetail;