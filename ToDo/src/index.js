import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

class Main extends Component {
  constructor(props){
    super(props);
    this.state={boards:[1]};
    this.addBoardFun=this.addBoardFun.bind(this);
    this.deleteBoard=this.deleteBoard.bind(this);
  }
  addBoardFun(){
    this.setState({boards:[...this.state.boards,(this.state.boards.length+1)]});
  }
  deleteBoard(event){
    this.setState({boards:this.state.boards.filter(val => val != event.target.parentElement.id)});
  }
  render(){
    let { boards=[1] }=this.state;
    return (
      <div id='container'>
      {
        boards.map((id)=>{
          console.log(boards);
          return <Board id={id} func={this.addBoardFun} delFun={this.deleteBoard} />
        })
      }
      </div>
    )
  }
}
ReactDOM.render(
  <Main />,
  document.body
)
