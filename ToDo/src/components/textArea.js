import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import style from '../css/textArea.css';

export default class TextArea extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div contentEditable={true} className={style.textArea} onKeyUp={this.props.keyPress} ></div>
    )
  }
}
