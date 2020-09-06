import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
      
    maxWidth: 345
  },
  media: {
    height: 140
  },
  
});
const postDisplay = {
  border:'1px solid salmon',
  padding:'20px', 
  margin:'20px',
  boxShadow:'5px 5px 5px gray',
  width:'300px',
  display:'grid',
  backgroundColor:'gray'
}

const Post = (props) => {
    const classes = useStyles();
    const{id, title, body} = props.post;

    const history = useHistory();
    const buttonHandler = (postId) => {
        const url = `/post/${postId}`;
        history.push(url);
    }
    return (
        
        <div style ={postDisplay}>
            {/* <h2>ID: {id}</h2>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>
    <h4><Link to={`/post/${id}`}>see more {id}</Link></h4>
    <button onClick={() => buttonHandler(id)}> See Details</button> */}
      
      <Card className={classes.root }>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {id}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
           {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="secondary"
        
        onClick={() => buttonHandler(id)}>
          see more
        </Button> */}
        <Link to={`/post/${id}`}>
        <Button variant="contained" color="primary">see more </Button></Link>
        
      </CardActions>
    </Card>
        </div>
    );
};

export default Post;