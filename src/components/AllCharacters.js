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
    // this.setState({ loading:true });
    // fetchCharacters()
    //   .then(characters=>{
    //     console.log('characters', characters);
    //     this.setState({ charactersArray:characters.results });
    //   })
    //   .then(()=>{
    //     this.setState({ loading:false });
    //   });
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count  !== this.state.page) {  
      console.log('update page with new page');
      //this.updatePage();
    }
  }

  incrementPage = (test)=>{
    console.log(test);
    let page = this.state.page;
    if(page >= 20) return;
    page++;
    this.setState({ page: page }); 
  }

  decrementPage = ()=>{
    let page = this.state.page;
    if(page <= 1) return;
    page--;
    this.setState({ page: page });
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
