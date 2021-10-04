
import './App.css';
import React, {useState, useEffect} from 'react'
import Footer from './components/common_files/Footer'
import Header from './components/common_files/Header'
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';


const App = () => {

  const[pokemons, setPokemons] = useState([])
  const [loadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=150&offset=20')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);




 useEffect(()=>{
  const getAllPokemons = async () => {
    try {
      const res = await fetch(loadPokemon)
      const data = await res.json()
   
      function createPokemonObject(results)  {
      results.forEach( async pokemon => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data =  await res.json()
      setPokemons( list => [...list, data])
       
        })
      }
      createPokemonObject(data.results)
    } catch (error) {
      console.log(error)
    }
   }
   getAllPokemons();
 },[]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
   
    <div className="container-fluid app_wrapper">
      <Header/>
      <PokemonList pokemons={currentPosts}/>
      <Pagination  postsPerPage={postsPerPage} totalPosts={pokemons.length} paginate={paginate} />
      <Footer/>
  
    </div>
   
  )
}

export default App
