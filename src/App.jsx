import React, { Component } from 'react'

import OptionList from './components/OptionList/index'
import Section from './components/Section';
import {artical, options} from './data/data'
import './App.css'

export default class App extends Component {
  /* 
  artical [
    {
      id:
      section: {
        id:
        sentence: []
      }
    },
    {
      id:
      section: {
        id:
        sentence: []
      }
    },
  ]
  
  */
  state = {
    artical,
    options,
    curChecked: [],
    checking: false,
  }
  addChecked = (obj) => {
    const {curChecked, options} = this.state;
    const newCurChecked = [...curChecked, obj]
    this.setState({curChecked: newCurChecked});
    const newOptions = options.map(option => {
      if (option.id === obj.id) {
        return {id:option.id, value: option.value, checked: true};
      }
      else {
        return option;
      }
    })
    this.setState({options: newOptions});
  }
  deleteChecked = (obj) => {
    const {curChecked, options} = this.state;
    const newCurChecked = curChecked.filter(one => {
      return one.id !== obj.id;
    });
    this.setState({curChecked: newCurChecked})
    const newOptions = options.map(option => {
      if (option.id === obj.id) {
        return {id:option.id, value: option.value, checked: false};
      }
      else {
        return option;
      }
    })
    this.setState({options: newOptions});
  }
  changeChecking = (flag) => {
    this.setState({checking: flag})
  }
  render() {
    const {artical, options, curChecked, checking} = this.state;
    return (
      <div className='wrapper'>
        {
          artical.map(section => {
            return <Section 
                    key={section.id} 
                    curChecked={curChecked} 
                    section={section} 
                    changeChecking={this.changeChecking} 
                    deleteChecked={this.deleteChecked} 
                    checking={checking}/>
          })
        }
        <OptionList options={options} addChecked={this.addChecked} checking={checking}/>
      </div>
    )
  }
}
