import React from "react";
import { FaShareSquare, FaPen, FaTimes } from "react-icons/fa";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 10

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));

export default function MaterialEx() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
   
<div>

  <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          RJ
        </Avatar>
      }
      // action={
      //   <IconButton aria-label="settings">
      //     <MoreVertIcon />
      //   </IconButton>
      // }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    {/* <CardMedia
      className={classes.media}
      image="/static/images/cards/paella.jpg"
      title="Paella dish"
    /> */}
    <CardContent>
      <Typography variant="body1" color="textSecondary" component="p">
        
      <Typography paragraph>Method:</Typography>
        This impressive paella is a perfect party dish and a fun meal to cook together with your
        guests. Add 1 cup of frozen peas along with the mussels, if you like.
      </Typography>
      <br></br>
      <Typography variant="body1" color="textSecondary" component="p">
        
        <Typography paragraph>Method:</Typography>
          This impressive paella is a perfect for any occasion. Just get youre friends together and have a party! 
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      {/* <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton> */}
    </CardActions>
    {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          minutes.
        </Typography>
      </CardContent>
    </Collapse> */}
    
  </Card>

  <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          RJ
        </Avatar>
      }
      // action={
      //   <IconButton aria-label="settings">
      //     <MoreVertIcon />
      //   </IconButton>
      // }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    {/* <CardMedia
      className={classes.media}
      image="/static/images/cards/paella.jpg"
      title="Paella dish"
    /> */}
    <CardContent>
      <Typography variant="body1" color="textSecondary" component="p">
        
      <Typography paragraph>Method:</Typography>
        This impressive paella is a perfect party dish and a fun meal to cook together with your
        guests. Add 1 cup of frozen peas along with the mussels, if you like.
      </Typography>
      <br></br>
      <Typography variant="body1" color="textSecondary" component="p">
        
        <Typography paragraph>Method:</Typography>
          This impressive paella is a perfect for any occasion. Just get youre friends together and have a party! 
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      {/* <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton> */}
    </CardActions>
    {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          minutes.
        </Typography>
      </CardContent>
    </Collapse> */}
    
  </Card>




</div>







  );
}
