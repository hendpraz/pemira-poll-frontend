import React, {useState, useEffect} from 'react'
import config from "config";
import Question from './Question'
// import questList from './QuestList'
import {useAppContext} from "libs/contextLib"
import {getQuestListMassaLembaga, getQuestListKandidat} from "resources/quest"
import { getAllQuestions, getAvailableQuestions, getHistoryQuestions, getMyAnswers} from "resources/question"
// import UnggahBuktiModal from './UnggahBuktiModal';

const QuestBox = () => {
    const {assetsURL: {
            image
        }} = config

    const [tab,
        setTab] = useState("all")
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

        navLink
            .classList
            .add("active")

    }, [tab])

    const {user} = useAppContext()

    const [id,
        setId] = useState(null)

    useEffect(() => {
        if (user) {
            setId(user.groups)
            // setResult(questList)
            
            async function loadQuestion() {
                try {
                    let response

                    if (tab === "all") {
                        response = await getAllQuestions()
                    } else if (tab === "available") {
                        response = await getAvailableQuestions()
                    } else if (tab === "history") {
                        response = await getHistoryQuestions()
                    } else if (tab === "my") {
                        response = await getMyAnswers()
                    }
                    
                    console.log(response)
                    console.log('question list: ', response.data)         
                    setResult(response.data)
                } catch (e) {
                    console.log(e)
                }
            } 
            
            loadQuestion()
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
                    <ul>
                        <li onClick={() => clickNav("all")}>
                            <div className="all">Semua Pertanyaan</div>
                        </li>
                        <li onClick={() => clickNav("available")}>
                            <div className="available">Pertanyaan Available</div>
                        </li>
                        <li onClick={() => clickNav("history")}>
                            <div className="history">History Pertanyaan</div>
                        </li>
                        <li onClick={() => clickNav("my")}>
                            <div className="my">Jawaban Saya</div>
                        </li>
                    </ul>
            </div>
            <div className="quest-content">
                {
                    <>
                        {currentResult.map((item, index) => {
                            return (<Question
                                id={id}
                                key={index}
                                tab={tab}
                                item={item}
                                last={index === currentResult.length - 1}
                                index={index + firstIndex}/>)
                        })}
                        {result.length === 0 && <div style={{
                            paddingTop: "180px"
                        }}>Kosong.</div>}
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
                    </>
                }
            </div>

        </div>
    )
}

export default QuestBox
