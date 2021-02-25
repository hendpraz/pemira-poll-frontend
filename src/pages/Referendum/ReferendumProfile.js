import React, { useState, useEffect } from "react";

// Resources
import config from "config";

// Component
import Footer from "components/Footer";
import Laporan from "./Laporan";

// Styling
import "styles/pages/Referendum.scss";

const ReferendumProfile = () => {
    const {
        assetsURL: { image },
    } = config;

    const [nav, setNav] = useState("survei-saya");

    const postPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [result, setResult] = useState([]);

    const lastIndex = postPerPage * currentPage;
    const firstIndex = lastIndex - postPerPage;
    const currentResult = result.slice(firstIndex, lastIndex);

    let pageNumber = [];
    for (let i = 1; i <= Math.ceil(result.length / postPerPage); i++) {
        pageNumber.push(i);
    }

    useEffect(() => {
        setResult([
            {
                judul: "Saya benci Corona",
                penyurvei: "Doni",
                untuk: "KM ITB",
                deskripsi:
                    "Lala Widy? Mas Bima? Swegerrr Semongkone! Perasaan yang tanpa kabar, sampai tau kapan dia datang.",
            },
            {
                judul: "Indonesia sehat dengan Jokowi",
                penyurvei: "Lala Widy",
                untuk: "KM ITB",
                deskripsi:
                    "Lala Widy? Mas Bima? Swegerrr Semongkone! Perasaan yang tanpa kabar, sampai tau kapan dia datang.",
            },
            {
                judul: "Indonesia sehat dengan Jokowi",
                penyurvei: "Lala Widy",
                untuk: "KM ITB",
                deskripsi:
                    "Lala Widy? Mas Bima? Swegerrr Semongkone! Perasaan yang tanpa kabar, sampai tau kapan dia datang.",
            },
            {
                judul: "Indonesia sehat dengan Jokowi",
                penyurvei: "Lala Widy",
                untuk: "KM ITB",
                deskripsi:
                    "Lala Widy? Mas Bima? Swegerrr Semongkone! Perasaan yang tanpa kabar, sampai tau kapan dia datang.",
            },
        ]);
    }, []);

    return (
        <div className="referendum-profile">
            <div className="main-container">
                <div className="vote-page is-flex">
                    <div className="vote-left">
                        <div
                            className="background-image"
                            style={{
                                backgroundImage: `url('${image}/Scroll medium 2.png')`,
                            }}
                        >
                            <div className="pemilihan-k3m laporan-content">
                                {currentResult.map((item, index) => (
                                    <Laporan item={item} index={index} />
                                ))}
                                <div className="referendum-pagination">
                                    <span
                                        onClick={() =>
                                            setCurrentPage(
                                                currentPage > 1
                                                    ? currentPage - 1
                                                    : currentPage
                                            )
                                        }
                                    >
                                        &#60;
                                    </span>
                                    {pageNumber.map((item) => {
                                        return (
                                            <span
                                                onClick={() =>
                                                    setCurrentPage(item)
                                                }
                                                key={item}
                                                className={`page-number ${
                                                    currentPage === item &&
                                                    `current-page`
                                                }`}
                                            >
                                                {item}
                                            </span>
                                        );
                                    })}
                                    <span
                                        onClick={() =>
                                            setCurrentPage(
                                                currentPage <
                                                    currentResult.length - 1
                                                    ? currentPage + 1
                                                    : currentPage
                                            )
                                        }
                                    >
                                        &#62;
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vote-right">
                        <div
                            className="background-image"
                            style={{
                                backgroundImage: `url('${image}/hahahay.png')`,
                            }}
                        >
                            <div className="vote-right-content">
                                <h2>"Hafid Abi"</h2>
                                <h5>13519000</h5>
                                <hr />
                                <div className="has-text-center nav-profile-ref">
                                    <p className={nav === "survei-saya" && "active"} onClick={() => setNav("survei-saya")}>Survei Saya</p>
                                    <hr />
                                    <p className={nav === "settings" && "active"} onClick={() => setNav("settings")}>Settings</p>
                                    <hr />
                                    <p className={nav === "logout" && "active"} onClick={() => setNav("logout")}>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ReferendumProfile;
