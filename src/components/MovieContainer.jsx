import {useState} from "react";
import SearchMovieForm from "./SearchMovieForm.jsx";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_OMDBAPI_KEY;
const API_URL = import.meta.env.VITE_REACT_APP_OMDBAPI_URL;

const MovieContainer = () => {
    const [movie, setMovie] = useState(null);

    const logResponse = async (movie) => {
        const getResponse=await axios.get(API_URL + "/?t=" + movie + "&apikey=" + API_KEY);
        console.log(getResponse);
    }
    return (
        <SearchMovieForm movie={movie} setMovie={setMovie} logResponse={logResponse} />
    )
}

export default MovieContainer