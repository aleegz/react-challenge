import { useContext } from "react";
import {
  MoviesContext,
  MoviesDispatchContext,
} from "../contexts/MoviesContext";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieList() {
  const { watchList, filteredMovies, msg } = useContext(MoviesContext);
  const { dispatch } = useContext(MoviesDispatchContext);

  const toggleMovieInList = (movie) => {
    const isInWatchList = watchList.some((m) => m.id === movie.id);

    if (isInWatchList) {
      dispatch({ type: "removeFromList", movie });
    } else {
      dispatch({ type: "addToList", movie });
    }
  };

  const topMovies = filteredMovies.slice(0, 3); // Filtra y muestra solo las 3 primeras películas

  return (
    <>
      {msg ? ( // En caso de que no se hayan encontrado películas muestra un mensaje
        <p className="flex">
          <span className="material-symbols-outlined mr-1 text-red-700">
            error
          </span>
          No se encontraron películas
        </p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {topMovies.map((movie) => (
            <li key={movie.id} className="flex items-center mb-2">
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-[100px] h-auto mr-[10px]"
              />
              <div>
                <p className="font-medium text-xl">{movie.title}</p>
                <p>Año: {parseInt(movie.release_date.split("-")[0], 10)}</p>
                <p>
                  Popularidad: {movie.popularity} / Puntaje:{" "}
                  {movie.vote_average}
                </p>
                <button
                  onClick={() => toggleMovieInList(movie)}
                  className="bg-indigo-700 p-2 rounded-lg mt-3"
                >
                  {watchList.some((m) => m.id === movie.id)
                    ? "Quitar de mi lista"
                    : "Agregar a mi lista"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
