import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ name, status, species, image }){
  return (
    <div>
      <h1>{name}</h1>
      <p>{status}</p>
      <p>{species}</p>
      <img src={image}/>
    </div>
  );

}
Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired 
};
