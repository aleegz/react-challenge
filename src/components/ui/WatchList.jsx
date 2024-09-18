import { useContext } from "react";
import {
  MoviesContext,
  MoviesDispatchContext,
} from "../contexts/MoviesContext";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function WatchList() {
  const { watchList } = useContext(MoviesContext);
  const { dispatch } = useContext(MoviesDispatchContext);

  const removeFromWatchList = (movie) => {
    dispatch({ type: "removeFromList", movie });
  };

  return (
    <div>
      <h2 className="text-3xl font-medium mb-3">Mi lista de películas</h2>
      <ul>
        {watchList.length > 0 ? (
          watchList.map((movie) => (
            <li
              key={movie.id}
              className="w-full h-[8em] rounded-lg mb-2 flex items-center justify-between border border-[#4338CA]"
            >
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="h-[7.9em] w-auto rounded-l-lg mr-2"
              />
              <span className="text-lg">
                {movie.title} ({parseInt(movie.release_date.split("-")[0], 10)})
              </span>
              <button
                onClick={() => removeFromWatchList(movie)}
                className="bg-red-600 p-2 rounded-lg ml-4 mr-2"
              >
                Eliminar
              </button>
            </li>
          ))
        ) : (
          <p>No hay películas en tu lista.</p>
        )}
      </ul>
    </div>
  );
}
