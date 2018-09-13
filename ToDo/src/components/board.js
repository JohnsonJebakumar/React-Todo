import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import style from '../css/board.css';
import State from './state.js';
import TextArea from './textArea.js';
import AddIcon from './addIcon.js';
import DeleteIcon from './deleteIcon.js';

export default class Board extends Component {
  constructor(props){
    super(props);
    this.checkKeyPress=this.checkKeyPress.bind(this);
    this.state={
      names:[]
    };
  }
  checkKeyPress(event){
    var content=event.target.textContent;
    if (event.keyCode==13 && content)
    {
      event.target.innerHTML='';
      this.setState({names : [...this.state.names,content] });
      this.deleteStateFun=this.deleteStateFun.bind(this);
    }
  }
  deleteStateFun(event){
    this.setState({names:this.state.names.filter(val => val !== event.target.parentElement.children[0].textContent)});
  }
  render(){
    let { names=[] } = this.state;
    let { id } = this.props;
    return(
      <div id={id} className={style.boardContainer} >
        <DeleteIcon deleteFunc={this.props.delFun} />
        <div id="boardContainer">
          {names.map((name)=>{
              return <State name={name} deleteFunc={this.deleteStateFun} />
          })}
        </div>
        <TextArea keyPress={this.checkKeyPress}/>
        <AddIcon func={this.props.func} />
      </div>
    )
  }
}
