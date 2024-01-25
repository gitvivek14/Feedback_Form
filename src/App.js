
import './App.css';

import React, { Component } from 'react'
import FeedbackForm from './components/FeedbackForm';

export default class App extends Component {
  render() {
    return (
      <div className='w-[100vw] h-[100vh]  overflow-y-auto'>
        <FeedbackForm></FeedbackForm>
      </div>
    )
  }
}



