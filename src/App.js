import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';
//import { render } from '@testing-library/react';

//function
 class App extends Component {

  state = {
    persons:[
      { id: '123', name:'dellahi1', age: 28},
      { id: '1234', name:'dellahi2', age: 27},
      { id: '123456', name:'dellahi3', age: 26}
    ],
    otherState: 'some other value',
    showPersons:false
  };

  /*switchNameHandler =(newName) =>{
    //console.log('was clicked!');
    // DON'T DO THIS : this.state.persons[0].name= 'Dellahi EL WAGHF';
    this.setState( {
      persons: [
       { name:newName, age: 28},
       { name:'dellahi2', age: 27},
       { name:'dellahi3', age: 22}
     ]
   })
  }*/
  deletePersonHandler=(personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {return p.id === id;});
    
    const person = {...this.state.persons[personIndex]};

    //const person = Object.assign({}, this.state.persons[personindex]);

    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex]=person;

    this.setState( {persons: persons});
  }
  togglePersonsHandler = () => {
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroungColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
         <div>
          {this.state.persons.map( (p, index) => {
            return <Person 
                    click = {()=> this.deletePersonHandler(index)}
                    name = {p.name}
                    age = {p.age}
                    key={person.id}
                    changed={ (event) => this.nameChangeHandler(event,p.id)}/>
          })}
        </div> 
      );
    }
  return ( 
    <div className="App">
  { /*<header className="App-header">*/}
        <h1>Hi, I am React App. </h1>
        <p>This is working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
    {/*  </header>*/}
    </div>
  );
  //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\' am React App'));
  }
}

export default App;
{/*<div>
<Person 
name={this.state.persons[0].name} 
age={this.state.persons[0].age}
click={() => this.switchNameHandler('DellahiEulerFuncTest')}
changed ={this.nameChangeHandler}> Hi Child</Person>
<Person 
name={this.state.persons[1].name} 
age={this.state.persons[1].age}
click={this.switchNameHandler}></Person>
<Person 
name={this.state.persons[2].name} 
age={this.state.persons[2].age}
click={this.switchNameHandler}></Person>
</div>*/ }