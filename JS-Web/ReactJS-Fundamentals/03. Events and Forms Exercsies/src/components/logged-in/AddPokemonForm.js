import React, { Component } from 'react';

class AddPokemonForm extends Component {
    constructor(){
        super();

        this.state = {
            form: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const name = e.target.dataset.name;
        const value = e.target.value;
        const data = {};
        data[name] = value;

        this.setState({
            form: Object.assign(this.state.form, data)
        });
    }
    handleSubmit(e){
        e.preventDefault();

            fetch(
            'http://localhost:5000/pokedex/create',
            {
                method: 'POST', //or 'PUT'
                body: JSON.stringify(this.state.form), //data can be `string` or {obj}
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(data => data.json())
            .then(response => {
                if(response.success && response.token){
                    localStorage.setItem('token', response.token);
                    this.props.setLoggedIn();
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <form>
                <h1>Add Pokemon</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Pokemon Name</label>
                    <input data-name="pokemonName" type="text" onChange={this.handleChange} className="form-control" id="input-pokename" aria-describedby="emailHelp"
                           placeholder="Enter pokemonName"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your pokemonName with anyone. Promise.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="input-pokeImg">Image</label>
                    <input data-name="pokemonImg" type="text" onChange={this.handleChange} className="form-control" id="input-pokeImg" placeholder="Pokemon image..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-pokeInfo">Information</label>
                    <input data-name="pokemonInfo" type="text" onChange={this.handleChange} className="form-control" id="input-Info" placeholder="Pokemon info..."/>
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default AddPokemonForm;