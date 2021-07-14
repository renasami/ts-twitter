import React from 'react';
import './style.css';

import { Route,BrowserRouter as Router, useHistory } from 'react-router-dom';
import Home from '../Home';


const Top = () => {
  const his = useHistory();
  function goHome() {
    his.push("/Home")
    return
  }
  return (
    <div className="App-header">
            <h1> Are your tweets okay?</h1>
            <button onClick={goHome}>START HERE</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/"  component={Top}/>
        <Route exact path="/Home" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
