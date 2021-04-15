import React, {useState, useEffect} from 'react'
import config from "config";
import Button from 'components/Button';
import Duel from './Duel'
import AddDuelModal from './AddDuelModal'
// import duelList from './DuelList'
import {useAppContext} from "libs/contextLib"
import {getDuelListMassaLembaga, getDuelListKandidat} from "resources/duel"
// import UnggahBuktiModal from './UnggahBuktiModal';

const DuelBox = () => {
    const {assetsURL: {
            image
        }} = config

    const [tab,
        setTab] = useState("accepted")
    const [currentPage,
        setCurrentPage] = useState(1)
    const [result,
        setResult] = useState([])
    const postPerPage = 3
    const [isLoading,
        setIsLoading] = useState(false)

    const clickNav = nav => {
        setTab(prev => {
            console.log(prev)
            if (nav !== prev) {
                document
                    .querySelector(`.${prev}`)
                    .classList
                    .remove("active")
            }

            return nav
        })
        document
            .querySelector(`.${nav}`)
            .classList
            .add("active")
    }

    useEffect(() => {
        let navLink = document.getElementsByClassName(tab)[0]

        navLink
            .classList
            .add("active")

    }, [tab])

    const addDuel = () => {
        let modalAdd = document.getElementById("addDuel")

        modalAdd.style.display = "block"
    }

    const {user} = useAppContext()

    const [id,
        setId] = useState(null)

    useEffect(() => {
        if (user) {
            setId(user.groups)
            // setResult(duelList)
            async function loadDuelMassaLembaga() {
                try {
                    setIsLoading(true)
                    setResult([])
                    let response = await getDuelListMassaLembaga(tab)         
                    console.log('duellist: ', response)         
                    setResult(response)
                } catch (e) {
                    console.log(e)
                } finally {
                    setIsLoading(false)
                }
            }
            
            async function loadDuelKandidat() {
                try {
                    setIsLoading(true)
                    setResult([])
                    let response = await getDuelListKandidat(tab)
                    console.log('duellist: ', response)         
                    setResult(response)
                } catch (e) {
                    console.log(e)
                } finally {
                    setIsLoading(false)
                }
            } 
            
            if (user.groups === 5) {
                loadDuelKandidat()
            } else {
                loadDuelMassaLembaga()
            }
        }
    }, [user, tab])

    let lastIndex = currentPage * postPerPage
    let firstIndex = lastIndex - postPerPage

    let currentResult = []

    if (result.length) {
        currentResult = result.slice(firstIndex, lastIndex)
    }

    let pageNumber = []
    for (let i = 1; i <= Math.ceil(result.length / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div
            className="quest-box p-4 mt-5"
            style={{
            backgroundImage: `url(${image}/paper-parchment.png)`
        }}>
            <div
                className="banner p-4 m-5 mt-6"
                style={{
                background: "#C4C4C4"
            }}>
                Banner ads
            </div>

            <div className="quest-nav">
                {id === 5
                    ? <ul>
                            <li onClick={() => clickNav("pending")}>
                                <div className="pending">Daftar Duel</div>
                            </li>
                            <li onClick={() => clickNav("accepted")}>
                                <div className="accepted">Duel Berjalan</div>
                            </li>
                            <li onClick={() => clickNav("approved")}>
                                <div className="approved">Duel Sukses</div>
                            </li>
                            <li onClick={() => clickNav("forfeited")}>
                                <div className="forfeited">Duel Gagal</div>
                            </li>
                        </ul>
                    : <ul>
                        <li onClick={() => clickNav("accepted")}>
                            <div className="accepted">Daftar Duel</div>
                        </li>
                        <li onClick={() => clickNav("running")}>
                            <div className="running">Duel Diterima</div>
                        </li>
                        <li onClick={() => clickNav("myprogress")}>
                            <div className="myprogress">Progress Duel</div>
                        </li>
                        <li onClick={() => clickNav("my")}>
                            <div className="my">History Pengajuan Duel</div>
                        </li>
                    </ul>}
            </div>
            <div className="quest-content">
                {currentResult.map((item, index) => {
                    return (<Duel
                        id={id}
                        key={index}
                        tab={tab}
                        item={item}
                        last={index === currentResult.length - 1}
                        index={index + firstIndex}/>)
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
                    >Duel kosong.</div>
                }
                {currentResult.length
                    ? <div className="my-pagination">
                            <span
                                onClick={() => setCurrentPage(currentPage > 1
                                ? currentPage - 1
                                : currentPage)}>&#60;</span>
                            {pageNumber.map(item => {
                                return (
                                    <span
                                        onClick={() => setCurrentPage(item)}
                                        key={item}
                                        className={`page-number ${currentPage === item && `current-page`}`}>{item}</span>
                                )
                            })}
                            <span
                                onClick={() => setCurrentPage(currentPage < currentResult.length - 1
                                ? currentPage + 1
                                : currentPage)}>&#62;</span>
                        </div>
                    : null}

                <div className="btm-container not-candidate">
                    <div className="btn-container columns">
                        {id !== 5 && <Button file="tambah-quest-btn" onClick={addDuel}/>
}
                    </div>
                </div>
                {user && id &&
                    <AddDuelModal groupsId={id} tipeKandidat={user.tipe_kandidat}/>
                }
                
            </div>

        </div>
    )
}

export default DuelBox
