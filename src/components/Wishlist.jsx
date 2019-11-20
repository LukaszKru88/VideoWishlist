import React from 'react';
import MoviesTable from './MoviesTable';
import { withRouter } from 'react-router-dom';


const Wishlist = (props) => {
    const { movies, onDeleteCookie, currentPage, pageLimit, results, history } = props

    const handleBackButton = () => {
        history.push("/search");
    }

    return (
        movies.length !== 0 ?
            <MoviesTable
                name="wishlist"
                movies={movies}
                onDeleteCookie={onDeleteCookie}
                currentPage={currentPage}
                pageLimit={pageLimit}
                results={results}
            /> :
            <div className="text-center text-uppercase m-5">
                <p>Your Wishlist is empty</p>
                <button className="text-uppercase btn btn-primary btn sm m-2" onClick={handleBackButton}>Back to search tab</button>
            </div>
    )
}

export default withRouter(Wishlist);