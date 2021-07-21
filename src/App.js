// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld';
import Player from './components/Player';
import PokemonsDisplay from './components/PokemonsDisplay';
import RestoApp from './components/RestoApp';

function App() {
  let players = [
    { name: 'Jordan', number: 23 },
    { name: 'James', number: 23 },
    { name: 'Bryant', number: 24 },
  ];

  let pokemons = [
    {
      id: "#001",
      name: "Bulbasaur",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    },
    {
      id: "#004",
      name: "Charmander",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    },
    {
      id: "#007",
      name: "Squirtle",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    }
  ];


  return (
    <div className="App">
      <header className="App-header">
        <RestoApp />
      </header>
    </div>
  );
}

export default App;
