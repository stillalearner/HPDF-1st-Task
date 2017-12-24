import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from './NavigationBar';
import Body from './Body';


const App = () => (
  <MuiThemeProvider>
    <NavigationBar />
    <Body/>
    
  </MuiThemeProvider>
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
