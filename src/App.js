// hook
import { useState } from 'react';

// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld';
import Player from './components/Player';
import PokemonsDisplay from './components/PokemonsDisplay';
import RestoApp from './components/RestoApp';
import ToDoApp from './components/ToDoApp';

import { Route, Link } from 'react-router-dom';

function App() {
  // const [players, setPlayers] = useState([
  //   { name: 'Jordan', number: 23 },
  //   { name: 'James', number: 23 },
  //   { name: 'Bryant', number: 24 },
  // ]);

  // const [count, setCount] = useState(0);

  // let pokemons = [
  //   {
  //     id: "#001",
  //     name: "Bulbasaur",
  //     type: "Grass",
  //     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  //   },
  //   {
  //     id: "#004",
  //     name: "Charmander",
  //     type: "Fire",
  //     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  //   },
  //   {
  //     id: "#007",
  //     name: "Squirtle",
  //     type: "Water",
  //     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
  //   }
  // ];

  // let playersDisplay = players.map(player => <Player playerName={player.name} number={player.number} />)

  const [tasks, setTasks] = useState([
    {name: 'eat', status: 'pending'},
    {name: 'code', status: 'done'},
    {name: 'sleep', status: 'pending'},
  ]);

  const addTask = (task) => {
    let tasksCopy = [...tasks, task];

    setTasks(tasksCopy);
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Halo-halo App</h1>
          <Link className="App-link" to="/todoapp">To Do App</Link>
          <Link className="App-link" to="/restoapp/home">Resto App</Link>
          <Route path="/todoapp">
            <ToDoApp tasks={tasks} setTasks={setTasks} addTask={addTask} />
          </Route>
          <Route path="/restoapp" component={RestoApp} />
      </header>
    </div>
  );
}

export default App;
