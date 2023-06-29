import Footer from "./Footer";
import Header from "./Header";
import { PropTypes } from "prop-types";

const Movies = ({ movies }) => {
  return (
    <>
      <Header />
      <div className="card-container">
        {movies.map((movie) => {
          const { image, title, director, year, genre, length, country } =
            movie;

          return (
            <div key={title} className="card">
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
            </div>
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
      title: PropTypes.string,
      director: PropTypes.string,
      year: PropTypes.number,
      genre: PropTypes.string,
      length: PropTypes.number,
      country: PropTypes.string,
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
