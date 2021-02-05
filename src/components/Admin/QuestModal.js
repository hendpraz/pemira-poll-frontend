import React from 'react'
import { adminQuestAccept, adminQuestReject } from 'resources/quest'

const QuestModal = ({ item, id, tipe }) => {
    const closeModal = () => {
        var modal = document.getElementById(id);

        modal.style.display = "none"
    }

    const acceptQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin ACCEPT quest berjudul "${item.judul}"?`)
        if (r) {
            const response = await adminQuestAccept(item.id)
            console.log(response)
    
            window.location.reload()
        }
    }

    const rejectQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin REJECT quest berjudul "${item.judul}"?`)
        if (r) {
            const response = await adminQuestReject(item.id)
            console.log(response)
    
            window.location.reload()
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
                    </section>
                </div>
            </div>
        </div>
    )
}

export default QuestModal
