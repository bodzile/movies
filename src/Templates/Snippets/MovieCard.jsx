
const MovieCard = ({Title, Plot, Poster}) => (
    <div className="">
        <img src={Poster} alt=""/>
        <h3>{Title}</h3>
        <p>{Plot}</p>
    </div>
);

export default MovieCard;