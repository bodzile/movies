
import MovieContainer from "./Components/MovieContainer.jsx";
import Navigation from "./Templates/Snippets/Navigation.jsx";
import Footer from "./Templates/Snippets/Footer.jsx";
import Search from "./Components/Search.jsx";

const App = () => {

  return (
    <>
        <Navigation />
        <Search />
        <MovieContainer/>
        <Footer/>
    </>
  )
}

export default App
