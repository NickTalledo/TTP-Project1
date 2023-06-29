import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Movies from "./components/Movies";
import movieData from "./utils/movies";
import Search from "./components/Search";
import Modal from "./components/Modal";
import AddMovie from "./components/AddMovie";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("http://localhost:3000/movieData");
      const movies = await response.json();
      setMovies(movies);
    }

    fetchMovies();
  }, []);

  useEffect(() => {
    const moviesClone = [...movieData];
    const filteredMovies = moviesClone.filter((movies) => {
      return movies.title.toUpperCase().includes(search.toUpperCase());
    });
    setMovies(filteredMovies);
  }, [search]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const onAddMovie = (newMovie) => {
    hideModal();
    setMovies((movies) => {
      return [...movies, newMovie];
    });
  };

  return (
    <>
      <h1>MovieBox</h1>
      <br />
      <div>
        <button
          className="bg-blue-500 px-2 py-2 hover:bg-blue-600 transition"
          onClick={showModal}
        >
          + Add Movie
        </button>
      </div>
      <Modal isVisible={isModalVisible} hideModal={hideModal}>
        <AddMovie onAddMovie={onAddMovie} />
      </Modal>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br /> <br />
      <Movies movies={movies} />
    </>
  );
}

export default App;
