import React from 'react'
import { useFormFields } from "libs/hooksLib"
import { createBakalCalon } from "resources/bakalcalon"

const CreateUser = () => {
    const [fields, handleFieldChange] = useFormFields({
        // Data Kandidat
        fullname: "",
        tipe_kandidat: "",
        fakultas: "",
        jurusan: "",
        angkatan: "",
    });

    const isValidData = () => {
        // check tipe_kandidat
        const validKandidatTypes = ['k3m', 'mwa']
        const isTipeKandidatValid = validKandidatTypes.some(el => el === fields.tipe_kandidat)

        console.log(isTipeKandidatValid)

        return isTipeKandidatValid
    }

    const submitUser = async () => {
        try {
            let data = JSON.parse(JSON.stringify(fields))
    
            // Add OU of data
            data.ou = `${fields.fakultas} - ${fields.jurusan}`
    
            console.log(data)
            
            if(isValidData()) {
                const r = window.confirm(`Apakah Anda yakin dengan data user ${fields.fullname} yang diisi?`)
                if (r) {
                    // Create kandidat data
                    let response = await createBakalCalon(data)
                    const status = response.status
                    
                    response = response.json()
                    console.log(status)
    
                    if (status >= 200 && status < 300)  {
                        alert("Berhasil menambahkan kandidat.")
                    } else {
                        alert("Tidak berhasil. Silakan coba kembali")
                    }
                    // window.location.reload();
                }
            } else {
                alert("Data tidak valid! Silakan cek kembali.")
            }
        } catch(error) {
            console.log(error)
            alert("Tidak berhasil. Silakan coba kembali")
        }
    }

    return (
        <div>
            <div className="create-user-container columns">
                <div className="input-container column">                    
                    <label><h5>Fullname*</h5></label>
                    <input type="text" required name="fullname" id="fullname" value={fields.fullname} onChange={handleFieldChange}/>
                    <br/><br/>
                    

                    <label><h5>Fakultas/Sekolah (gunakan singkatan)*</h5></label>
                    <input type="text" required name="fakultas" id="fakultas" value={fields.fakultas} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Jurusan*</h5></label>
                    <input type="text" required name="jurusan" id="jurusan" value={fields.jurusan} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Angkatan*</h5></label>
                    <input type="text" required name="angkatan" id="angkatan" value={fields.angkatan} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Tipe Kandidat*</h5></label>
                    <div className="select">
                        <select name="tipe_kandidat" id="tipe_kandidat" value={fields.tipe_kandidat} onChange={handleFieldChange}>
                            <option value='-'>Pilih</option>
                            <option value='k3m'>K3M</option>
                            <option value='mwa'>MWA-WM</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="has-text-centered my-5">
                <button className="button is-primary is-large" onClick={submitUser}>Submit</button>
            </div>

        </div>
    )
}

export default CreateUser