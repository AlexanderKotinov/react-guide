import React from 'react'
import './Person.scss';

const person = (props) => {
  return (
    <div className="Person">
      <h3>Person component { props.name }</h3>
    </div>
  )
};

export default person;