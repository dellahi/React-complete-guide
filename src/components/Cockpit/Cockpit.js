import React, {useEffect, useRef} from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';


const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  
  useEffect( () => {
    console.log('[Cockpit.js] useEffect');
   /*  // Http request...
    setTimeout(() => {
      alert('Saved the data');
      }, 1000); */
      toggleBtnRef.current.click();
      return console.log('[Cockpit.js] cleanip works in useEffect');
   },
    []/* [ props.persons ] *///second argument of UseEffect
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
              ref={toggleBtnRef}
              onClick={props.clicked}>Toggle Persons</button>
    
      <AuthContext.Consumer>
        { context => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(Cockpit);