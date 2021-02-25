import React, { useState, useEffect } from 'react'
import QuestModal from './QuestProofModal'
import Pagination from '..//Pagination'
import { getQuestProofList } from 'resources/questproof'

const QuestList = ({tipe}) => {

    const postPerPage = 6
    const [currentPage, setCurrentPage] = useState(1)
    const [result, setResult] = useState([])
    const [currentResult, setCurrentResult] = useState([])
    const lastIndex = postPerPage * currentPage
    const firstIndex = lastIndex - postPerPage
    
    useEffect(() => {
        async function loadUsers() {
            try {
                let response
                response = await getQuestProofList(tipe)
                
                console.log(response)
                setResult(response.data)
                setCurrentResult(response.data.slice(firstIndex, lastIndex))
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadUsers()
        }
        
        onLoad()
    }, [tipe]) /* eslint-disable-line */

    useEffect(() => {
        setCurrentResult(result.slice(firstIndex, lastIndex))
    }, [currentPage]) /* eslint-disable-line */

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
                                <p>
                                    {
                                    item.deskripsi.length > 400
                                    ? item.deskripsi.substring(0, 400) + "..."
                                    : item.deskripsi
                                    }
                                </p>
                                <p className="has-text-danger">{`Untuk: ${item.target === "all" ? "semua kandidat" : item.target}`}</p>
                                <p className="has-text-danger">{`Deadline: ${item.deadline}`}</p>
                            </div>
                            <QuestModal item={item} id={`modal-quest-${index}`} tipe={tipe}/>
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