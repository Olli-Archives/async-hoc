
import React from 'react';
import PropTypes from 'prop-types';

export function NextButton({ incrementCount }){

  
  return (<button onClick={()=>incrementCount('test')}>NEXT</button>);
}

export  function PreviousButton({ decrementCount }){

  
  return (<button onClick={decrementCount}>PREV.</button>);
}

NextButton.propTypes = {
  incrementCount: PropTypes.func.isRequired
}
;

PreviousButton.propTypes = {
  decrementCount: PropTypes.func.isRequired,
}
;

