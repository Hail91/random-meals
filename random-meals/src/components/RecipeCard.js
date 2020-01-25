import React, {useState} from 'react';
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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
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
    backgroundColor: red[500],
  },
}));

const RecipeCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(props.data)

  return (
      props.data.map(info => {
          return (
            <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={info.strMeal}
              subheader="January 25, 2020"
            />
            <CardMedia
              className={classes.media}
              image={info.strMealThumb}
              title="Paella dish"
            />
            <CardContent>
              <Typography>
                  Category/Area
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {info.strCategory}/ {info.strArea}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Instructions:</Typography>
                <Typography paragraph>
                  {info.strInstructions}
                </Typography>
              </CardContent>
              <CardContent>
              <div class="videoWrapper">
                <iframe 
                  title="recipe"
                  width="420" 
                  height="315"
                  src={`https://www.youtube.com/embed/${info.strYoutube.slice(-11)}`}>
				        </iframe>
			        </div>
              </CardContent>
            </Collapse>
          </Card>
          )
      })
  );
}
export default RecipeCard;
