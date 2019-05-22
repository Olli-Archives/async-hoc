import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ character, quote, image }) {

  return (
    <div>
      <h2>{character}</h2>
      <img src={image}/>
      <p>{quote}</p>
    </div>
  );

}

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
;
