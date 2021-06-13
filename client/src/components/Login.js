import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Employee Management System
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (e) =>{
        setEmail([e.currentTarget.value])
    }    
    const changePassword = (e) =>{
        setPassword([e.currentTarget.value])
    }  
    const submit = async (e) =>{
      e.preventDefault();
      console.log(email[0], password[0])
      try {
       const res =  await axios.post('/auth/login', { email: email, password: password }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': '*',
            'Allow': 'GET, HEAD, POST, TRACE, OPTIONS',
          }
        })
        console.log(res.data)
        localStorage.setItem('token',res.data)
        alert("You are successfully Loged In.")
        window.location = "/";
      } catch (error) {
        console.log(error)
        alert("Invalid Credentials! Please try to change your data.")
      }
      
      console.log({ email: email[0], password: password[0] })
    } 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={changeEmail}
            autoComplete="email"
            autoFocus
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={changePassword}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="dark"
            className={classes.submit}
            onClick={submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}