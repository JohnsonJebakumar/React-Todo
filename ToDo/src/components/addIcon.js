import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import style from '../css/addIcon.css';

export default class AddIcon extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={style.plusIcon} onClick={this.props.func} >+</div>
    )
  }
}
