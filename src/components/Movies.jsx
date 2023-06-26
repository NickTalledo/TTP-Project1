import Footer from "./Footer";
import Header from "./Header";

const Movies = ({ movies }) => {
  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
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
      <br />
      <Footer />
    </>
  );
};

export default Movies;
