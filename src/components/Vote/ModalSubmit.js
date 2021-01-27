import React from 'react'
import Button from 'components/Button'
import { useHistory } from 'react-router-dom'

const ModalSubmit = ({prefsString, user}) => {

    const history = useHistory()

    const closeModal = () => {
        var modal = document.getElementById(`konfirmasiCoblos`)

        modal.style.display = "none"
    }

    const submitVote = () => {
        history.push('votesuccess')
    }

    return (
        <div>
            <div id="konfirmasiCoblos" className="modal konfirmasi-coblos">
                <div className="modal-content add-quest-content blue">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <h3>Konfirmasi Pilihan</h3>
                    <hr/>
                    <br/>
                    <div className="coblos-content">
                        <p>Saya {user.fullname} / {user.nim} akan memilih preferensi kandidat {prefsString} atas
                        inisiatif saya sendiri dan tanpa dipaksa.
                            <br/>
                            <br/>
                            Segala keputusan Anda tidak dapat diubah lagi ketika sudah klik setuju.
                        </p>
                        <div className="setuju-coblos">
                            <input id="setujuCoblos" type="checkbox" />
                            <label forhtml="setujuCoblos">Saya setuju dengan pernyataan diatas</label>
                        </div>
                    </div>
                    <div className="captcha">

                    </div>

                    <div className="container">
                        <Button file="coblos" onClick={submitVote} />
                        <Button file="batal-merah" onClick={closeModal}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalSubmit