import {useState, useEffect} from "react";
import SearchMovieForm from "../Templates/Snippets/SearchMovieForm.jsx";
import axios from "axios";
import MovieCard from "../Templates/Snippets/MovieCard.jsx";

const API_KEY = import.meta.env.VITE_REACT_APP_OMDBAPI_KEY;
const API_URL = import.meta.env.VITE_REACT_APP_OMDBAPI_URL;

const MovieContainer = () => {

    const [movieName, setMovieName] = useState("Hobbit");
    const [movieData, setMovieData] = useState({});

    const searchMovieByTitle = (movie) => {
        axios.get(API_URL + "/?t=" + movie + "&apikey=" + API_KEY)
            .then(res => setMovieData(res.data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        searchMovieByTitle(movieName);
    }, []);


    return (
        <>
            <SearchMovieForm movie={movieName} setMovie={setMovieName} searchMovieByTitle={searchMovieByTitle} />
            <MovieCard {...movieData} />
        </>
    )
}

export default MovieContainer