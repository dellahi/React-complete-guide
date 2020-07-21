import React, {Component} from 'react';

import classes from './Person.module.css';
import Auxilliary from '../../../hoc/Auxilliary';

class Person extends Component {

    render (){
     console.log('[Person.js rendering..]');
     return (
        <Auxilliary>
            <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.name}></input>
        </Auxilliary>
            );
     }
    }

export default Person;

  /*
  const rnd = Math.random();
  if (rnd >0.7){
        throw new Error('Somtehing went wrong');
    }

    <div className = {classes.Person}>
   */