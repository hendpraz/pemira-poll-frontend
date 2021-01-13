import React, {useState, useEffect} from 'react'
import config from "config";
import Button from 'components/Button';
import Quest from './Quest'
import AddQuestModal from './AddQuestModal'
import questList from './QuestList'
import {useAppContext} from "libs/contextLib"
import {getQuestListMassaLembaga, getQuestListKandidat} from "resources/quest"
import UnggahBuktiModal from './UnggahBuktiModal';

const QuestBox = () => {
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

        navLink.classList.add("active")
        
    }, [tab])

    const addQuest = () => {
        let modalAdd = document.getElementById("addQuest")

        modalAdd.style.display = "block"
    }

    const {user} = useAppContext()

    const [id,
        setId] = useState(null)

    useEffect(() => {
        if (user) {
            setId(user.groups_id)
            setResult(questList)
            // async function loadQuestMassaLembaga() {
            //     try {
            //         let response = await getQuestListMassaLembaga(tab)
            //         console.log('questlist: ', response)
            //         setResult(response)     
            //     } catch (e) {
            //         console.log(e)     
            //     } 
            // } async function loadQuestKandidat() {
            //     try {
            //         let response = await getQuestListKandidat(tab)
            //         console.log('questlist: ', response)
            //         setResult(response)     
            //     } catch (e) {
            //         console.log(e)     
            //     }
            // }

            // if (user.groups_id === 5) {
            //     loadQuestKandidat() 
            // } else {
            //     loadQuestMassaLembaga() 
            // }
        }
    }, [user, tab])

    console.log(result.length)
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
                                <div className="pending">Daftar Quest</div>
                            </li>
                            <li onClick={() => clickNav("accepted")}>
                                <div className="accepted">Quest Berjalan</div>
                            </li>
                            <li onClick={() => clickNav("approved")}>
                                <div className="approved">Quest Sukses</div>
                            </li>
                            <li onClick={() => clickNav("forfeited")}>
                                <div className="forfeited">Quest Gagal</div>
                            </li>
                        </ul>
                    : <ul>
                        <li onClick={() => clickNav("pending")}>
                            <div className="pending">Daftar Quest</div>
                        </li>
                        <li onClick={() => clickNav("accepted")}>
                            <div className="accepted">Quest Diterima</div>
                        </li>
                        <li onClick={() => clickNav("myprogress")}>
                            <div className="myprogress">Progress Quest</div>
                        </li>
                        <li onClick={() => clickNav("my")}>
                            <div className="my">History Pengajuan Quest</div>
                        </li>
                    </ul>}
            </div>
            <div className="quest-content">
                {currentResult.map((item, index) => {
                    return (<Quest
                        id={id}
                        key={index}
                        tab={tab}
                        item={item}
                        last={index === currentResult.length - 1}
                        index={index + firstIndex}/>)
                })}
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

                <div className="btm-container not-candidate">
                    <div className="btn-container columns">
                        {id !== 5 && <Button file="tambah-quest-btn" onClick={addQuest}/> 
                        }
                    </div>
                </div>
                <AddQuestModal />
                <UnggahBuktiModal />
            </div>

        </div>
    )
}

export default QuestBox
