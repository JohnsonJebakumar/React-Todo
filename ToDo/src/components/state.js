import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import style from '../css/state.css';
import DeleteIcon from './deleteIcon.js';

export default class State extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {name}=this.props;
    return(
      <div className={style.createdState}><div>{name}</div>
          <DeleteIcon deleteFunc={this.props.deleteFunc} />
      </div>
    )
  }
}
