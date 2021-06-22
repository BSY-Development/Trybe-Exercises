import './App.css';
import pokemons from './data';
import CreatePokemon from './CreatePokemon'


function App() {
  const items = pokemons.map((poke) => {
    return <CreatePokemon key={poke.id} pokemon={poke}/>
  })
  return (
    <div className='outside-div'>{items}</div>
  );
}

export default App;
