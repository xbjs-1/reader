import React, { Component } from 'react';
import './index.css';

export default class Option extends Component {
  
  handleClick = () => {
    const {option} = this.props;
    const {checking} = this.props;
    if (checking) {
      this.props.addChecked(option);
    }
  }
  render() {
    const {option} = this.props;
    return (
      <div className='option'>
        <button 
        onClick={this.handleClick} 
        className={option.checked ? 'ban optionBtn' : 'optionBtn'} disabled={option.checked ? 'disabled' : ''}>{option.value}</button>
      </div>
    )
  }
}
