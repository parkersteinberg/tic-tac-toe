import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board.jsx';

class App extends Component {
 
  render() {
    return (
      <div className='app'>
        <h1 className='header'>Tic Tac Toe</h1>
        <Board />

        <footer className="footer">
          <a href="https://parkersteinberg.com/" target="_blank" rel="noreferrer">By Parker Steinberg</a>
        </footer>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));


