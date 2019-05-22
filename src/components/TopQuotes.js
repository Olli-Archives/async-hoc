import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getQuotes from '../service/getQuotes';
import Quotes from './Quotes';

export default class TopQuotes extends PureComponent{
  static propTypes = {
    count: PropTypes.number.isRequired
  }
  state={
    count: 3,
    quotes: [],
    loading: false
  }


  fetchQuotes = ()=>{
    this.setState({ loading:true });
    getQuotes(this.state.count)
      .then(quotes=>{
        console.log('received quotes are', quotes);
        this.setState({ quotes:quotes });
      })
      .then(()=>{
        this.setState({ loading:false });
      });
    console.log('count is', this.state.count);

  }

  componentDidMount(){
    this.fetchQuotes();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.count  !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render(){
    const { loading, quotes } = this.state;
    if(loading) return <h1>loading</h1>;
    return (<Quotes quotes={quotes}/>);
  }
}
