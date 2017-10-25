import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router } from 'react-router-dom';
import history from './history.js'
import routes from './routes.js';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();


class App extends React.Component {
    render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router history={history} routes={routes} />
        </MuiThemeProvider>
      );
    }
  }

  export default App;
