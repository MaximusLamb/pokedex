import React, { Component } from 'react'
import request from 'superagent';

export default class PokeDetail extends Component {

    state = {
        pokemon: {}
    }

    async componentDidMount() {

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.pokemon}`)

        this.setState({ pokemon: data.body})
    }

    render() {

        const {pokemon, url_image, type_1, type_2, ability_hidden} = this.state.pokemon

        return (
        
          <section>
            <ul>
                <h1>{pokemon}</h1>
                <img 
                src={url_image}
                alt={pokemon}>
                </img>
                <h2>{type_1}{type_2}</h2>
                <h2>{ability_hidden}</h2>
        
            </ul>
        </section>
        
        )
    }
}
