import React from 'react';
import './style.css';
import Button  from '../atoms/Button';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1> Are your tweets okay?</h1>
            <Button content="Start Here" href="/Home" func= {null} ></Button>
      </header>
    </div>
  );
}

export default App;
