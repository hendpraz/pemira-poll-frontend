import React from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = ({length, currentPage, setCurrentPage, postPerPage}) => {

    const page = []

    for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
        page.push(i)
    }

    let pageLink = Array.from(document.getElementsByClassName('pagination-link'))
    pageLink.forEach(page => {
        console.log(page)
        page
            .classList
            .remove('has-text-primary')

        if (page.textContent === currentPage) {
            page
                .classList
                .toggle('has-text-primary')
        }
    })

    return (
        <div>
            <nav className="pagination is-right" role="navigation" aria-label="pagination">
                <a
                    onClick={() => setCurrentPage(currentPage > 1
                    ? currentPage - 1
                    : currentPage)}className="pagination-previous">Previous</a>
                <a
                    onClick={() => setCurrentPage(currentPage < page.length
                    ? currentPage + 1
                    : currentPage)}
                    className="pagination-next">Next page</a>
                <ul className="pagination-list">
                    {page.map((item => {
                        return (
                            <li key={item}>
                                <a
                                    className="pagination-link"
                                    onClick={() => setCurrentPage(item)}
                                    aria-label={`Goto page ${item}`}>{item}</a>
                            </li>
                        )
                    }))}
                </ul>
            </nav>
        </div>
    )
}

/* eslint-enable */

export default Pagination
