import React from 'react';
import Pokemon from './Pokemon';

class PokemonsDisplay extends React.Component {
    state = {
        items: [],
        score: 10,
        types: ['Grass', 'Fire', 'Water']
    }

    addScore = (num) => {
        this.setState({
            score: this.state.score + num,
        });
    }

    minusScore = () => {
        this.setState({
            score: this.state.score - 1,
        });
    }

    pokemonsDisplay = this.props.pokemons.map(pokemon =>
        <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
        />
    )

    render() {
        return (
            <div>
                {
                    this.state.types.map(type => <button>{type}</button>)
                }

                <button onClick={this.minusScore}>-</button>
                {this.state.score}
                <button onClick={() => this.addScore(5)}>+</button>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.pokemonsDisplay}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PokemonsDisplay;