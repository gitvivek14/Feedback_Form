import React, { Component } from 'react'
import {Circles} from "react-loader-spinner"

export default class Spinner
 extends Component {
  render() {
    return (
      <div className='mx-auto my-auto w-full max-w-full flex items-center h-full justify-center'>
        <div>
        <Circles
  height="80"
  width="80"
  color="#FF7F7F"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div>
 
      </div>
    )
  }
}
