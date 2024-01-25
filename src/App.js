import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Feedback_Form from './components/Feedback_Form';

export default class App extends Component {
  render() {
    return (
      <div className='w-[100vw] h-[100vh]  overflow-y-auto'>
        <Feedback_Form></Feedback_Form>
      </div>
    )
  }
}



