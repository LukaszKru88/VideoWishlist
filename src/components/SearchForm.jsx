import React from 'react';

const SearchForm = (props) => {
    const { title, year, type, onChange, onSubmit } = props;

    return (
        <form id="searchBox" onSubmit={onSubmit} className="m-3">
            <div className="form-group">
                <input name="title" className="form-control" id="title" type="text" placeholder="Type title..." value={title} onChange={onChange} />
                <small id="titleHelp" className="form-text text-muted">* title is required</small>
            </div>
            <div className="input-group">
                <input name="year" className="form-control" id="year" type="number" min="1878" max="2020" placeholder="Year" value={year} onChange={onChange} />
                <select name="type" className="form-control" id="type" value={type} onChange={onChange}>
                    <option value="">Type</option>
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Episode">Episode</option>
                    <option value="Game">Game</option>
                </select>
                <div className="input-group-append"><input className="btn btn-primary" type="submit" value="EXPLORE" /></div>
            </div>
            <small id="titleHelp" className="form-text text-muted">* inputs listed above are not required</small>
        </form>
    );
}

export default SearchForm;