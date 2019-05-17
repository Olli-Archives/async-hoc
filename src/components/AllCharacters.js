import React, { Component } from 'react';
import Characters from './Characters';
import fetchCharacters from '../Service/fetchCharacters';
import { NextButton, PreviousButton } from './NextButton';


export default class AllCharacters extends Component{
  state={
    charactersArray: [],
    loading: false,
    page:1
  }

  updatePage(){
    this.setState({ loading:true });
    fetchCharacters(this.state.page)
      .then(characters=>{
        console.log('characters', characters);
        this.setState({ charactersArray:characters.results });
      })
      .then(()=>{
        this.setState({ loading:false });
      });
  }


  componentDidMount(){
    this.updatePage();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.page, this.state.page);
    if(prevState.page  !== this.state.page) {  
      this.updatePage();
    }
  }

  incrementPage = ()=>{
   
    if(this.state.page >= 20) return;
    this.setState((state)=>{
      return { page: state.page + 1 };
    });
     
  }

  decrementPage = ()=>{
    if(this.state.page <= 1) return;
    this.setState((state)=>{
      return { page: state.page - 1 };
    });
  }
  

  render(){
    if(this.state.loading === true) return <h1>LOADING!!!!</h1>;
    return (
      <>
      <NextButton incrementCount={this.incrementPage}/>
      <PreviousButton decrementCount={this.decrementPage}/>
      <Characters charactersArray={this.state.charactersArray}/>
      </>
    );
  }


}
