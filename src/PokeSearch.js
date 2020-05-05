import React, { Component } from 'react'
import SearchSection from './SearchSection';
import request from 'superagent'
import PokeItem from './PokeItem.js';


export default class PokeSearch extends Component {

    state = {
        searchQuery: '',
        data: [{}],
        selected: '',
        page: 1
      }

        async componentDidMount() {
            
            const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
console.log(data)
            this.setState({ data: data.body.results })

        }


      handleChange = (event) => {

        const value = (event.target.value)
        this.setState({ searchQuery: value})
    
      }

      handleClick = async () => {

        if (this.state.selected === '') {
    
          const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}`);
    
    
        this.setState({ data: fetchedData.body.results, page: 1 });
        } else {
    
          const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${this.state.selected}`);
      
      
        this.setState({ data: fetchedData.body.results, page: 1 });
        }
      
    }

    handleTypeChange = async (event) => {

        this.setState({ selected: event.target.value })
    
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&type=${event.target.value}`);
      
        this.setState({ data: fetchedData.body.results });
      }

      moveToNextPage = async () => {
        
        const nextPage = this.state.page + 1;
        this.setState({ page: nextPage })

        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${nextPage}`);
        
        const results = response.body.results;
        this.setState({ data: results})
      }
      
      moveToPrevPage = async () => {
        const prevPage = this.state.page - 1;
        this.setState({ page: prevPage })

        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&page=${prevPage}`);
        const results = response.body.results;
        
        this.setState({data: results})
      }
      
      render() {

        return (
          
          <main>

        <SearchSection
            className="list-section"
            page = {this.state.page}
            onChange={this.handleChange}
            onClick={this.handleClick}
            typeChange={this.handleTypeChange}
            onNextClick={this.moveToNextPage}
            onPrevClick={this.moveToPrevPage}
            
        />
        {}

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
