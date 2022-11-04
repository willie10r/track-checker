import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Router,
  Routes
} from 'react-router-dom';

// componetns
import Home from './home';
import '../App.css';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
