import React from 'react'
import Button from 'components/Button'

const UnggahBuktiModal = () => {

    const closeModal = () => {
        var modal = document.getElementById(`unggahBukti`)

        modal.style.display = "none"
    }

    return (
        <div id="unggahBukti" className="modal add-quest unggah-bukti">
            <div className="modal-content add-quest-content blue">
                <span className="close" onClick={() => closeModal()}>&times;</span>
                <h3>Beri Quest Baru</h3>
                <hr/>
                <br/>
                <label>
                    <h5 className="mb-2">Judul Quest:</h5>
                </label>
                <input type="text" id="judul" name="judul"/>
                <br/>
                <br/>
                <label>
                    <h5 className="mb-2">Detail Quest:</h5>
                </label>
                <textarea name="deskripsi" id="deskripsi"/>
                <br/>
                <br/>
                <div className="columns">
                    <div className="column">
                        <label>
                            <h5 className="mb-2">Tenggat Quest:</h5>
                        </label>
                        <input type="date" id="deadline" name="deadline"/>
                        <p
                            style={{
                            fontSize: "10pt",
                            paddingTop: "5px"
                        }}>Tenggat pada jam 23:59 WIB</p>
                    </div>
                    <div className="column">
                        <label>
                            <h5 className="mb-2">Diperuntukkan bagi:</h5>
                        </label>
                        <select id="target" name="target" placeholder="Pilih target">
                            <option value="all">Semua</option>
                            <option value="k3m">K3M</option>
                            <option value="mwa">MWA-WM</option>
                        </select>

                    </div>
                </div>
                <br/>
                <input type="checkbox" name="setuju" id="setuju"/>
                <span className="setuju-add">Saya bersedia berbagi informasi kontak saya (email &amp; HP) ke kandidat</span>
                <br/>
                <div className="btn-container">
                    <Button file="ok-cream-btn"/>
                    <Button file="cancel-cream-btn" onClick={closeModal}/>
                </div>
            </div>
        </div>
    )
}

export default UnggahBuktiModal
