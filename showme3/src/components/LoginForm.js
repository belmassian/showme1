import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function LoginForm (){ __html:'<head><style></style></head><body class="w3-light-grey"><header class="w3-display-container w3-content w3-hide-small" style="max-width:1500px"><img class="w3-image" src="blackboard.jpg" alt="London" width="1500" height="700"><div class="w3-display-middle signInContainer" style="width:65%"><div class="w3-container"><img class="logo bigLogo" src="img/logo_crop_long.png"></div><div class="w3-container"><div class="w3-panel w3-padding-16 w3-black w3-card-2"><form id="signin" name="signin" method="post" action="signin"><label for="email">Email Address</label><input class="text" name="email" type="text" /><label for="password">Password</label><input name="password" type="password" /><input class="btn signInBtn" type="submit" value="Sign In" /><p class="message"><a class="createLink" href="password.html">Forgot Password?</a></p><p class="message">Not Registered? <a class="createLink" href="SignUpPage.js">Create an Account</a></p></form></div></div></div></body>'
}
function MyComponent(){
  return (
    <div dangerouslySetInnerHTML = {LoginForm()}></div>
)
}
export default LoginForm;
