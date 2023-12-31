import { Link } from "react-router-dom";
import Footer from "./Footer";
import PropTypes from "prop-types";

export async function loader({ params }) {
  let url = "http://localhost:3000/movieData";
  if (params.id) {
    url += `?id=${[params.id]}`;
  }
  const response = await fetch(url);
  const movies = await response.json();
  return { movies };
}

const Movies = ({ movies }) => {
  return (
    <>
      <div className="card-container">
        {movies.map((movie) => {
          const { image, title, director, year, genre, length, country, id } =
            movie;

          return (
            <Link to={`/movies/review/${id}`} key={id} className="card">
              {image ? (
                <img src={image.src} alt={image.alt} style={{ width: "75%" }} />
              ) : (
                <img
                  src="https://placehold.co/300x400"
                  alt="No company logo available"
                />
              )}

              <div className="container">
                <h3>
                  <b>
                    {title} ({year})
                  </b>
                </h3>

                <p>Director: {director}</p>
                <p>Genre: {genre}</p>
                <p>Length: {length} mins</p>
                <p>Country: {country}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <br /> <br />
      <Footer />
    </>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.number,
    })
  ),
};

export default Movies;

{
  /* 
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title (year)</th>
            <th>Director(s)</th>
            <th>Length</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(({ title, year, director, length, country }) => {
            return (
              <tr key={`${title}${year}`}>
                <td>
                  {title} ({year})
                </td>
                <td>{director}</td>
                <td>{length}</td>
                <td>{country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br /> */
}
