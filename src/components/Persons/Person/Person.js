import React from 'react';
import Radium from 'radium';

import classes from './Person.module.css';

const person = (props) => {
     console.log('[Person.js rendering..]');
     return (
        <div className = {classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div> 
     )
};

export default person;

  /*
  const rnd = Math.random();
  if (rnd >0.7){
        throw new Error('Somtehing went wrong');
    }
   */