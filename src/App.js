import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
//import { render } from '@testing-library/react';

//function
 const App = props => {

  const [personState, setPersonsState] = useState({
    persons:[
      { name:'dellahi1',  age: 28},
      { name:'dellahi2', age: 27},
      { name:'dellahi3', age: 26}
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState]= useState('some other value');

  console.log(personState,otherState);
  const switchNameHandler =() =>{
    //console.log('was clicked!');
    // DON'T DO THIS : this.state.persons[0].name= 'Dellahi EL WAGHF';
    setPersonsState( {
      persons: [
       { name:'dellahi1test', age: 28},
       { name:'dellahi2', age: 27},
       { name:'dellahi3', age: 22}
     ]
   })
  };
  return ( 
    <div className="App">
      <header className="App-header">
        <h1>Hi, I am React App. </h1>
        <p>This is working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}> Hi Child</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
      </header>
    </div>
  );
  //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\' am React App'));
}

export default App;