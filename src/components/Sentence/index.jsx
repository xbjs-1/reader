import React, { Component } from 'react'

import './index.css'
import Blank from '../Blank';

export default class Sentence extends Component {
  render() {
    const {sentence, curChecked, changeChecking, deleteChecked,checking} = this.props;
    return (

      <div>
        {
          sentence.map(one => {
            return (
              <span className='sentence' key={one.id}>
                <span >{one.sentence}</span>
                <Blank 
                curChecked={curChecked} 
                changeChecking={changeChecking} 
                deleteChecked={deleteChecked} checking={checking}/>
              </span>
            )
          })
        }
      </div>
    )
  }
}
