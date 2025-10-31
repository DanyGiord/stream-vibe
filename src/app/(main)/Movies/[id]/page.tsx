
import { fetchMovieDetails } from "../../../../services/tmdbService"; // Import the movie service

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  // Await the params to ensure you have the actual id value
  const { id } = await params; // Unwrap the promise and get the id from params

  try {
    const movie = await fetchMovieDetails(id); // Fetch movie details using the ID

    // Check if poster_path exists before rendering the image
    const imageUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null; // If no poster_path, set imageUrl to null

    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        {imageUrl ? (
          <img src={imageUrl} alt={movie.title} width={500} height={750} />
        ) : (
          <p>No image available</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return <div>Error loading movie details. Please try again later.</div>;
  }
};

export default MovieDetailPage;
