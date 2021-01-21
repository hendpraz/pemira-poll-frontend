import React from 'react'
import Button from 'components/Button'

const ModalSubmit = () => {

    const closeModal = () => {
        var modal = document.getElementById(`konfirmasiCoblos`)

        modal.style.display = "none"
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
                        <p>Saya Hafid Abi D / 16519371 akan memilh kandidat No X atas nama (nama
                            kandidat) atas inisiatif saya sendiri, tanpa dipaksa, bla bla bla
                            <br/>
                            <br/>
                            segala keputusan anda tidak dapat diubah lagi ketika sudah klik setuju
                        </p>
                        <div className="setuju-coblos">
                            <input id="setujuCoblos" type="checkbox" />
                            <label forHtml="setujuCoblos">Saya setuju dengan pernyataan diatas</label>
                        </div>
                    </div>
                    <div className="captcha">

                    </div>

                    <div className="container">
                        <Button file="coblos"/>
                        <Button file="batal-merah"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalSubmit