import {
  Form,
  useLoaderData,
  Link,
  useFetcher,
  Outlet,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaTrash } from "react-icons/fa";

export async function loader({ params }) {
  const movieResponse = await fetch(
    `http://localhost:3000/movies/${params.id}`
  );
  const movie = await movieResponse.json();
  const reviewsResponse = await fetch(
    `http://localhost:3000/reviews?id=${params.id}`
  );
  const reviews = await reviewsResponse.json();
  return { movie, reviews };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  if (formData.get("action") === "deleteReview") {
    const response = await fetch(
      `http://localhost:3000/reviews/${formData.get("reviewId")}`,
      { method: "DELETE" }
    );
    return { ok: true };
  }
  const preparedReview = {
    ...Object.fromEntries(formData),
    timestamp: new Date(),
    id: parseInt(params.id),
    name: formData.get("name"),
    rating: parseInt(formData.get("rating")),
  };
  const response = await fetch("http://localhost:3000/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedReview),
  });
  const review = await response.json();
  return { review };
}

function Review() {
  const { movie, reviews } = useLoaderData();
  const fetcher = useFetcher();
  const { title, director, year, genre, length, country, id } = movie;

  const renderedreviews = reviews.map((review) => {
    return (
      <div
        key={review.id}
        className="relative p-4 pb-6 bg-zinc-900 text-slate-50 rounded-md my-2 flex items-center"
      >
        <div className="flex-grow">
          <p>
            {review.rating} stars : <q>{review.content}</q> - {review.name}
          </p>
        </div>
        <fetcher.Form
          method="post"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <input type="hidden" name="action" value="deleteReview" />
          <input type="hidden" name="reviewId" value={review.id} />
          <button className="ml-4">
            <FaTrash />
          </button>
        </fetcher.Form>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/">{"<"} Back</Link>
        <div className="">
          <h1>Title: {title}</h1>
          <p>
            <i>Director: {director}</i>
          </p>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
          <p>Length: {length} mins</p>
          <p>Country: {country}</p>
          <Link to={`movies/${id}/edit`}>
            <p className="text-xl py-2">Edit</p>
          </Link>
          <Outlet />
        </div>
        <h2 className="text-xl my-2">Reviews</h2>
        <Form className="my-4 flex gap-2" method="post">
          <input
            placeholder="name..."
            className="flex-1 p-2 bg-black"
            name="name"
            required
          />
          <input
            type="number"
            placeholder="rate 1-5..."
            className="flex-1 p-2 bg-black"
            name="rating"
            min="1"
            max="5"
            required
          />
          <input
            placeholder="add a review..."
            className="flex-1 p-2 bg-black"
            name="content"
            required
          />
          <button className="bg-red-500 px-3 text-2xl rounded-sm" type="submit">
            +
          </button>
        </Form>
        <div>{renderedreviews}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Review;
