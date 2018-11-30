import React from 'react'
import './Person.scss';

const person = (props) => {
  return (
    <div className="Person" onClick={ props.click }>
      <h3>Person component { props.name }</h3>
      <div>
        <input type="text" onChange={ props.changed }/>
      </div>
    </div>
  )
};

export default person;