import React, { useState, useEffect } from "react";
import config from "config";
// import Button from 'components/Button';
import LaporkanKandidat from "./LaporkanKandidat";
import questList from "../QuestBox/QuestList";
import { useAppContext } from "libs/contextLib";
import CheaterItem from "./CheaterItem";
import "styles/pages/Cheater.scss";
import Button from "components/Button";
import { listAllKandidat } from "resources/user";
import { listAllCases } from "resources/cheater";

// import {getQuestList} from "resources/quest"

const Cheater = () => {
    const {
        assetsURL: { image },
    } = config;

    
    const [tab, setTab] = useState("laporan-saya");
    const [currentPage, setCurrentPage] = useState(1);
    const [allCases, setAllCases] = useState([])
    const [result, setResult] = useState([]);
    const postPerPage = 3;

    const clickNav = (nav) => {
        setTab((prev) => {
            console.log(prev);
            if (nav !== prev) {
                document.querySelector(`.${prev}`).classList.remove("active");
            }

            return nav;
        });
        document.querySelector(`.${nav}`).classList.add("active");

        let tempMyCases = []
        if (nav === "laporan-saya") {
            // only select my cases
            allCases.forEach(element => {
                if (element.reporter.id === pageUser.id) {
                    tempMyCases.push(element)
                }
            });

            setResult(tempMyCases)
        } else {
            setResult(allCases)
        }
    };

    const openModal = () => {
        var modal = document.getElementById(`addCheater`);

        modal.style.display = "block";
    }

    useEffect(() => {
        let navLink = document.getElementsByClassName(tab)[0];

        navLink.classList.add("active");
    }, [tab]);

    const { user } = useAppContext();

    const [id, setId] = useState(null);

    const [pageUser, setPageUser] = useState()

    const [kandidatList, setKandidatList] = useState()

    const [isLoading,
        setIsLoading] = useState(true)

    useEffect(() => {
        async function loadUsers() {
            try {
                let response = await listAllKandidat()

                let tempKandidat = []

                if (response.status >= 200 && response.status < 400) {
                    response.data.forEach(element => {
                        if (element.groups === 5) {
                            tempKandidat.push(element)
                        }
                    });
    
                    setKandidatList(tempKandidat)
                } else {
                    alert("Terdapat masalah saat loading data kandidat.")
                }
            } catch (e) {
                console.log(e)
            }
        }

        async function loadCases(myUser) {
            try {
                setIsLoading(true)

                let response = await listAllCases()
                let tempMyCases = []

                if (response.status >= 200 && response.status < 400) {
                    setAllCases(response.data)

                    // only select my cases
                    response.data.forEach(element => {
                        if (element.reporter.id === myUser.id) {
                            tempMyCases.push(element)
                        }
                    });

                    setResult(tempMyCases)
                } else {
                    alert("Terdapat masalah saat loading data kasus cheater.")
                }

                setIsLoading(false)
            } catch (e) {
                console.log(e)
            }
        }

        if (user) {
            setId(user.groups);
            setPageUser(user)

            loadUsers()

            loadCases(user)
        }
    }, [user]);

    let lastIndex = currentPage * postPerPage;
    let firstIndex = lastIndex - postPerPage;

    let currentResult = [];

    if (result.length) {
        currentResult = result.slice(firstIndex, lastIndex);
    }

    let pageNumber = [];
    for (let i = 1; i <= Math.ceil(result.length / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div
            className="quest-box duel-box cheater-box p-4 mt-5"
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
                    <li onClick={() => clickNav("laporan-saya")}>
                        <div className="laporan-saya">Laporan Saya</div>
                    </li>
                    <li onClick={() => clickNav("laporan-masa")}>
                        <div className="laporan-masa">Laporan Massa</div>
                    </li>
                </ul>
            </div>
            <div className="duel-content">
                {currentResult.map((item, index) => {
                    return (
                        <CheaterItem
                            id={id}
                            key={index}
                            tab={tab}
                            item={item}
                            last={index === currentResult.length - 1}
                            index={index + firstIndex}
                        />
                    );
                })}

                {isLoading && <div 
                    style={{
                    paddingTop: "180px"
                    }}
                    >Sedang mengambil data..</div>
                }

                {result.length === 0 && !isLoading && <div 
                    style={{
                    paddingTop: "180px"
                    }}
                    >Kasus cheat kosong.</div>
                }

                {currentResult.length ? (
                    <div className="my-pagination">
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
                                    onClick={() => setCurrentPage(item)}
                                    key={item}
                                    className={`page-number ${
                                        currentPage === item && `current-page`
                                    }`}
                                >
                                    {item}
                                </span>
                            );
                        })}
                        <span
                            onClick={() =>
                                setCurrentPage(
                                    currentPage < currentResult.length - 1
                                        ? currentPage + 1
                                        : currentPage
                                )
                            }
                        >
                            &#62;
                        </span>
                    </div>
                ) : null}

                {/* <div className="btm-container not-candidate">
                    <div className="btn-container columns">
                        <Button file="tambah-quest-btn" onClick={addQuest}/> {id === 5 && <Button file="unggah-bukti-btn"/>}
                    </div>
                </div> */}
                {
                    pageUser && kandidatList && 
                    <>
                        <div className="plus-btn">
                            <Button file="plus-btn" onClick={openModal} />
                        </div>
                        <LaporkanKandidat kandidatList={kandidatList} pageUser={pageUser}/>
                    </>
                }
            </div>
        </div>
    );
};

export default Cheater;
