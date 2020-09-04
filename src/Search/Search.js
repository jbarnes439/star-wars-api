import React from 'react'
import Results from '../Results/Results'

export default class Search extends React.Component {
  state = {
    searchValue: {
      searchValue: '',
      touched: false
    },
    searchFilter: {
      searchFilter: null,
      touched: false
    },
    results: [],
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: {
        [target.name]: target.value,
        touched: true
      },
    })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const baseUrl = `https://swapi-thinkful.herokuapp.com/api/${this.state.searchFilter.searchFilter}/?search=${this.state.searchValue.searchValue}`
    //fetch call: get info from state    
    // loading handler?? (let's make a successful call first)
    fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        return response.json().then(e => Promise.reject(e))
      }
      return response.json()
    })
    .then((results) => {
      this.setState({ results : results.results })
      })

    .then(this.setState({
      searchValue: {
        searchValue: '',
        touched: false
      },
      searchFilter: {
        searchFilter: this.state.searchFilter.searchFilter,
        touched: false
      },
    }))
  }

  render() {
    console.log(this.state.results)
    return (
      <div>
        <form className='search__form' onSubmit={e => this.handleSearchSubmit(e)}>
          <label htmlFor='searchCriteria'>Your Star Wars knowledge awaits...</label>
          <input
            type='text'
            className='search__form'
            name='searchValue'
            id='searchValue'
            value={this.state.searchValue.searchValue}            
            onChange={e => this.handleInputChange(e)}
          />
          <select name='searchFilter' onChange={e => this.handleInputChange(e)}>
            <option value={this.state.searchFilter.searchFilter}> ---Select One--- </option>
            <option value='people'> Characters </option>
            <option value='planets'> Planets </option>\
            <option value='films'> Movies </option>
            <option value='species'> Species </option>
            <option value='vehicles'> Vehicles </option>
            <option value='starships'> StarShips </option>
          </select>
          <button
          className='search__form'
          type='submit'> Search </button>
        </form>
        <Results searchResults={this.state.results} />
      </div>
    )
  }
}