import React, {useEffect} from 'react';

import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect( () => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved the data');
      }, 1000);
   },
    [ props.persons ]//second argument of UseEffect
  );
  const asignedClasses = [];
  let btnClass = '';
  
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  
  if(props.personslenght <= 2){
      asignedClasses.push(classes.red);
    }
  if(props.personslenght <= 1){
      asignedClasses.push(classes.bold);
    }

  return(
    <div className={classes.Cockpit}>
      <h1>{props.title} </h1>
      <p className={asignedClasses.join(' ')}>This is working</p>
      <button className={btnClass}
              onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}

export default React.memo(Cockpit);