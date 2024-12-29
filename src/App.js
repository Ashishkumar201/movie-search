import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/searchbar';
import MovieList from './components/MovieList';
import './styles.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const fetchMovies = async (query) => {
    const API_KEY = 'cd78e7c9'; // Replace with your OMDb API key
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

    try {
      const response = await axios.get(API_URL);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch (err) {
      setMovies([]);
      setError('Failed to fetch movies. Please try again later.');
    }
  };

  return (
    <div className="app">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={fetchMovies} />
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;



