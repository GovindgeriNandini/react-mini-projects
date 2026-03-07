import { useState, useMemo } from "react";
import { moviesData } from "./moviesData.js";



import "./TollywoodMovies.css";

const TollywoodMovies = () => {
  const [loading, setLoading] = useState(false);
  const [selectGenre, setSelectGenre] = useState("All");
  const [movies, setMovies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");

  const getRatingCategory = (rating) => {
    if (rating >= 9.0) return "Blockbuster";
    if (rating >= 8.5) return "SuperHit";
    if (rating >= 7.5) return "Hit";
    return "Average";
  };
  const genres = ["All", ...new Set(moviesData.map((movie) => movie.genre))];

  const sortedAndFilteredMovies = useMemo(() => {
    const filtered = moviesData.filter((movie) => {
      const searchLower = searchTerm.toLowerCase();
      const matchSearch =
        movie.title.toLowerCase().includes(searchLower) ||
        movie.genre.toLowerCase().includes(searchLower) ||
        movie.cast.some((actor) => actor.toLowerCase().includes(searchLower)) ||
        movie.year?.toString().includes(searchTerm);

      const matchGenre = selectGenre === "All" || movie.genre.trim().toLowerCase()=== selectGenre.toLowerCase();
      return matchSearch && matchGenre;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;

        case "genre":
          return a.genre.localeCompare(b.genre);

        case "year":
          return b.year - a.year;
        case "title":
        default:
          return a.title.localeCompare(b.title);
      }
    });
  }, [movies, searchTerm, selectGenre, sortBy]);


  return (
    <div className="tollywood-movies">
      <h1>Tollywood Hits</h1>

      {loading ? (
        <div className="loading-spinner">
          {" "}
          <p>Loading Movies.... </p>{" "}
        </div>
      ) : (
        <div className="main-content">
          <div className="search-section">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-section">
            <h4>Filter By Genre</h4>
             <div className="genre-buttons">
              {genres.map((genre) => (
                <button
                  className={`genre-button ${
                    selectGenre === genre ? "active" : ""
                  }`}
                  key={genre}
                  onClick={() => setSelectGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
          
         
         

          <div className="sort-section">
              <label htmlFor="sort-select">Sort By:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="title">Title</option>
                <option value="rating">Rating</option>
                <option value="year">Year</option>
                <option value="genre">Genre</option>
              </select>
          </div>
          

          {
            (searchTerm || selectGenre !== "All")
             && (
              <button
                className="clear-filters"
                onClick={() => {
                  setSearchTerm("");
                  setSelectGenre("All");
                }}
              >
                Clear All Filters
              </button>
            )}

          <div className="movies-grid">
            
            {sortedAndFilteredMovies.length > 0 ? (
              sortedAndFilteredMovies.map((movie) => (
                <div
                  className={`movie-card ${getRatingCategory(movie.rating)}`}
                  key={moviesData.id}
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-genre">Genre: {movie.genre}</p>
                  <p className="movie-cast">Cast: {movie.cast.join(", ")}</p>
                  <p className="movie-release-year">
                    Release Year: {movie.year}
                  </p>
                  <p className="movie-director">Director: {movie.director}</p>
                  <p
                    className={`movie-rating ${getRatingCategory(
                      movie.rating
                    ).toLowerCase()}`}
                  >
                    {movie.rating}/10
                  </p>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <h3>No movies found</h3>
                <p>
                  {searchTerm || selectGenre !== "All"
                    ? "Try adjusting your search or filter"
                    : "Start searching to find amazing movies"}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TollywoodMovies;
