import React, { useState, useEffect } from 'react'
import DuelModal from './DuelModal'
import Pagination from '../Pagination'
import { getAllEverAcceptedDuel, getAllNotAcceptedDuel, getDuelListMassaLembaga } from 'resources/duel'

const DuelList = ({tipe}) => {

    const postPerPage = 6
    const [currentPage, setCurrentPage] = useState(1)
    const [result, setResult] = useState([])
    const [currentResult, setCurrentResult] = useState([])
    const lastIndex = postPerPage * currentPage
    const firstIndex = lastIndex - postPerPage
    
    useEffect(() => {
        async function loadUsers() {
            try {
                console.log(tipe)
                let response
                if (tipe === "not-accepted") {
                    response = await getAllNotAcceptedDuel()
                } else if (tipe === "running") {
                    response = await getDuelListMassaLembaga(tipe)
                } else if (tipe === "ever-accepted") {
                    response = await getAllEverAcceptedDuel()
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
    }, [tipe]) /* eslint-disable-line */

    useEffect(() => {
        setCurrentResult(result.slice(firstIndex, lastIndex))
    }, [currentPage]) /* eslint-disable-line */

    const detailUser = (index) => {
        var modal = document.getElementById(`modal-quest-${index}`);

        // console.log(modal)
        var duel = document.getElementById(`quest-${index}`);

        duel.onclick = function () {
            modal.style.display = "flex";
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
                            <DuelModal item={item} id={`modal-quest-${index}`} tipe={tipe}/>
                        </div>
                    )
                })}
            </div>
            <Pagination
                length={result.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                postPerPage={postPerPage}/>
            {
                tipe === "running" &&
                <>
                    <br />
                    <p className="has-text-danger">
                        Perhatian! Menyelesaikan suatu duel dapat mengakibatkan:<br />
                        1. Jika Duel bersifat WAJIB, semua "target" Kandidat yang tidak menyelesaikan duel akan dikurangi Game Point-nya<br />
                        2. Jika Duel bersifat OPSIONAL, semua "target" Kandidat yang menyelesaikan duel akan ditambahkan Game Point-nya. Kemudian,
                        Jika setidaknya ada satu kandidat yang berhasil menyelesaikan duel, pembuat duel akan diberikan Game Point. Tetapi jika tidak
                        ada Kandidat yang berhasil, pembuat duel tidak diberikan Game Point.<br />
                        3. Untuk menandakan keberhasilan Kandidat dalam mengerjakan Duel, Admin perlu terlebih dahulu meng-Approve Bukti Duel yang diajukan
                        oleh kandidat.
                        <br /><br />
                        Keterangan: Yang dimaksud "target" artinya target yang dituju oleh Duel. Jika duel diperuntukkan bagi K3M, maka Duel tersebut memiliki
                        target yaitu K3M.
                    </p>
                </>
            }
        </div>
    )
}

export default DuelList
