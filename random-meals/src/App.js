import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Main from './components/Main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const openTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Oregano, cursive'
    ]
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={openTheme}>
        <Route exact path='/' component={GetStarted}/>
        <Route path='/home' component={Main}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
