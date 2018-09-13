import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import style from '../css/deleteIcon.css';

export default class DeleteIcon extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={style.delIcon} onClick={this.props.deleteFunc}>x</div>
    )
  }
}
