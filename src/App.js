import React, { Component } from 'react';
import './App.css';
import DogsImagesContainer from './components/DogImageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <DogsImagesContainer />
        </header>
      </div>
    );
  }
}

export default App;
