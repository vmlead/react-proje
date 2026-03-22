import axios from "axios";

const API_KEY = "your_key";

export const getMovies = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return res.data.results;
};

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className="text-white mt-2">{movie.title}</h2>
      <p className="text-gray-400">⭐ {movie.vote_average}</p>
    </div>
  );
};