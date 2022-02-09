import React from 'react';
import './App.scss';
import {Header} from "./components/Header"
import {Stats} from "./components/Stats"

function App() {
  return (
    <div className="app">
      <Header/>
      <Stats/>
    </div>
  );
}

export default App;
