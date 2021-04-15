import React, {useState} from 'react'
import Button from 'components/Button'
import firebase from "firebase/app";
import config from 'config'
import { createCase } from 'resources/cheater'
import { useFormFields } from 'libs/hooksLib'
import Select from 'react-select'

const LaporkanKandidat = ({kandidatList, pageUser}) => {
    const userId = pageUser.id

    const massaOptions = kandidatList.map((item, index) => {
        return { value: item.username, label: `${item.fullname} - ${item.ou}`}
    })
    const [accused, setAccused] = useState("")
    const [photo_url, setPhotoUrl] = useState()
    const [fields, handleFieldChange] = useFormFields({
        deskripsi: "",
        title: ""
    })
    const {assetsURL: {
            image
        }} = config

    const closeModal = () => {
        var modal = document.getElementById(`addCheater`)

        modal.style.display = "none"

        setPhotoUrl("")
    }

    function getFileExtension(nama) {
        return nama.split('.').pop()
    }

    const uploadBukti = async () => {

        if (!photo_url) {
            var storageRef = firebase.storage().ref();
            var file = document.getElementById('fileUnggah').files[0];
            console.log(file.name)
            
            var filePath = `bukti-cheat/${file.name}`
            var uploadTask = await storageRef.child(filePath).put(file);
    
            var downloadURL = await uploadTask.ref.getDownloadURL()
            console.log('File ' + filePath + ' available at', downloadURL);
            // alert('Your File has been Uploaded!')
    
            setFileName(file.name)
            setPhotoUrl(downloadURL)
        }

        const data = {
            reporter: userId,
            accused: accused.value,
            photo_url: photo_url ? photo_url : downloadURL,
            description: fields.deskripsi,
            status: "pending",
            title: fields.title
        }

        console.log(data)

        const response = await createCase(data)
        console.log(response)
        if (response.status >= 200 && response.status < 400) {
            alert("Berhasil menambahkan case baru")
            closeModal();
        } else {
            alert("Terdapat masalah, mohon coba lagi.")
        }
    }

    const [fileName, setFileName] = useState('')

    const showFileName = () => {
        let fileUnggah = document.querySelector("#fileUnggah")
        document.querySelector("#fileName").textContent = `You uploaded '${fileUnggah.files[0].name}'`
    }

    return (
        <div id="addCheater" className="modal add-quest unggah-bukti">
            <div className="modal-content add-quest-content blue">
                <span className="close" onClick={() => closeModal()}>&times;</span>
                <h3>Laporkan Kandidat</h3>
                <hr/>
                <br/>
                <label>
                    <h5 className="mb-2">Judul Laporan:</h5>
                </label>
                
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={fields.title}
                    onChange={handleFieldChange}
                    placeholder="Judul Laporan"
                    />
                <br/>

                <label>
                    <h5 className="mb-2">Siapa yang Kamu Laporkan:</h5>
                </label>
                <Select
                    value={accused}
                    onChange={setAccused}
                    options={massaOptions}
                />
                <p className="status"></p>
                <br/>

                <h5 className="mb-2">Deskripsi Laporan:</h5>
                <textarea name="deskripsi" id="deskripsi" value={fields.deskripsi} onChange={handleFieldChange}/>
                <br/>

                <h5 className="mb-2">Unggah File Bukti:</h5>
                <input type="file" name="file" id="fileUnggah" className="inputfile" onChange={showFileName} />
                <label htmlFor="fileUnggah"><img src={`${image}/input-file.png`} alt="Choose Your File"/></label>
                <p id="fileName" className="mt-3 has-text-danger">{fileName && `File Uploaded ${fileName}`}</p>
                <br/>

                <br/>
                <div className="btn-container">
                    <Button file="ok-cream-btn" onClick={uploadBukti}/>
                    <Button file="cancel-cream-btn" onClick={closeModal}/>
                </div>
            </div>
        </div>
    )
}

export default LaporkanKandidat;
