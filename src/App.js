import React,{useState} from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './Component/MovieCard';
import MovieList from './Component/MovieList';
import SearchBar from './Component/SearchBar';

const App= ()=> {
  const [movies, setMovies]=useState([]);
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState('');

  const fetchMovies=async(query)=>{
    console.log("Searching for movies:", query);
    setLoading(true);
    setError('');

    try{
      const response=await axios.get(`https://www.omdbapi.com/?apikey=ec6ee1ee&s=${query}`);

      //console.log(response.data);
      if(response.data.Response==='True'){
        setMovies(response.data.Search);
      } else{
        setError(response.data.Error);
      }
      
    }catch(err){
      setError('An error occurred while fetching data.');
    }

    setLoading(false);

  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={fetchMovies}/>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red", textAlign: "center" , fontWeight: "bold"}}>{error}</p>}
      <MovieList movies={movies}/>
      
    </div>
  );
}

export default App;

