import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="bg-black text-white  pt-4 pr-4 pb-4 pl-4 min-h-screen">
        <h1 className="text-5xl pt-5 pb-8 text-center flex justify-center">
          ¿Qué puedo mirar?
          <span
            className="material-symbols-outlined text-[#4338CA] ml-[.2em]"
            style={{ fontSize: "1em" }}
          >
            live_tv
          </span>
        </h1>
        <div className="flex">
          <div className="w-[60%]">
            <SearchMovies />
            <MoviesList />
          </div>
          <div className="w-[40%] ml-5 items-center">
            <WatchList />
          </div>
        </div>
      </div>
    </>
  );
}
