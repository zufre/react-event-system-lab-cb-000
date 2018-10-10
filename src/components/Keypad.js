// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {
<<<<<<< HEAD
  entering = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <input onKeyUp={this.entering} type="password" />
=======
  render() {
    return (
      <input type="password" onKeyUp={console.log('Entering password...')}/>
>>>>>>> 71c8db02250e63547d7ae1d73a7bfa242cf5965d
    )
  }
}
