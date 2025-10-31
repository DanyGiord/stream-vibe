import Link from "next/link";
import Image from "next/image";

const fetchMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return data.results;
};

const MoviesPage = async () => {
  const movies = await fetchMovies();

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/Movies/${movie.id}`}>
              <h3>{movie.title}</h3>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
