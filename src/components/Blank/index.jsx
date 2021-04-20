import React, { Component } from 'react';

import './index.css'

export default class Blank extends Component {
  state = {
    option: null
  }

  componentDidUpdate(preProps, preState) {
    // console.log(preProps.checking);
    return null;
  }

  handleFocus = (event) => {
    this.props.changeChecking(true);
    if (event.target.placeholder) {
      this.props.deleteChecked(this.state.option);
      event.target.placeholder = '';
    }
  }
  handleBlur = (event) => {
    setTimeout(() => {
      if (event.relatedTarget && event.relatedTarget.className === 'ban optionBtn') {
        const {curChecked} = this.props;
        const option = curChecked[curChecked.length - 1];
        this.setState({option: option})
      } 
      else {
        this.setState({option: null})
      }
      this.props.changeChecking(false);
    }, 100)
    
  }
  render() {
    // const {curChecked} = this.props;
    const {option} = this.state;
    return (
      // <div className='blank' onClick={this.handleClick}>{checking ? 'hello' : ''}</div>
      <input  type="text" 
              className={option ? 'hasOption blank' : 'blank'} 
              onFocus={this.handleFocus} 
              onBlur={this.handleBlur} 
              placeholder={option ? option.value : ''}/>
    )
  }
}
