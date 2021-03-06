import React, { Component } from 'react';

import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';
import AuthContext from '../context/auth-context';

//import { findRenderedComponentWithType } from 'react-dom/test-utils';
//import { render } from '@testing-library/react';

//function
 class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
    persons:[
      { id: '123', name:'dellahi1', age: "28"},
      { id: '1234', name:'dellahi2', age: 27},
      { id: '123456', name:'dellahi3', age: 26}
    ],
    otherState: 'some other value',
    showPersons:false,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps' , props);
    return state;
  }
  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldcomponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler=(personIndex) => {
    const persons = [...this.state.persons];  // Or const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {return p.id === id;});
    
    const person = {...this.state.persons[personIndex]};  // Or : const person = Object.assign({}, this.state.persons[personindex]);

    person.name = event.target.value;
    const persons =[...this.state.persons];
    persons[personIndex]=person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    } );
  }
  togglePersonsHandler = () => {
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
      this.setState({
        authenticated: true
      })
  }
  render() {

    console.log('[App.js] render');
    let persons = null;
  
        if (this.state.showPersons) {
          persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAutenticated={this.state.authenticated}
            />
        }
   

  return (
      <Auxilliary classes={classes.App}>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login:this.loginHandler}}>
          <Cockpit title = {this.props.appTitle} 
            showPersons = {this.state.showPersons}
            personslenght={this.state.persons.length}
            clicked={this.togglePersonsHandler}/>  
          {persons}
        </AuthContext.Provider>
      </Auxilliary>
  );
  //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\' am React App'));
  }
}

export default withClass(App, classes.App);

/*
  exo1 for example
  switchNameHandler =(newName) =>{
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


/*<div>
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
</div>*/


/*
  66-73
  import Radium, { StyleRoot } from 'radium';
  import styled from 'styled-components';
  const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'green' : 'red'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    backgroundColor: lightgreen;
    color: black;
`;*/