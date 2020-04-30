import React, { Component } from 'react'
import request from 'superagent';
import PokeList from './PokeList.js';


export default class App extends Component {

  state = {
    searchQuery: '',
    data: [{}]
  }


  handleChange = (event) => {
    const value = (event.target.value)
    this.setState({ searchQuery: value})

  }

  handleClick = async () => {
    
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);


    this.setState({ data: fetchedData.body.results });
  }
  
  render() {
    
    
    
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick} />

        {
          this.state.data.map(item => {
           return <PokeList pokemon= {item}/>
            
          })
        }

      </div>
    )
  }
}
