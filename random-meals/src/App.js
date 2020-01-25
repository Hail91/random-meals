import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="App">
      <Route path='/' component={GetStarted}/>
    </div>
  );
}

export default App;
