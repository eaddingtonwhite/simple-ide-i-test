import React from 'react';
import './App.css';

function inputHandler(e){
   console.log('Text changed in text area. NewText:', e.target.value);
}

function App() {

  return (
    <div className="App">
      <h1>Simple IDE</h1>
      <textarea rows={20} cols={60} placeholder={"Write some code!"} onInput={inputHandler}/>
    </div>
  );
}

export default App;
