import React, {useState} from 'react'
import Button from 'components/Button'
import config from 'config'
import firebase from 'config/firebase-init'

const UnggahBuktiModal = ({item}) => {

    const {assetsURL: {
            image
        }} = config

    const closeModal = () => {
        var modal = document.getElementById(`unggahBukti`)

        modal.style.display = "none"
    }

    const uploadBukti = async () => {

        var storageRef = firebase.storage().ref();
        var file = document.getElementById('fileUnggah').files[0]
        
        var filePath = `Unggah Bukti/${file.name}`
        var uploadTask = await storageRef.child(filePath).put(file.file);

        var downloadURL = await uploadTask.ref.getDownloadURL()
        console.log('File ' + filePath + ' available at', downloadURL);
        alert('Your File has been Uploaded!')

        setFileName(file.name)
        closeModal();
    }

    console.log(item)

    const [fileName, setFileName] = useState('')

    const showFileName = () => {
        let fileUnggah = document.querySelector("#fileUnggah")
        document.querySelector("#fileName").textContent = `You uploaded '${fileUnggah.files[0].name}'`
    }

    return (
        <div id="unggahBukti" className="modal add-quest unggah-bukti">
            <div className="modal-content add-quest-content blue">
                <span className="close" onClick={() => closeModal()}>&times;</span>
                <h3>{item.judul}</h3>
                <hr/>
                <br/>
                <label>
                    <h5 className="mb-2">Detail Quest:</h5>
                </label>
                <p>{item.deskripsi}</p>
                <br/>
                <label>
                    <h5 className="mb-2">Current Quest Status:</h5>
                </label>
                <p className="status">{item.status}</p>

                <br/>
                <h5 className="mb-2">Unggah File Bukti:</h5>
                <input type="file" name="file" id="fileUnggah" class="inputfile" onChange={showFileName} />
                <label for="fileUnggah"><img src={`${image}/input-file.png`} alt="Choose Your File"/></label>
                <p id="fileName" className="mt-3 has-text-danger">{fileName && `File Uploaded ${fileName}`}</p>
                <br/>
                <br/>
                <h5 className="mb-2">Deskripsi:</h5>
                <textarea name="deskripsi" id="deskripsi"/>

                <br/>
                <div className="btn-container">
                    <Button file="ok-cream-btn" onClick={uploadBukti}/>
                    <Button file="cancel-cream-btn" onClick={closeModal}/>
                </div>
            </div>
        </div>
    )
}

export default UnggahBuktiModal
