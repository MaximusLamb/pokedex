import React, { Component } from 'react'
import request from 'superagent';
import PokeList from './PokeList.js';


export default class App extends Component {

  state = {
    searchQuery: '',
    data: [{}],
    selected: ''
  }
  

  handleChange = (event) => {
    const value = (event.target.value)
    this.setState({ searchQuery: value})

  }

  handleTypeChange = async (event) => {

    this.setState({ selected: event.target.value })

    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${event.target.value}`);
  
  
    this.setState({ data: fetchedData.body.results });
  }

  handleClick = async () => {

    if (this.state.selected === '') {

      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);


    this.setState({ data: fetchedData.body.results });
    } else {

      const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.selected}`);
  
  
    this.setState({ data: fetchedData.body.results });
    }
  }
  
  render() {
    
    
    
    return (
      <main>
      
  <section className="types">
    <select className="pokemon-types" onChange={this.handleTypeChange}>
      <option value="" defaultValue>
        All Types
      </option>
      <option value="bug">Bug</option>
      <option value="dark">Dark</option>
      <option value="dragon">Dragon</option>
      <option value="electric">Electric</option>
      <option value="fairy">Fairy</option>
      <option value="fighting">Fighting</option>
      <option value="fire">Fire</option>
      <option value="flying">Flying</option>
      <option value="ghost">Ghost</option>
      <option value="grass">Grass</option>
      <option value="ground">Ground</option>
      <option value="ice">Ice</option>
      <option value="normal">Normal</option>
      <option value="poison">Poison</option>
      <option value="psychic">Psychic</option>
      <option value="rock">Rock</option>
      <option value="steel">Steel</option>
      <option value="water">Water</option>
    </select>
  </section>
      <div>

          <input onChange={this.handleChange} />
          <button onClick={this.handleClick}>Search</button>
      <div>
        <ul className="PokemonList">
        {
          this.state.data.map(item => {
            return <PokeList pokemon={item}/>
          })
        }

        </ul>
        
      </div>
      </div>
      </main>
    )
  }
}
