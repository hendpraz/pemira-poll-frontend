import React, { useState, useEffect } from 'react'
import QuestModal from './QuestModal'
import Pagination from './Pagination'
import { getAllEverAcceptedQuest, getAllNotAcceptedQuest } from 'resources/quest'

const QuestList = ({tipe}) => {

    const postPerPage = 4
    const [currentPage, setCurrentPage] = useState(1)
    const [result, setResult] = useState([])
    const [currentResult, setCurrentResult] = useState([])
    
    useEffect(() => {
        async function loadUsers() {
            try {
                console.log(tipe)
                let response
                if (tipe === "not-accepted") {
                    response = await getAllNotAcceptedQuest()
                } else {
                    response = await getAllEverAcceptedQuest()
                }
                
                console.log(response)
                setResult(response)
                setCurrentResult(response.slice(firstIndex, lastIndex))
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadUsers()
        }
        
        onLoad()
    }, [])

    useEffect(() => {
        setCurrentResult(result.slice(firstIndex, lastIndex))
    }, [currentPage])

    const lastIndex = postPerPage * currentPage
    const firstIndex = lastIndex - postPerPage

    const detailUser = (index) => {
        var modal = document.getElementById(`modal-quest-${index}`);

        // console.log(modal)
        var quest = document.getElementById(`quest-${index}`);

        quest.onclick = function () {
            modal.style.display = "block";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    return (
        <div >
            <div id="questList" className="user-list-content is-flex">
                {currentResult.map((item, index) => {
                    return (
                        <div
                            id={`quest-${index}`}
                            onClick={() => detailUser(index)}
                            key={index}
                            className="user-list-item p-4">
                            <div className="user-item-list-content">
                                <div className="is-flex">
                                    <h3>{item.judul}</h3>
                                    <h5>{item.user.fullname}</h5>
                                </div>
                                <h5>Deskripsi:</h5>
                                <p>{item.deskripsi}</p>
                                <p className="has-text-danger">{`Deadline: ${item.deadline}`}</p>
                            </div>
                            <QuestModal item={item} id={`modal-quest-${index}`}/>
                        </div>
                    )
                })}
            </div>
            <Pagination
                length={result.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                postPerPage={postPerPage}/>
        </div>
    )
}

export default QuestList
