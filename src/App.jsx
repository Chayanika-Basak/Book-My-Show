import axios from "axios";

import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
import PlaysHOC from './HOC/Plays.HOC';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from './pages/Home.page';
import MoviesPage from './pages/Movies.page';
import Plays from './pages/Plays.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={MoviesPage} />
      <PlaysHOC path="/plays" exact component={Plays}/>    
    </>
  );
}

export default App;
