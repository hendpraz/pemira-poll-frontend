import React, {useState} from 'react'
import { adminDuelProofAccept, adminDuelProofReject } from 'resources/duelproof'

const DuelModal = ({ item, id, tipe }) => {
    const [game_point, setGamePoint] = useState(0)

    const closeModal = () => {
        var modal = document.getElementById(id);

        modal.style.display = "none"
    }

    const acceptDuel = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin APPROVE bukti oleh "${item.user.fullname}"?`)
        if (r) {
            const response = await adminDuelProofAccept(item.id)
            console.log(response)
    
            window.location.reload()
        }
    }

    const rejectDuel = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin REJECT bukti oleh "${item.user.fullname}"  Melakukan ini dapat membuat pengurangan point sebesar ${game_point} kepada pengguna yang terlibat.?`)
        if (r) {
            const response = await adminDuelProofReject(item.id, {game_point})
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
                        <p className="modal-card-title has-text-primary">Duel: <span className="username">{item.judul}</span></p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td><h5>Judul Duel</h5></td>
                                    <td><h5>{`: ${item.duel.judul}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Pembuat Duel</h5></td>
                                    <td><h5>{`: ${item.duel.user.fullname}${item.duel.user.nim ? " - " + item.duel.user.nim : ""}` }</h5></td>
                                </tr>
                                
                                <tr>
                                    <td><h5>Deadline Duel</h5></td>
                                    <td><h5>{`: ${item.duel.deadline}`}</h5></td>
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
                                <button className="button is-primary is-large" onClick={acceptDuel}>Terima</button>
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
                                <button className="button is-primary is-danger" onClick={rejectDuel}>Tolak</button>
                            </div>
                        }
                    </section>
                </div>
            </div>
        </div>
    )
}

export default DuelModal
