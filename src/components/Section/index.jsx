import React, { Component } from 'react'

import Sentence from '../Sentence/index'

export default class Section extends Component {
  render() {
    const {section, curChecked, changeChecking, deleteChecked, checking} = this.props;
    return (
      <div>
        {
          <Sentence 
            key={section.id} 
            sentence={section.section} 
            curChecked={curChecked} 
            changeChecking={changeChecking} 
            deleteChecked={deleteChecked} 
            checking={checking}/>
        }
      </div>
    )
  }
}
