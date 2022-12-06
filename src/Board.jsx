//Board.jsx
import React, { Component } from 'react';
import Row from './Row.jsx';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: {},
      turn: 'X',
      winner: '-'
    };
    this.changeButtonVal = this.changeButtonVal.bind(this);
    this.setBoard = this.setBoard.bind(this);
    this.checkForWinner = this.checkForWinner.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount(){
    this.setBoard();
  }

  async checkForWinner(){
    console.log("CHECKING");
    // check rows
    for (let i = 0; i < 3; i++) {
      if (this.state.board[`r${i}c${0}`] === this.state.board[`r${i}c${1}`] && this.state.board[`r${i}c${1}`] === this.state.board[`r${i}c${2}`] && this.state.board[`r${i}c${0}`] !== '-') {
        // set winner state
        this.setState({
          winner: this.state.board[`r${i}c${0}`] 
        });
      }
    }

    // check for columns
    for (let i = 0; i < 3; i++) {
      if (this.state.board[`r${0}c${i}`] === this.state.board[`r${1}c${i}`] && this.state.board[`r${1}c${i}`] === this.state.board[`r${2}c${i}`] && this.state.board[`r${0}c${i}`] !== '-') {
        // set winner state
        this.setState({
          winner: this.state.board[`r${0}c${i}`] 
        });
      }
    }

    // check diagonals
    if (this.state.board[`r${0}c${0}`] === this.state.board[`r${1}c${1}`] && this.state.board[`r${1}c${1}`] === this.state.board[`r${2}c${2}`]) {
      // set winner state
      this.setState({
        winner: this.state.board[`r${0}c${0}`] 
      });
    }
    if (this.state.board[`r${2}c${0}`] === this.state.board[`r${1}c${1}`] && this.state.board[`r${1}c${1}`] === this.state.board[`r${0}c${2}`]) {
      // set winner state
      this.setState({
        winner: this.state.board[`r${2}c${0}`] 
      });
    }

    // Check for O win 
  }

  resetGame() {
    console.log('running resetGame')
    this.setState({
      turn: 'X',
      winner: '-'
    }, this.setBoard);
  }

  setBoard(){
    const board = {};
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        board[`r${i}c${j}`] = '-';
      }
    }
    this.setState({board:board});
  }

  changeButtonVal(e){
    const id = e.target.id;
    this.setState({
      board: {
        ...this.state.board,
        [id]: this.state.turn === 'X' ? 'X' : 'O'
      },
      turn: this.state.turn === 'X' ? 'O' : 'X'
    }, this.checkForWinner);
  }
  

  render() {
    const rows = [];
    for(let i = 0; i < 3; i++){
      rows.push(
        <Row
          key = {i}
          row = {i}
          board = {this.state.board}
          changeButtonVal = {this.changeButtonVal}
          checkForWinner = {this.checkForWinner}
        />
      );
    }
    
    return (
      <div className='board'>
        <div className="rows">
          {rows}
        </div>

        {this.state.winner === '-' && 
          <div className="turn">
            <span className="turn-text">It's {this.state.turn}'s turn</span>
          </div>
        }

        {this.state.winner !== '-' &&(
          <div className="winner"> 
            <p>{this.state.winner} wins!</p>
          </div>
        )}

        <div className="restart">
          <button 
            className="restart-button"
            onClick={this.resetGame}>
            Restart
          </button>
        </div>
        
      </div>
    );
  }
}

export default Board;
