import React from 'react';

const Pagination = (props) => {
    const { results = 0, onPageChange, currentPage } = props;

    const pageCount = Math.ceil(results / 10);
    if (pageCount === 1) return null;

    return (
        <div>
            <div className="d-inline">
                <div className="d-inline-block m-2">
                    <nav>
                        <ul className="pagination">
                            <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                                <a href name="previous" className="page-link" onClick={(event) => onPageChange(currentPage, event)}>Previous</a>
                            </li>
                            <li className="page-item active">
                                <a href className="page-link">{currentPage}</a>
                            </li>
                            <li className={currentPage === pageCount ? "page-item disabled" : "page-item"}>
                                <a href name="next" className="page-link" onClick={(event) => onPageChange(currentPage, event)}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="d-inline-block m-2">
                    <p>TOTAL NUMER OF PAGES: {pageCount}</p>
                </div>
            </div>
            <div style={{ paddingRight: 100 }} className="d-inline float-right">
                <div className="d-inline-block m-2">
                    <form name="page" className="form-inline" id="pageChange" onSubmit={(event) => onPageChange(currentPage, event)}>
                        <label style={{ marginRight: 15 }}>GO TO:</label>
                        <input name="page" className="form-control" id="page" type="number" min={1} max={pageCount} placeholder="page..." />
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Pagination;