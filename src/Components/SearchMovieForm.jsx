

const SearchMovieForm = ({movie, setMovie, searchMovieByTitle}) => (
    <form onSubmit={e => e.preventDefault()}>
        <input onInput={(e) => setMovie(e.currentTarget.value)} type="text" placeholder="Search Movies" />
        <button onClick={() => searchMovieByTitle(movie)}>Search movie</button>
    </form>
);

export default SearchMovieForm