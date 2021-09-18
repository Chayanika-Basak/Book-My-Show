import DefaultHOC from './HOC/Default.HOC';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home.page';
import Movie from './pages/Movie.page';

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <DefaultHOC path="/movies" exact component={Movie} />    
    </>
  );
}

export default App;
