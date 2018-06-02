'use strict'

import React from 'react';
import actions from '../actions';
import resultStore from '../stores/resultStore';

import SearchField from './SearchField';
import SearchResults from './SearchResults';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: resultStore.getState().results,
      query: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
  // TODO
<<<<<<< HEAD
  this.removeListener = resultStore.addListener( ({results}) => {
=======
  this.removeListener = resultStore.addListener( {results} => {
>>>>>>> 1245b638d83ca63e96ef6bfe2782abf2dadca139
   this.setState({results});
})
}
componentWillUnmount() {
  // TODO
  this.removeListener()
}

handleChange(ev){
  const query = ev.target.value
  this.setState({query})

  if (query.length > 2) {
     actions.search(query);
   }
}


  render() {
    const{results, query} = this.state
    return (
      <div className = "autocomplete">
        <h2>Autocomplete</h2>
        <SearchField value = {query} onChange={this.handleChange} />
        <SearchResults results = {results} />
      </div>
    );
  }
}

export default Autocomplete;
