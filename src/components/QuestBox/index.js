import React, {useState, useEffect} from 'react'
import config from "config";
import Button from 'components/Button';
import questList from './QuestList'
import Quest from './Quest'

const QuestBox = () => {

    const {assetsURL: {
            image
        }} = config

    const [tab,
        setTab] = useState("quest")
    const [currentPage,
        setCurrentPage] = useState(1)
    const [result,
        setResult] = useState([])
    const postPerPage = 3


    const clickNav = nav => {
        setTab(prev => {
            console.log(prev)
            if (nav != prev) {
                document.querySelector(`.${prev}-tab`).classList.remove("active")
            }
            
            return nav
        })
        document.querySelector(`.${nav}-tab`).classList.add("active")
    }

    useEffect(() => {
        if (tab == "quest") {
            setResult(questList)
        } else if (tab == "acc") {
            setResult(questList.filter(item => item.status == "acc"))
        } else if (tab == "acc") {
            setResult(questList.filter(item => item.status == "acc"))
        } else {
            setResult(questList.filter(item => item.status == "acc" || item.status == "dec"))
        }
    }, [])

    let lastIndex = currentPage * postPerPage
    let firstIndex = lastIndex - postPerPage
    let currentResult = result.slice(firstIndex, lastIndex)

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
                    <li onClick={() => clickNav("quest")}>
                        <div className="quest-tab">Daftar Quest</div>
                    </li>
                    <li onClick={() => clickNav("acc")}>
                        <div className="acc-tab">Quest Diterima</div>
                    </li>
                    <li onClick={() => clickNav("prog")}>
                        <div className="prog-tab">Progress Quest</div>
                    </li>
                    <li onClick={() => clickNav("history")}>
                        <div className="history-tab">History Pengajuan Quest</div>
                    </li>
                </ul>
            </div>
            {currentResult.map((item, index) => {
                return (<Quest
                    key={index}
                    tab={tab}
                    item={item}
                    last={index == currentResult.length - 1}
                    index={index}/>)
            })}
            <div className="my-pagination">
                <span onClick={() => setCurrentPage(currentPage > 1 ? currentPage-1 : currentPage )}>&#60;</span>
                {pageNumber.map(item => {
                    return (
                        <span onClick={() => setCurrentPage(item)} key={item} className="page-number">{item}</span>
                    )
                })}
                <span onClick={() => setCurrentPage(currentPage < currentResult.length-1 ? currentPage+1 : currentPage)}>&#62;</span>
            </div>
            <div className="btm-container">
                {tab == "quest"
                    ? <div className="btn-container columns">
                        <Button file="tambah-quest-btn" />
                        <Button file="unggah-bukti-btn" />
                    </div>
                    : <div className="btn-container">
                        <Button file="plus-btn" />
                    </div>
                }
            </div>
        </div>
    )
}

export default QuestBox
