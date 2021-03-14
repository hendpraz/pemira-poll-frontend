import React, {useState} from 'react'
import { adminQuestProofAccept, adminQuestProofReject } from 'resources/questproof'

const QuestModal = ({ item, id, tipe }) => {
    const [game_point, setGamePoint] = useState(0)

    const closeModal = () => {
        var modal = document.getElementById(id);

        modal.style.display = "none"
    }

    const acceptQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin APPROVE bukti oleh "${item.user.fullname}"?`)
        if (r) {
            const response = await adminQuestProofAccept(item.id)
            console.log(response)
    
            window.location.reload()
        }
    }

    const rejectQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin REJECT bukti oleh "${item.user.fullname}"  Melakukan ini dapat membuat pengurangan point sebesar ${game_point} kepada pengguna yang terlibat.?`)
        if (r) {
            const response = await adminQuestProofReject(item.id, {game_point})
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
                                    <td><h5>Judul Quest</h5></td>
                                    <td><h5>{`: ${item.quest.judul}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Pembuat Quest</h5></td>
                                    <td><h5>{`: ${item.quest.user.fullname}${item.quest.user.nim ? " - " + item.quest.user.nim : ""}` }</h5></td>
                                </tr>
                                
                                <tr>
                                    <td><h5>Deadline Quest</h5></td>
                                    <td><h5>{`: ${item.quest.deadline}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Pengupload Bukti</h5></td>
                                    <td><h5>{`: ${item.user.fullname}${item.user.nim ? " - " + item.user.nim : ""}` }</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>File Bukti</h5></td>
                                    <td><h5>{`: ${item.photo_url}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Deskripsi Bukti</h5></td>
                                    <td><h5>{`: ${item.description}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Status Bukti</h5></td>
                                    <td><h5>{`: ${item.status}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Created At</h5></td>
                                    <td><h5>{`: ${item.created_at}`}</h5></td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            tipe === "pending" &&
                            <div>
                                <button className="button is-primary is-large" onClick={acceptQuest}>Terima</button>
                                <br />
                                <br />
                                <div>
                                    <h5>TOLAK Bukti dan Kurangi Game Point</h5>
                                    <div className="create-user-container columns">
                                        <div className="input-container column">
                                            <label><h5>Game Point*</h5></label>
                                            <input type="text" required name="game_point" id="game_point" value={game_point} onChange={setGamePoint}/>
                                        </div>
                                    </div>
                                </div>
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
