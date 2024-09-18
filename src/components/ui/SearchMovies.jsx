import { useState, useContext } from "react";
import { MoviesDispatchContext } from "../contexts/MoviesContext";

export default function SearchMovies() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [msg, setMsg] = useState("");

  const { fetchMovies } = useContext(MoviesDispatchContext);

  const handleSearch = async () => {
    if (title) {
      const yearNumber = year ? parseInt(year, 10) : null;
      await fetchMovies(title, yearNumber);
      setMsg("");
    } else {
      setMsg("Por favor ingresa un título para la búsqueda.");
    }
  };

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-medium mb-4">Buscar</h2>
        <div className="flex justify-evenly items-end">
          <div className="w-100">
            <p>Título</p>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-md h-8 w-100 text-black"
            />
          </div>
          <div>
            <p>Año hasta</p>
            <input
              type="number"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-md h-8 w-100 text-black"
            />
          </div>
          <button
            onClick={handleSearch}
            className="flex bg-indigo-700 p-2 h-10 w-70 rounded-md"
          >
            Buscar<span className="material-symbols-outlined ml-1">search</span>
          </button>
        </div>
      </div>
      {msg && ( // En caso de no haber ingresado título, muestra un mensaje
        <p className="flex">
          <span className="material-symbols-outlined mr-1 text-red-700">
            error
          </span>
          {msg}
        </p>
      )}
    </>
  );
}
