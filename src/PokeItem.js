import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
const {_id, pokemon, ability_hidden, type_1, type_2, url_image } = this.props.pokemon;

        return (
            <section>
            <li>
        <Link to={`/pokemon/${_id}`}>
        <h1>{pokemon}</h1>
                            
        <img src={url_image}
            alt={pokemon}>
                
            </img>

        <h2>{type_1}{type_2}</h2>
        <h2>{ability_hidden}</h2>
        </Link>
        </li>
        </section>
        )
    }
}