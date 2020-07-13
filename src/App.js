import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//import { render } from '@testing-library/react';

//function
 class App extends Component {
   state = {
     persons:[
       { name:'dellahi1', age: 28},
       { name:'dellahi2', age: 27},
       { name:'dellahi3', age: 26}
     ]
   }
   switchNameHandler =() =>{
     console.log('was clicked!');
   }
  render() {
  return ( 
    <div className="App">
      <header className="App-header">
        <h1>Hi, I am React App. </h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Hi Child</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </header>
    </div>
  );
  //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\' am React App'));
  }
}

export default App;
