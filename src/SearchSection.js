import React, { Component } from 'react'

export default class SearchSection extends Component {
    



    render() {
      
        return (
        <div>
            <section className="options-section">

                <p>Search Pokemon:</p>

                <input onChange={this.props.onChange} name="search" />
                <button onClick={this.props.onClick}></button>
                {this.props.page > 1 && <button onClick={this.props.onPrevClick}>Previous</button>}
                <button onClick={this.props.onNextClick}>Next</button>
                

            </section> 

          <section className="types">

              <select className="pokemon-types" onChange={this.props.typeChange}>
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
          
        </div>
        )
    }
}
