// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

const API_KEY = "b7d4916d0799dfce932437fe9f242f2c";

const getMovies = async (title) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
    title
  )}&page=1&include_adult=false`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error en la petición:", err);
    throw err;
  }
};

export default getMovies;
