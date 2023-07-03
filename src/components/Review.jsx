import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Review = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Movie ID:", id);
    console.log("Rating:", rating);
    console.log("Review:", review);

    setRating(0);
    setReview("");
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="max-w-lg mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Leave a Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="rating" className="font-semibold text-black">
                Rating:
              </label>
              <select
                id="rating"
                value={rating}
                onChange={handleRatingChange}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              >
                <option value={0}>Select Rating</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="review" className="font-semibold text-black">
                Review:
              </label>
              <textarea
                id="review"
                value={review}
                onChange={handleReviewChange}
                rows={4}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Review;
