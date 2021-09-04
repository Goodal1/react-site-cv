

function Square(props){
  return(
    <button className="square" onClick={props.clic}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {


  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        clic={() => this.props.clic(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status"></div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      history:[{
        squares:Array(9).fill(null)
      }],
      xIsNext:true,
      stepNumber:0
    }
  }

  jumpTo(step){
    this.setState({
      stepNumber:this.state,
      xIsNext:(step % 2) ===0,
    })
  }

  handleClick(i) {

    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[this.state.stepNumber];
    const newSquares = current.squares.slice()
   
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i]= this.state.xIsNext?'X':'0';

    this.setState({
      history:history.concat([{
        squares: newSquares
      }]),
      xIsNext:!this.state.xIsNext,
      stepNumber:history.length,

    })
    
  }

  
  render() {

    const history = this.state.history;
    const current= history[history.length-1];
    const winner = calculateWinner(current.squares);

    const moves=history.map((step,move)=>{
      const desc = move ? 
                  'Revenir au tour n°' + move :
                  'Revenir au début de la partie';
      return(
        <li key={move}>
          <button onClick={()=>this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });





    let status;
    if(winner){
      status=winner+'a gagné';
    } else{
      status='next player :' + (this.state.xIsNext ?'X':'0');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            clic={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
