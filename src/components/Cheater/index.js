import React, { useState, useEffect } from "react";
import config from "config";
// import Button from 'components/Button';
import LaporkanKandidat from "./LaporkanKandidat";
import questList from "../QuestBox/QuestList";
import { useAppContext } from "libs/contextLib";
import CheaterItem from "./CheaterItem";
import "styles/pages/Cheater.scss";
import Button from "components/Button";

// import {getQuestList} from "resources/quest"

const Cheater = () => {
    const {
        assetsURL: { image },
    } = config;

    const [tab, setTab] = useState("laporan-saya");
    const [currentPage, setCurrentPage] = useState(1);
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

    useEffect(() => {
        if (user) {
            setId(user.groups);

            // async function loadQuestMassaLembaga() {     try {         let response =
            // await getQuestList(tab)         console.log('questlist: ', response)
            // setResult(response)     } catch (e) {         console.log(e)     } } async
            // function loadQuestKandidat() {     alert("Anda adalah kandidat") } if
            // (user.groups === 5) {     loadQuestKandidat() } else {
            // loadQuestMassaLembaga() }
            setResult(questList);
        }
    }, [user, tab]);

    useEffect(() => {
        setResult([
            {
                terdakwa: "Fadhil",
                tipe: "Jahat",
                tanggal: "7 November 2000",
                detail: "Kamu Jahat",
                bukti: `${image}/batal-merah.png`,
            },
            {
                terdakwa: "Fadhil",
                tipe: "Jahat",
                tanggal: "7 November 2000",
                detail: "Kamu Jahat",
                bukti: `${image}/batal-merah.png`,
            },
            {
                terdakwa: "Fadhil",
                tipe: "Jahat",
                tanggal: "7 November 2000",
                detail: "Kamu Jahat",
                bukti: `${image}/batal-merah.png`,
            },
            {
                terdakwa: "Fadhil",
                tipe: "Jahat",
                tanggal: "7 November 2000",
                detail: "Kamu Jahat",
                bukti: `${image}/batal-merah.png`,
            },
            {
                terdakwa: "Fadhil",
                tipe: "Jahat",
                tanggal: "7 November 2000",
                detail: "Kamu Jahat",
                bukti: `${image}/batal-merah.png`,
            },
        ]);
    }, []);

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
                        <div className="laporan-masa">Laporan Masa</div>
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
                <div className="plus-btn">
                    <Button file="plus-btn" onClick={openModal} />
                </div>
                <LaporkanKandidat />
            </div>
        </div>
    );
};

export default Cheater;
