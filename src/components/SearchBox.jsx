import React, { Component } from 'react';
import axios from "axios";

import SearchForm from './SearchForm';
import MoviesTable from './MoviesTable';
import { ToastContainer, toast } from 'react-toastify';

class SearchBox extends Component {
    state = {
        title: "",
        year: "",
        type: "",
        currentPage: 1,
        movies: "",
        totalResults: 0,
    }

    handleChange = ({ currentTarget: input }) => {
        const { name, value } = input;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setMovies();
    }

    setMovies = async () => {
        const { title, year, type, currentPage } = this.state;
        const response = await this.getDataFromServer(title, year, type, currentPage);

        if (response.data.Error) {
            toast.error(response.data.Error, {
                autoClose: 2000,
                hideProgressBar: true,
            });
        }
        else {
            const movies = this.setSearchData(response);
            const totalResults = this.getTotalSearchResults(response);
            this.setState({ movies, totalResults });
        }
    }

    getDataFromServer = async (title, year, type, currentPage) => {
        try {
            return await axios.get(`https://www.omdbapi.com/?apikey=853b2a45`, {
                params: {
                    s: title,
                    y: year,
                    type,
                    page: currentPage
                }
            });
        } catch (error) {
            return error.message;
        }
    }

    setSearchData = ({ data }) => {
        const { Search: movies } = data;
        return movies.map(movie => {
            return {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                type: movie.Type
            }
        });
    }

    getTotalSearchResults = ({ data }) => {
        return data.totalResults;
    }

    handlePageChange = async (currentPage, event) => {
        event.preventDefault();
        const { currentTarget: page } = event;
        if (page.name === "next")
            await this.setState({ currentPage: currentPage + 1 });
        else if (page.name === "previous")
            await this.setState({ currentPage: currentPage - 1 });
        else if (page.name === "page") {
            const page = parseInt(event.target.querySelector('input').value)
            await this.setState({ currentPage: page })
        }

        this.setMovies();
    }

    render() {
        const { title, year, type, movies, totalResults, currentPage } = this.state;
        const { onAddCookie } = this.props;
        return (
            <React.Fragment>
                <SearchForm
                    title={title}
                    year={year}
                    type={type}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                <ToastContainer />
                <MoviesTable
                    name="searchTable"
                    movies={movies}
                    currentPage={currentPage}
                    results={totalResults}
                    onPageChange={this.handlePageChange}
                    onAddCookie={onAddCookie}
                />
            </React.Fragment>
        );
    }
}

export default SearchBox;