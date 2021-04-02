
import './App.css';
import MovieList from './components/movieList/MovieList';
import NavBar from './components/NavBar';
import React, {useState} from 'react'
import AddMovie from "./components/addMovie/AddMovie";

function App () {
   const [movies, setMovies] = useState([
  {
    title: "The last samurai",
    description:
      "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
    posterUrl:
      "https://i.pinimg.com/originals/d3/3e/15/d33e15f261a60676fd6755cb21dcd6ea.jpg",
    rate : 4,
  },
  
  {
    title: "Eien no zero",
    description:
      "a Zero fighter story based on a fictional war.",
    posterUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdmEdefbDm-uVh8OI3gyPVVXcpcyRZYcY7HcWw_XkKBBcCJ1eK",
    rate : 4,
  },
  {
    title: "Spirited away",
    description:
      "he story of Chihiro Ogino (Hiiragi), a 10-year-old girl who, while moving to a new neighbourhood, enters the world of Kami.",
    posterUrl:
      "http://image.tmdb.org/t/p/original/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
    rate : 5,
  },
  {
    title: "Titanic",
    description:
      "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
    rate : 4,
  },
  
]);
   const [searchRate, setSearchRate] = useState(0);
   const [searchTitle, setSearchTitle] = useState("");
   const getRateSearch = (inputrate) => {
     setSearchRate (inputrate)
   }
   const getTitleSearch = (inputTitle) => {
     setSearchTitle (inputTitle)
   }
   const getNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div>
       <NavBar getRateSearch={getRateSearch} getTitleSearch={getTitleSearch}/>
       <div className="addMovieBtn"> <AddMovie getNewMovie={getNewMovie}/>
       </div>
       <MovieList myMoviesList={movies} searchRate={searchRate} searchTitle={searchTitle}/>
       
       
    </div>
  );
}

export default App;
