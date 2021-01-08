import React from 'react'
import Button from 'components/Button'

const AddQuestModal = () => {

    const closeModal = () => {
        var modal = document.getElementById(`addQuest`);

        modal.style.display = "none"
    }

    return (

        <div>
            <div id="addQuest" className="modal add-quest">
                <div className="modal-content add-quest-content blue">
                    <h3>Beri Quest Baru</h3>
                    <hr/>
                    <br/>
                    <label>
                        <h5 className="mb-2">Judul Quest:</h5>
                    </label>
                    <input type="text" id="judul-quest" name="judul-quest"/>
                    <br/>
                    <br/>
                    <label>
                        <h5 className="mb-2">Detail Quest:</h5>
                    </label>
                    <textarea name="detail-quest" id="detail-quest"/>
                    <br/>
                    <br/>
                    <div className="columns">
                        <div className="column">
                            <label>
                                <h5 className="mb-2">Tenggat Quest:</h5>
                            </label>
                            <input type="date"/>
                        </div>
                        <div className="column">
                            <label>
                                <h5 className="mb-2">Diperuntukkan bagi:</h5>
                            </label>
                            <select id="quest-untuk" name="quest-untuk">
                                <option disabled selected value>Pilih target</option>
                                <option value="semua" defaultValue>Semua</option>
                                <option value="K3M">K3M</option>
                                <option value="MWAWM">MWAWM</option>
                            </select>

                        </div>
                    </div>
                    <br/>
                    <input type="checkbox" name="setuju-add" id="setuju-add"/>
                    <span for="setuju-add">Saya bersedia berbagi informasi kontak saya (email & HP) ke kandidat</span>
                    <br/>
                    <div className="btn-container">
                        <Button file="ok-cream-btn"/>
                        <Button file="cancel-cream-btn" onClick={closeModal}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddQuestModal
