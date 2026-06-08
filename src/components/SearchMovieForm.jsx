

const SearchMovieForm = ({movie, setMovie, logResponse}) => (
    <div>
        <input onInput={(e) => setMovie(e.currentTarget.value)} type="text" placeholder="Search Movies" />
        <button onClick={() => logResponse(movie)}>Search movie</button>
    </div>
);

export default SearchMovieForm