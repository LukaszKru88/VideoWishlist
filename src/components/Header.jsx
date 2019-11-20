import React from 'react';
import { Link } from 'react-router-dom';

const Heared = () => {
    return (
        <React.Fragment>
            <header>
                <h1 className="text-center">What's Your favorite movie?</h1>
            </header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center order-2" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">SEARCH</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wishlist">WISHLIST</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </React.Fragment>
    );
}

export default Heared;