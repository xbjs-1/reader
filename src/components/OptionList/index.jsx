import React, { Component } from 'react'

import './index.css'
import Option from '../Option/index'
export default class OptionList extends Component {
  
  render() {
    const {options, addChecked, checking} = this.props;
    return (
      <div className='optionsList'>
        {
          options.map(option => {
            return <Option key={option.id} option={option} addChecked={addChecked} checking={checking}/>
          })
        }
      </div>
    )
  }
}
