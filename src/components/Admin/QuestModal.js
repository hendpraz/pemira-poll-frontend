import React, { useState } from 'react'
import { adminQuestAccept, adminQuestReject, adminQuestFinish } from 'resources/quest'
import { confirmAlert } from 'react-confirm-alert'

const QuestModal = ({ item, id, tipe }) => {
    const [game_point, setGamePoint] = useState(0)

    const closeModal = () => {
        var modal = document.getElementById(id);

        modal.style.display = "none"
    }

    const acceptQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin ACCEPT quest berjudul "${item.judul}"?`)
        if (r) {
            const response = await adminQuestAccept(item.id)
            console.log(response)
    
            checkStatusAndReload(response.status, "Berhasil ACCEPT quest")
        }
    }

    const rejectQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin REJECT quest berjudul "${item.judul}"?`)
        if (r) {
            const response = await adminQuestReject(item.id)
            console.log(response)
    
            checkStatusAndReload(response.status, "Berhasil me-REJECT quest")
        }
    }

    const continueFinishQuest = async () => {
        const response = await adminQuestFinish(item.id, {game_point})
        console.log(response)

        checkStatusAndReload(response.status, "Berhasil menyelesaikan quest")
    }
    
    const finishQuest = async () => {
        confirmAlert({
            title: 'Konfirmasi',
            message: `Apakah Anda yakin ingin MENYELESAIKAN quest berjudul "${item.judul}"? Melakukan ini dapat membuat penambahan point sebesar ${game_point} kepada pengguna yang terlibat.`,
            buttons: [
              {
                label: 'Yes',
                onClick: () => continueFinishQuest()
              },
              {
                label: 'No',
              }
            ]
        })
    }

    const checkStatusAndReload = (status, message) => {
        if (status >= 200 && status < 300) {
            alert(message)
            window.location.reload();
        } else {
            alert("Tidak berhasil. Silakan coba kembali")
        }
    }

    return (
        <div>
            <div className="modal" id={id}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-primary">Quest: <span className="username">{item.judul}</span></p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td><h5>Quest Creator</h5></td>
                                    <td><h5>{`: ${item.user.fullname}${item.user.nim ? " - " + item.user.nim : ""}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Deadline</h5></td>
                                    <td><h5>{`: ${item.deadline}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Deskripsi</h5></td>
                                    <td><h5>{`: ${item.deskripsi}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Created At</h5></td>
                                    <td><h5>{`: ${item.created_at}`}</h5></td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            tipe === "not-accepted" &&
                            <div>
                                <button className="button is-primary is-large" onClick={acceptQuest}>Terima</button>
                                <button className="button is-primary is-danger" onClick={rejectQuest}>Tolak</button>
                            </div>
                        }
                        {
                            tipe === "running" &&
                            <>
                                <div>
                                    <h5>Berikan Poin dan Selesaikan Quest</h5>
                                    <div className="create-user-container columns">
                                        <div className="input-container column">
                                            <label><h5>Game Point*</h5></label>
                                            <input type="text" required name="game_point" id="game_point" value={game_point} onChange={setGamePoint}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="button is-primary is-large" onClick={finishQuest}>Finish Quest</button>
                                </div>
                            </>
                        }
                    </section>
                </div>
            </div>
        </div>
    )
}

export default QuestModal
