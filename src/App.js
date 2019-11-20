import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import Wishlist from './components/Wishlist';
import Header from './components/Header';
import { withCookies } from 'react-cookie';
import { Route, Switch, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    movies: "",
    totalMovies: 0,
    currentPage: 1,
    pageLimit: 10
  }

  componentDidMount() {
    const { cookies } = this.props;
    if (cookies.get("movies") && cookies.get("movies").length !== 0) {
      const movies = cookies.get("movies");
      this.setState({ movies, tatalMovies: movies.length });
    }
  }

  handleAddCookie = (movie) => {
    const { cookies } = this.props;
    if (this.state.movies) {
      const movies = [...this.state.movies];
      if (movies.find(m => m.id === movie.id))
        return toast.error("Video is already on Your wishlist", {
          autoClose: 2000,
          hideProgressBar: true,
        });

      movies.push(movie);
      this.setState({ movies });
      cookies.set("movies", movies, { path: '/' });
    }
    else {
      this.setState({ movies: [movie] });
      cookies.set("movies", [movie], { path: '/' });
    }
  }

  handleDeleteCookie = (movie) => {
    const { cookies } = this.props;
    const allMovies = [...this.state.movies];
    const movies = allMovies.filter(m => m !== movie);
    this.setState({ movies });
    cookies.set("movies", movies, { path: '/' });
  }

  render() {
    const { movies, currentPage, pageLimit, totalMovies } = this.state;

    return (
      <div className="container">
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route path="/search" render={() => <SearchBox
            onAddCookie={this.handleAddCookie} />}
          />
          <Route path="/wishlist" render={() => <Wishlist
            onDeleteCookie={this.handleDeleteCookie}
            movies={movies}
            currentPage={currentPage}
            pageLimit={pageLimit}
            results={totalMovies}
          />}
          />
        </Switch>

      </div>
    )
  }
}

export default withCookies(App);
