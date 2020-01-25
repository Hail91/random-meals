import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      width: 400, 
      height: 200,
      display: 'flex',
      flexDirection: 'column',  
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0 auto'
    },
    splashbtns: {
        width: 150,
        marginTop: 10,
        background: 'linear-gradient(45deg, #c62822 30%, #ff8e53 90%)',
    },
    btnCont: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
  }));            


const GetStarted = props => {

    const classes = useStyles();

    const homeDirect = event => {
        event.preventDefault();
        props.history.push('/home');
    };
    
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container className={classes.containerStyle} maxWidth="100%" style = {{height: '100vh', width: '100vw'}} >
                    <Paper className={classes.root}>
                        <Typography variant="h4" component="h3">
                            Welcome
                        </Typography>
                        <Typography component="p">
                            Please click below to get started!
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button onClick={homeDirect}  className={classes.splashbtns} variant="contained" color="primary">
                                Get Started
                            </Button>
                        </div>
                    </Paper>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default GetStarted;