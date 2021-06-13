import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '98vh'
  },
  title: {
    flexGrow: 1,
    letterSpacing: 1.6,
  },
  logo: {
    width: 80,
    height: 50,
    borderRadius: 15,
    boxShadow: '0 5px 5px 1px black',
  },
  profile: {
    width: 40,
    height: 40,
  },
  list: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",

  },
  items: {
    paddingRight: 14,
  },
  itemLink: {
    textDecoration: "none",
    color: 'white',
  }
}));

export default function Navbar() {
  const classes = useStyles();


  return (


    <nav className="navbar navbar-expand-md navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          EMS - Employee Management System
          </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto" />

          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/profiles">
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/"
                className="nav-link"
                onClick={()=>{
                  localStorage.removeItem("token")
                 }}
              >
                Logout
        </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
}