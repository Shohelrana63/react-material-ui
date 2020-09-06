import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CommentDetails = (props) => {
  const classes = useStyles();

  const { id, name, body } = props.comment;
  const { url } = props.image;
  const commentDisplay = {
    textAlign: 'center',
    border: '2px solid salmon',
    padding: '20px',
    margin: '20px',
    boxShadow: '5px 5px 5px gray',
    display: 'grid'
  }
  return (
    <div style={commentDisplay}>

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <img style={{ width: '70px', borderRadius: '50px' }} src={url} alt="" />
            <br />
            Id: {id}
          </Typography>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
      </CardContent>
      </Card>
      
    </div>
  );
};

export default CommentDetails;