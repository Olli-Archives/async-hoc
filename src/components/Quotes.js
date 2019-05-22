import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';

export default function Quotes({ quotes }){
  const cards = quotes.map(mappedQuote => {
    const { character, quote, image } = mappedQuote;
    return (
      <li key={`${character}${image}`}>
        <Quote character={character} quote={quote} image={image}/>
      </li>
    );
  });
  return (
    <ul>
      {cards}
    </ul>
  );
  
}



Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};
