import { createContext, useReducer } from "react";
import getMovies from "../../services/movies";

export const MoviesContext = createContext(null);
export const MoviesDispatchContext = createContext(null);

function moviesReducer(state, action) {
  switch (action.type) {
    case "setMovies":
      return { ...state, movies: action.movies };
    case "setFilteredMovies":
      return { ...state, filteredMovies: action.filteredMovies };
    case "setMsg":
      return { ...state, msg: action.msg };
    case "addToList":
      return { ...state, watchList: [...state.watchList, action.movie] };
    case "removeFromList":
      return {
        ...state,
        watchList: state.watchList.filter((m) => m.id !== action.movie.id),
      };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export default function MoviesContextProvider({ children }) {
  const [state, dispatch] = useReducer(moviesReducer, {
    movies: [],
    filteredMovies: [],
    watchList: [],
    msg: "", // en caso de que la búsqueda no encuentre resultados se pasará un mensaje al componente movieList
  });

  const fetchMovies = async (title, year = null) => {
    try {
      const data = await getMovies(title);

      const filteredMovies = year
        ? data.results.filter((movie) => {
            const movieYear = parseInt(movie.release_date.split("-")[0], 10);
            return movieYear <= year;
          })
        : data.results; // Si no hay año establecido, usar todas las películas

      if (filteredMovies.length === 0) {
        dispatch({
          type: "setMsg",
          msg: "No se encontraron películas",
        });
      } else {
        dispatch({ type: "setMsg", msg: "" });
      }

      dispatch({ type: "setFilteredMovies", filteredMovies });
    } catch (error) {
      console.error("Error al buscar las películas:", error);
    }
  };

  return (
    <MoviesContext.Provider value={state}>
      <MoviesDispatchContext.Provider value={{ dispatch, fetchMovies }}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesContext.Provider>
  );
}
