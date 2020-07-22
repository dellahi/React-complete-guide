import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementref = React.createRef(); // modern approach to use ref for focs
    }
    componentDidMount(){
        this.inputElementref.current.focus();
    }
    render () {
     console.log('[Person.js rendering..]');
     return (
        <Auxilliary>
            <AuthContext.Consumer>
                { context => context.authenticated ? <p>Authenticated</p> : <p>please Login</p>

                }
            </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input //ref= {(inputEl) => {this.inputElement= inputEl}} Old approach to use ref for focs
                ref={this.inputElementref}
                type='text' onChange={this.props.changed} value={this.props.name}></input>
        </Auxilliary>
            );
     }
    }
Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);

  /*
  const rnd = Math.random();
  if (rnd >0.7){
        throw new Error('Somtehing went wrong');
    }

    <div className = {classes.Person}>
   */