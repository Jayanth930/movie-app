import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import MovieProvider from './components/customHooks/movieContext';
import TypeProvider from './components/customHooks/typeContext';
import Loginpage from './components/login/Loginpage';
import Signuppage from './components/login/Signuppage';
function App() {
  return (
    <div className="App">
        <Router>
          <TypeProvider>
            <MovieProvider>
              <Routes  >
                  <Route path="/" element={<Loginpage />} />
                  <Route path="/signup" element={<Signuppage />} />
              </Routes>
            <Header />
              <Routes>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="movie/:id" element={<Movie />}></Route>
                  <Route path="movies/:movietype" element={<MovieList />}></Route>
              </Routes>
            </MovieProvider>
          </TypeProvider>
        </Router>
    </div>
  );
}


export default App;
