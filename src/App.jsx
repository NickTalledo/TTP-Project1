import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Modal from "./components/Modal";
import AddMovie from "./components/AddMovie";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState(movies);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("http://localhost:3000/movies");
      const movies = await response.json();
      setMovies(movies);
      console.log(movies);
    }

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movies) => {
    return movies.title.toUpperCase().includes(search.toUpperCase());
  });

  // useEffect(() => {
  //   const moviesClone = [...movies];
  //   setFilteredMovies([
  //     ...moviesClone.filter((movies) => {
  //       return movies.title.toUpperCase().includes(search.toUpperCase());
  //     }),
  //   ]);
  // }, [search]);

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
      <Header />
      <h1>
        <strong>MovieBox</strong>
      </h1>
      <br />
      <div>
        <button
          className="bg-red-500 px-2 py-2 hover:bg-red-600 transition"
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
      <Movies movies={filteredMovies} />
    </>
  );
}

export default App;
