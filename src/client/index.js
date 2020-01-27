import React, { Component } from 'react';
import { render } from 'react-dom';
import BasicGame from './BasicGame';

class App extends Component {
  render() {
    return <div>
      <BasicGame />
      <BasicGame />
    </div>;
  }
}
render(<App />, document.getElementById('root'));