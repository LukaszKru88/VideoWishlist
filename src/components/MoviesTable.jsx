import React from 'react';
import Pagination from './Pagination';

const MoviesTable = (props) => {
    const { name, movies, results, currentPage, onPageChange = null, onAddCookie = null, onDeleteCookie = null, pageLimit } = props;

    const tableHeader = (name) => {
        if (name === "searchTable")
            return <th className="text-center">Add To Wishlist</th>
        else if (name === "wishlist")
            return <th className="text-center">Remove from Wishlist</th>
    }

    const tableButton = (name, movie) => {
        if (name === "searchTable")
            return (<td className="text-center">
                <button className="btn btn-success btn-sm" onClick={() => onAddCookie(movie)}>+</button>
            </td>);
        else if (name === "wishlist")
            return (<td className="text-center">
                <button className="btn btn-danger btn-sm" onClick={() => onDeleteCookie(movie)}>-</button>
            </td>);
    }

    const pagination = (name) => {
        if (name === "searchTable")
            return (
                <Pagination
                    results={results}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                    pageLimit={pageLimit}
                />
            )
        return null;
    }

    return (
        movies &&
        <React.Fragment>
            <table className="container">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Type</th>
                        {tableHeader(name)}
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => (
                        <tr key={movie.id}>
                            <td>{index + 1}</td>
                            <td>{movie.title}</td>
                            <td>{movie.year}</td>
                            <td>{movie.type}</td>
                            {tableButton(name, movie)}
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            {pagination(name)}
        </React.Fragment>
    );
}

export default MoviesTable;