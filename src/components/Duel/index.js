import React, {useState, useEffect} from 'react'
import config from "config";
// import Button from 'components/Button';
import Quest from '../QuestBox/Quest'
import AddQuestModal from '../QuestBox/AddQuestModal'
import questList from '../QuestBox/QuestList'
import {useAppContext} from "libs/contextLib"
// import {getQuestList} from "resources/quest"

const DuelBox = () => {
    const {assetsURL: {
            image
        }} = config

    const [tab,
        setTab] = useState("duel-list")
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

            // async function loadQuestMassaLembaga() {     try {         let response =
            // await getQuestList(tab)         console.log('questlist: ', response)
            // setResult(response)     } catch (e) {         console.log(e)     } } async
            // function loadQuestKandidat() {     alert("Anda adalah kandidat") } if
            // (user.groups === 5) {     loadQuestKandidat() } else {
            // loadQuestMassaLembaga() }
            setResult(questList)
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
            className="quest-box duel-box p-4 mt-5"
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
                    <li onClick={() => clickNav("duel-list")}>
                        <div className="duel-list">Daftar Duel</div>
                    </li>
                    <li onClick={() => clickNav("duel-running")}>
                        <div className="duel-running">Duel Berjalan</div>
                    </li>
                    <li onClick={() => clickNav("duel-success")}>
                        <div className="duel-success">Duel Sukses</div>
                    </li>
                    <li onClick={() => clickNav("duel-failed")}>
                        <div className="duel-failed">Duel Gagal</div>
                    </li>
                </ul>
            </div>
            <div className="duel-content">
                {currentResult.map((item, index) => {
                    return (<Quest
                        id={id}
                        key={index}
                        tab={tab}
                        item={item}
                        last={index === currentResult.length - 1}
                        index={index+firstIndex}/>)
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

                {/* <div className="btm-container not-candidate">
                    <div className="btn-container columns">
                        <Button file="tambah-quest-btn" onClick={addQuest}/> {id === 5 && <Button file="unggah-bukti-btn"/>}
                    </div>
                </div> */}
                <AddQuestModal/>
            </div>

        </div>
    )
}

export default DuelBox
