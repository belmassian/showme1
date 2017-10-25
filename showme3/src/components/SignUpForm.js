import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <form id="signup" name="signup" method="post" action="/signup">
    <label for="email">Email Address</label>
    <input class="text" placeholder="Email"name="email" type="email" />
    <label for="firstname">First Name</label>
    <input name="firstname" placeholder="First Name"type="text" />
    <label for="lastname">Last Name</label>
    <input name="lastname" placeholder="Last Name"type="text" />
    <label for="password">Password</label>
    <input name="password" placeholder="Password"type="password" />
    <input class="btn signInBtn" type="submit" value="Sign Up" />
    <p class="message"> Already Registered?  <a class="createLink" href="LoginPage.js">Sign In</a></p>
  </form>
);

export default SignUpForm;
