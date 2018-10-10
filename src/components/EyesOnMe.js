<<<<<<< HEAD

import React from 'react';

export default class EyesOnMe extends React.Component {
  focus = () => console.log('Good!');
  blur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>Button</button>
=======
// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  render() {
    return (
      <button onFocus={console.log('Good!') onBlur={console.log('Hey! Eyes on me!')}></button>
>>>>>>> 71c8db02250e63547d7ae1d73a7bfa242cf5965d
    )
  }
}
