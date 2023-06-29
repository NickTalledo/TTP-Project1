import { useState } from "react";

const initialMovieFormState = {
  title: "",
  director: "",
  year: 0,
  genre: "",
  length: 0,
  country: "",
};

function AddMovie({ onAddMovie }) {
  const [movieFormState, setMovieFormState] = useState(initialMovieFormState);

  const handleInputChange = (e) => {
    setMovieFormState((movieFormState) => {
      return {
        ...movieFormState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddMovieFormSubmit = async (e) => {
    e.preventDefault();
    setMovieFormState(initialMovieFormState);
    const preparedMovie = {
      ...movieFormState,
      year: parseInt(movieFormState.year),
      length: parseInt(movieFormState.length),
    };
    const response = await fetch("http://localhost:3000/movieData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedMovie),
    });
    console.log("response", response);
    const savedMovie = await response.json();
    console.log("savedMovie", savedMovie);
    onAddMovie(savedMovie);
  };

  return (
    <form
      onSubmit={handleAddMovieFormSubmit}
      className="selection:bg-blue-200 flex flex-col gap-2"
    >
      <h2 className="text-xl">
        <strong>Add Movie</strong>
      </h2>
      <fieldset className="flex flex-col">
        <label htmlFor="title">Movie Title: </label>
        <input
          onChange={handleInputChange}
          value={movieFormState.title}
          type="text"
          name="title"
          id="title"
          className="bg-white border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="director">Director(s): </label>
        <input
          onChange={handleInputChange}
          value={movieFormState.director}
          type="text"
          name="director"
          id="director"
          className="bg-white border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="year">Year: </label>
        <input
          onChange={handleInputChange}
          value={movieFormState.year}
          type="number"
          name="year"
          id="year"
          className="bg-white border-4 focus:outline-none p-2"
        />
      </fieldset>

      <fieldset className="flex flex-col">
        <label htmlFor="genre">Genre: </label>
        <input
          onChange={handleInputChange}
          value={movieFormState.genre}
          type="text"
          name="genre"
          id="genre"
          className="bg-white border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="length">Length: </label>
        <input
          onChange={handleInputChange}
          value={movieFormState.length}
          type="number"
          name="length"
          id="length"
          className="bg-white border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="country">Country: </label>
        <input
          onChange={handleInputChange}
          value={movieFormState.country}
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
  );
}

export default AddMovie;
