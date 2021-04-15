import React, {useState} from 'react'
import Button from 'components/Button'
import firebase from "firebase/app";
import config from 'config'
import { createDuelProof } from 'resources/duelproof'
import { useAppContext } from 'libs/contextLib'
import { useFormFields } from 'libs/hooksLib'

const UnggahBuktiModal = ({item}) => {

    const { user } = useAppContext()
    const [fields, handleFieldChange] = useFormFields({
        deskripsi: ""
    })
    const [photo_url, setPhotoUrl] = useState()
    const {assetsURL: {
            image
        }} = config

    const closeModal = () => {
        var modal = document.getElementById(`unggahBukti`)

        modal.style.display = "none"

        setPhotoUrl("")
    }

    const uploadBukti = async () => {

        if (!photo_url) {
            var storageRef = firebase.storage().ref();
            var file = document.getElementById('fileUnggah').files[0]
            
            var filePath = `bukti-duel/${file.name}`
            var uploadTask = await storageRef.child(filePath).put(file);
    
            var downloadURL = await uploadTask.ref.getDownloadURL()
            console.log('File ' + filePath + ' available at', downloadURL);
            // alert('Your File has been Uploaded!')
    
            setFileName(file.name)
            setPhotoUrl(downloadURL);
        }

        const data = {
            duel: item.id,
            user: user.id,
            photo_url: photo_url ? photo_url : downloadURL,
            description: fields.deskripsi,
            status: "pending"
        }

        const response = await createDuelProof(data)
        console.log(response)
        if (response.status >= 200 && response.status < 400) {
            alert("Berhasil menambahkan bukti duel")
            closeModal();
        } else {
            alert("Terdapat masalah, mohon coba lagi.")
        }
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
                    <h5 className="mb-2">Detail Duel:</h5>
                </label>
                <p>{item.deskripsi}</p>
                <br/>
                <label>
                    <h5 className="mb-2">Current Duel Status:</h5>
                </label>
                <p className="status">{item.status}</p>

                <br/>
                <h5 className="mb-2">Unggah File Bukti:</h5>
                <input type="file" name="file" id="fileUnggah" className="inputfile" onChange={showFileName} />
                <label htmlFor="fileUnggah"><img src={`${image}/input-file.png`} alt="Choose Your File"/></label>
                <p id="fileName" className="mt-3 has-text-danger">{fileName && `File Uploaded ${fileName}`}</p>
                <br/>
                <br/>
                <h5 className="mb-2">Deskripsi Bukti:</h5>
                <textarea name="deskripsi" id="deskripsi" value={fields.deskripsi} onChange={handleFieldChange}/>

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
