import React from 'react';
import propTypes from 'prop-types';

const Person = ({ person: { fname, lname, city } }) => (
  <div className="person">
    <p>{fname} {lname} is from {city}</p>
  </div>
);

Person.propTypes = {
  person: propTypes.shape({
    fname: propTypes.string,
    lname: propTypes.string,
    city: propTypes.string,
  }).isRequired,
};

export default Person;
