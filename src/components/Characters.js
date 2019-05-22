import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

export default function Characters({ charactersArray }){
  const characters = charactersArray.map(character=>{
    const { name, status, species, image } = character;
    return <Character key={`${name}${status}`} name={name} status={status} species={species} image={image}/>;
  });
  return (
   <>
   {characters}
   </>
  );

}

Characters.propTypes = {
  charactersArray: PropTypes.array.isRequired
}
;
