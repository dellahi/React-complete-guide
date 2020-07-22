import React, {PureComponent} from 'react';

import Person from './Person/Person'


class Persons extends PureComponent {
    /*static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps' , props);
        return state;
      }*/
     /* componentWillMount(){
        console.log('[Persons.js] componentWillMount');
      }
      componentWillReceiveProps(props){
          console.log('[Persons.js] componentWillReceiveProps', props);
      }*/
    
      componentDidMount(){
        console.log('[Persons.js] componentDidMount');
      }
    
     /* shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldcomponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;}
        else {return false;}
      }*/
      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapchot!' };
      }
      componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate');
      }
      componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');

      }
        render(){
            console.log('[Persons.js rendering..]');
            return  this.props.persons.map( (p, index) => {
                return(
                    <Person 
                        click = {()=> this.props.clicked(index)}
                        name = {p.name}
                        age = {p.age}
                        key={p.id}
                        changed={ (event) => this.props.changed(event,p.id)}/>
                        )} );
        }
    }

export default Persons ;