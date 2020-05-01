import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return (
        <div>
        <h1>{this.props.pokemon.pokemon}</h1>
                            
        <img src={this.props.pokemon.url_image}
        alt={this.props.pokemon.pokemon}></img>

        <h2>{this.props.pokemon.type_1}{this.props.pokemon.type_2}</h2>
        <h2>{this.props.pokemon.ability_hidden}</h2>
        </div>)
    }
}