import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import movieData from "./utils/movies";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesClone = [...movieData];
    const filteredMovies = moviesClone.filter((movies) => {
      return movies.title.toUpperCase().includes(search.toUpperCase());
    });
    setMovies(filteredMovies);
  });

  return (
    <>
      <h1>MovieBox</h1>
      <Search search={search} setSearch={setSearch} />
      <Movies movies={movies} />
    </>
  );
}

export default App;
