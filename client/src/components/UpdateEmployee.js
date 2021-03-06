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

export default function UpdateEmployee() {
    const [employee,setEmployee] = useState(JSON.parse(localStorage.getItem('employee')))
    
    const classes = useStyles();
    const [name, setName] = useState([employee.name]);
    const [age, setAge] = useState(employee.age);
    const [cnic, setCnic] = useState(employee.cnic);
    const [email, setEmail] = useState([employee.email]);
    const [salary, setSalary] = useState(employee.salary);
    const [designation, setDesignation] = useState([employee.designation]);
    
    const changeName = (e) =>{
        setName([e.currentTarget.value])
    }    
    const changeAge = (e) =>{
        setAge([e.currentTarget.value])
    }
    const changeCnic = (e) =>{
        setCnic([e.currentTarget.value])
    }
    const changeEmail = (e) =>{
        setEmail([e.currentTarget.value])
    }    
    const changeSalary = (e) =>{
        setSalary([e.currentTarget.value])
    }
    const changeDesignation= (e) =>{
        setDesignation([e.currentTarget.value])
    }  
    const submit = async (e) =>{
        e.preventDefault();
        console.log( { name: name[0], age: parseInt(age),cnic: parseInt(cnic), email: email[0],salary: parseInt(salary), designation: designation[0]  })
        try {
            
          await axios.put(`/employee/edit/${employee['_id']}`, { name: name[0], age: parseInt(age),cnic: parseInt(cnic), email: email[0],salary: parseInt(salary), designation: designation[0] }, {
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
          alert("Employee is updated added.")
          localStorage.removeItem('employee')
          window.location = "/profiles";
        } catch (error) {
          console.log(error)
          alert("Invalid Credentials! Please try to change your data.")
        }
        console.log({ name: name, age: age,cnic: cnic, email: email,salary: salary, designation: designation  })
      }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Employee Details
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Employee Name"
            type="text"
            name="name"
            value={name}
            onChange={changeName}
            autoComplete="name"
            autoFocus
            
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="age"
            label="Employee Age"
            type="number"
            name="age"
            value={age}
            onChange={changeAge}
            autoComplete="age"
            
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cnic"
            label="Employee CNIC"
            type="number"
            name="cnic"
            value={cnic}
            onChange={changeCnic}
            autoComplete="cnic"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Employee Email Address"
            type="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={changeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="salary"
            label="Employee Salary"
            type="number"
            name="salary"
            value={salary}
            onChange={changeSalary}
            autoComplete="salary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="designation"
            label="Employee Designation"
            type="text"
            name="designation"
            value={designation}
            onChange={changeDesignation}
            autoComplete="designation"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Update Employee
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"I don't want to add new Employee."}
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