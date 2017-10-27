import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
	<App />, 
	document.getElementById('root'));

//for production read more about Progressive Web Apps
registerServiceWorker();
