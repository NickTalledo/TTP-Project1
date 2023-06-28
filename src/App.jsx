import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Movies from "./components/Movies";
import movieData from "./utils/movies";
import Search from "./components/Search";
import Modal from "./components/Modal";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(1);

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

  const handleAddJobFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>MovieBox</h1>
      <div>
        <button
          className="bg-blue-500 px-4 py-5 hover:bg-blue-600 transition"
          onClick={showModal}
        >
          + Add Movie
        </button>
      </div>
      <Modal isVisible={isModalVisible} hideModal={hideModal}>
        <form
          onSubmit={handleAddJobFormSubmit}
          className="selection:bg-blue-200 flex flex-col gap-2"
        >
          <h2>Add Movie</h2>
          <fieldset className="flex flex-col">
            <label htmlFor="image">Movie Image URL: </label>
            <input
              type="url"
              name="image"
              id="image"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="title">Movie Title: </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="director">Director(s): </label>
            <input
              type="text"
              name="director"
              id="director"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="year">Year: </label>
            <input
              type="number"
              name="year"
              id="year"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="genre">Genre: </label>
            <input
              type="text"
              name="genre"
              id="genre"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="length">Length: </label>
            <input
              type="number"
              name="length"
              id="length"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              name="country"
              id="country"
              className="bg-white border-4 focus:outline-none p-2"
            />
          </fieldset>
          <input
            className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
            type="submit"
          ></input>
        </form>
      </Modal>
      <Search search={search} setSearch={setSearch} />
      <br /> <br />
      <Movies movies={movies} />
    </>
  );
}

export default App;
