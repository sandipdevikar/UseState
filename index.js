import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Person} from './component/Person'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'World',
      age:18
    };
  }

  render() {
    const {name,age}=this.state;
    return (
      <div>
        <Hello name={name} />
       <Person name={name}/>
      </div>
      
    );
  }
}

render(<App />, document.getElementById('root'));
