import React, { Component } from 'react';
import Characters from './Characters';
import fetchCharacters from '../Service/fetchCharacters';

export default class AllCharacters extends Component{
  state={
    charactersArray: [],
    loading: false,
  }

  componentDidMount(){
    this.setState({ loading:true });
    fetchCharacters()
      .then(characters=>{
        console.log('characters', characters);
        this.setState({ charactersArray:characters.results });
      })
      .then(()=>{
        this.setState({ loading:false });
      });
  }

  render(){
    if(this.state.loading === true) return <h1>LOADING!!!!</h1>;
    return (
      <>
      <Characters charactersArray={this.state.charactersArray}/>
      </>
    );
  }


}
