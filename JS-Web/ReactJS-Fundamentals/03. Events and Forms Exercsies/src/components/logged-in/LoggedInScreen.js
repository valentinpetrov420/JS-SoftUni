import React, { Component } from 'react';
import AddPokemonForm from './AddPokemonForm';
import Pokemon from './Pokemon';

class LoggedInScreen extends Component {
    constructor(){
        super();

        this.state = {
            pokeArray: []
        };
    }
    componentDidMount(){
        fetch(
            'http://localhost:5000/pokedex/pokedex',)
            .then(rawData => rawData.json())
            .then(response => this.setState({pokeArray: response.pokemonColection}));
    }

    render() {
        return(
            <div>
                <AddPokemonForm/>
                {this.state.pokeArray.map(pokemon => <Pokemon item={pokemon}/>)}
            </div>
        )
    }
}

export default LoggedInScreen;