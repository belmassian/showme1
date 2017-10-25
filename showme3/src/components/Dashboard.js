import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Button, Card, Row, Col } from 'react-materialize'
import CSS from 'W3-css';


const Dashboard = ({ secretData }) => (
  <head>
  <body class="w3-theme-l5">
  <div class="w3-top">
   <div class="w3-bar w3-theme-d2 w3-left-align w3-large">
    <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
    <a href="dashboard.js" class="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i class="fa fa-home w3-margin-right"></i></a>
    <a href="mentors.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Find a Mentor"><i class="fa fa-globe"></i></a>
    <a href="#" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings"><i class="fa fa-user"></i></a>
    <a href="directmessages.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages"><i class="fa fa-envelope"></i></a>
    <div class="w3-dropdown-hover w3-hide-small">
      <button class="w3-button w3-padding-large" title="Notifications"><i class="fa fa-bell"></i><span class="w3-badge w3-right w3-small w3-green">3</span></button>
      <div class="w3-dropdown-content w3-card-4 w3-bar-block" style="width:300px">
        <a href="#" class="w3-bar-item w3-button">One new friend request</a>
        <a href="#" class="w3-bar-item w3-button">John Doe posted on your wall</a>
        <a href="#" class="w3-bar-item w3-button">Jane likes your post</a>
      </div>
    </div>
    <a href="signout.html" class="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Sign Out"></a>

   </div>
  </div>
  <div id="navDemo" class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
    <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 1</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 2</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large">Link 3</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large">My Profile</a>
  </div>
  <div class="w3-container w3-content" style="max-width:1400px;margin-top:80px">
    <div class="w3-row">
      <div class="w3-col m3">
        <div class="w3-card-2 w3-round w3-white">
          <div class="w3-container">
           <h4 class="w3-center">My Profile</h4>
           <p class="w3-center"><img src="./assets/pittman.jpg" class="w3-circle" style="height:106px;width:106px" alt="Avatar"/></p>
           <hr>
           <p><i class="fa fa-apple fa-fw w3-margin-right w3-text-theme"></i> Apple Architect</p>
           <p><i class="fa fa-empire fa-fw w3-margin-right w3-text-theme"></i> SEC</p>
           <p><i class="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Washington, DC</p>
        <div class="w3-card-2 w3-round">
          <div class="w3-white">
            <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups</button>
            <div id="Demo1" class="w3-hide w3-container">
              <p>Some text..</p>
            </div>
            <button onclick="myFunction('Demo2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events</button>
            <div id="Demo2" class="w3-hide w3-container">
              <p>Some other text..</p>
            </div>
            <button onclick="myFunction('Demo3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i class="fa fa-users fa-fw w3-margin-right"></i> My Photos</button>
            <div id="Demo3" class="w3-hide w3-container">
           <div class="w3-row-padding">
             <div class="w3-half">
               <img src="/assets/<.jpg" style="width:100%" class="w3-margin-bottom">
             <div class="w3-half">
               <img src="/assets/gw-codingbootcamp.jpg" style="width:100%" class="w3-margin-bottom">
             <div class="w3-half">
               <img src="/assets/javascript.png" style="width:100%" class="w3-margin-bottom">
             <div class="w3-half">
               <img src="/assets/react.png" style="width:100%" class="w3-margin-bottom">
             <div class="w3-half">
               <img src="/assets/nodejs.png" style="width:100%" class="w3-margin-bottom">
             <div class="w3-half">
               <img src="/assets/sql-database.png" style="width:100%" class="w3-margin-bottom">
        <br>
        <div class="w3-card-2 w3-round w3-white w3-hide-small">
          <div class="w3-container">
            <p>Interests</p>
            <p>
              <span class="w3-tag w3-small w3-theme-d5">News</span>
              <span class="w3-tag w3-small w3-theme-d4">GW Coding Bootcamp</span>
              <span class="w3-tag w3-small w3-theme-d3">Javascript</span>
              <span class="w3-tag w3-small w3-theme-d2">HTML</span>
              <span class="w3-tag w3-small w3-theme-d1">CSS</span>
              <span class="w3-tag w3-small w3-theme">React</span>
              <span class="w3-tag w3-small w3-theme-l1">Node.js</span>
            </p>
          </div>
        </div>
        <br>
        <div class="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
          <span onclick="this.parentElement.style.display='none'" class="w3-button w3-theme-l3 w3-display-topright">
            <i class="fa fa-remove"></i>
          </span>
          <p><strong>Hey!</strong></p>
          <p>People are looking at your profile. Find out who.</p>
        </div>
      <div class="w3-col m7">

        <div class="w3-row-padding">
          <div class="w3-col m12">
            <div class="w3-card-2 w3-round w3-white">
              <div class="w3-container w3-padding">
                <h6 class="w3-opacity"></h6>
                <p contenteditable="true" class="w3-border w3-padding">Looking For A React Mentor</p>
                <button type="button" class="w3-button w3-theme"><i class="fa fa-pencil"></i>  Post</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w3-container w3-card-2 w3-white w3-round w3-margin"><br>
          <img src="/assets/sasha.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
          <span class="w3-right w3-opacity">1 min</span>
          <h4>Sasha Slacum</h4><br>
          <hr class="w3-clear w3-border-grey">
          <p>If you need help with authorizing React Applications, check out: https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components/</p>
            <div class="w3-row-padding" style="margin:0 -16px">
              <div class="w3-half">
                <img src="/assets/reactrouter.jpg" style="width:100%" alt="Router" class="w3-margin-bottom">
              <div class="w3-half">
                <img src="/assets/reactOG.png" style="width:100%" alt="Auth" class="w3-margin-bottom">
          <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>
          <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>

        <div class="w3-container w3-card-2 w3-white w3-round w3-margin"><br>
          <img src="/w3images/avatar5.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
          <span class="w3-right w3-opacity">16 min</span>
          <h4>Jane Doe</h4><br>
          <hr class="w3-clear">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>
          <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>
        <div class="w3-container w3-card-2 w3-white w3-round w3-margin"><br>
          <img src="/w3images/avatar6.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
          <span class="w3-right w3-opacity">32 min</span>
          <h4>Angie Jane</h4><br>
          <hr class="w3-clear">
          <p>Have you seen this?</p>
          <img src="/w3images/nature.jpg" style="width:100%" class="w3-margin-bottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button type="button" class="w3-button w3-theme-d1 w3-margin-bottom"><i class="fa fa-thumbs-up"></i>  Like</button>
          <button type="button" class="w3-button w3-theme-d2 w3-margin-bottom"><i class="fa fa-comment"></i>  Comment</button>
      <div class="w3-col m2">
        <div class="w3-card-2 w3-round w3-white w3-center">
          <div class="w3-container">
            <p>Upcoming Events:</p>
            <img src="/assets/code&coffee.png" alt="Meetup" style="width:100%;">
            <p><strong>D.C. Code and Coffee</strong></p>
            <p>October 22 1:00PM</p>
            <p><button class="w3-button w3-block w3-theme-l4">Info</button></p>
          /div>


        <div class="w3-card-2 w3-round w3-white w3-center">
          <div class="w3-container">
            <p>Friend Request</p>
            <img src="/w3images/avatar6.png" alt="Avatar" style="width:50%"><br>
            <span>Jane Doe</span>
            <div class="w3-row w3-opacity">
              <div class="w3-half">
                <button class="w3-button w3-block w3-green w3-section" title="Accept"><i class="fa fa-check"></i></button>
              </div>
              <div class="w3-half">
                <button class="w3-button w3-block w3-red w3-section" title="Decline"><i class="fa fa-remove"></i></button>
              </div>
            </div>

        <div class="w3-card-2 w3-round w3-white w3-padding-16 w3-center">
          <p>ADS</p>
        </div>

        <div class="w3-card-2 w3-round w3-white w3-padding-32 w3-center">
          <p><i class="fa fa-bug w3-xxlarge"></i></p>
</div></br></img></div></div></img></div></div></div>);


export default Dashboard;
