import React, { Component } from 'react'
import SearchSection from './SearchSection';
import request from 'superagent'
import PokeItem from './PokeItem.js';


export default class PokeSearch extends Component {

    state = {
        searchQuery: '',
        data: [{}],
        selected: ''
      }

        async componentDidMount() {
            const query = this.state.query;
            
            const data = await request.get('')

            this.setState({ pokemon: data.body })

        }


      handleChange = (event) => {
          console.log('handleChange')
        const value = (event.target.value)
        this.setState({ searchQuery: value})
    
      }

      handleClick = async () => {
console.log('handleClick')
        if (this.state.selected === '') {
    
          const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
    
    
        this.setState({ data: fetchedData.body.results});
        } else {
    
          const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.selected}`);
      
      
        this.setState({ data: fetchedData.body.results });
        }
      
    }

    handleTypeChange = async (event) => {

        this.setState({ selected: event.target.value })
    
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${event.target.value}`);
      
        this.setState({ data: fetchedData.body.results });
      }


        render() {
        return (

        <main>

        <SearchSection
         className="list-section"
            onChange={this.handleChange}
            onClick={this.handleClick}
            typeChange={this.handleTypeChange}
        />

                <div>
                  <ul className="PokemonList">
                  {
                    this.state.data.map(item => {
                      return <PokeItem pokemon={item}/>
                    })
                  }
          
                  </ul>
                  
                </div>
        </main>
        )

    }
}
