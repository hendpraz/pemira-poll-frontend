import React, { useState, useEffect } from "react";

// Resources
import config from "config";

// Components
import AlgojoItem from "./AlgojoItem";

// Styling
import "styles/pages/Algojo.scss";

const Algojo = () => {
    const {
        assetsURL: { image },
    } = config;

    const [currentPage, setCurrentPage] = useState(1);
    const [result, setResult] = useState([]);
    const postPerPage = 3;

    let lastIndex = currentPage * postPerPage;
    let firstIndex = lastIndex - postPerPage;
    let currentResult = [];

    useEffect(() => {
        setResult([
            {
                judul: "Saya benci Corona",
            },
            {
                judul: "Indonesia sehat dengan Jokowi",
            },
        ]);
    }, [])

    if (result.length) {
        currentResult = result.slice(firstIndex, lastIndex);
    }

    let pageNumber = [];
    for (let i = 1; i <= Math.ceil(result.length / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="algojo-container">
            <div
                className="quest-box p-4 mt-5"
                style={{
                    backgroundImage: `url(${image}/paper-parchment.png)`,
                }}
            >
                <div
                    className="banner p-4 m-5 mt-6"
                    style={{
                        background: "#C4C4C4",
                    }}
                >
                    Banner ads
                </div>

                <div className="quest-nav">
                    <ul>
                        <li>
                            <div>Daftar Laporan</div>
                        </li>
                    </ul>
                </div>
                <div className="quest-content algojo-content">
                    {currentResult.map((item, index) => {
                        return (
                            <AlgojoItem
                                key={index}
                                item={item}
                                last={index === currentResult.length - 1}
                                index={index + firstIndex}
                            />
                        );
                    })}
                    <div className="btm-container not-candidate">
                        <div className="btn-container columns"></div>
                    </div>
                    {currentResult.length
                    ? <div className="my-pagination">
                            <span
                                onClick={() => setCurrentPage(currentPage > 1
                                ? currentPage - 1
                                : currentPage)}>&#60;</span>
                            {pageNumber.map(item => {
                                return (
                                    <span onClick={() => setCurrentPage(item)} key={item} className={`page-number ${currentPage === item && `current-page`}`}>{item}</span>
                                )
                            })}
                            <span
                                onClick={() => setCurrentPage(currentPage < currentResult.length - 1
                                ? currentPage + 1
                                : currentPage)}>&#62;</span>
                        </div>
                    : null}
                </div>
            </div>
        </div>
    );
};

export default Algojo;
