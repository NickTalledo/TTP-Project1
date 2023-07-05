import { Form, useLoaderData, Link, redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export async function loader({ params }) {
  const movieResponse = await fetch(
    `http://localhost:3000/movies/${params.id}`
  );
  const movie = await movieResponse.json();
  return { movie };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const preparedmovie = {
    ...updates,
    year: parseInt(updates.year),
    length: parseInt(updates.length),
  };
  const response = await fetch(`http://localhost:3000/movies/${params.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedmovie),
  });

  return redirect(`/movies/review/${params.id}`);
}

function EditMovie() {
  const { movie } = useLoaderData();

  return (
    <div>
      <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
        <Link to={`/movies/review/${movie.id}`}>{"<"} Back</Link>
        <h2 className="text-xl">
          <strong>Edit Movie</strong>
        </h2>
        <fieldset className="flex flex-col">
          <label htmlFor="title" className="bg-white text-black">
            Movie Title:{" "}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-black border-4 focus:outline-none p-2"
            defaultValue={movie.title}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="director" className="bg-white text-black">
            Director(s):{" "}
          </label>
          <input
            type="text"
            name="director"
            id="director"
            className="bg-black border-4 focus:outline-none p-2"
            defaultValue={movie.director}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="year" className="bg-white text-black">
            Year:{" "}
          </label>
          <input
            type="number"
            name="year"
            id="year"
            className="bg-black border-4 focus:outline-none p-2"
            defaultValue={movie.year}
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="genre" className="bg-white text-black">
            Genre:{" "}
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            className="bg-black border-4 focus:outline-none p-2"
            defaultValue={movie.genre}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="length" className="bg-white text-black">
            Length:{" "}
          </label>
          <input
            type="number"
            name="length"
            id="length"
            className="bg-black border-4 focus:outline-none p-2"
            defaultValue={movie.length}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="country" className="bg-white text-black">
            Country:{" "}
          </label>
          <input
            type="text"
            name="country"
            id="country"
            className="bg-black border-4 focus:outline-none p-2"
            defaultValue={movie.country}
          />
        </fieldset>
        <input
          className="bg-black hover:bg-red-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
      </Form>
    </div>
  );
}

export default EditMovie;
