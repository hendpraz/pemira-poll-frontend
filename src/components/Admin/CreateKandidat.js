import React from 'react'
import { useFormFields } from "libs/hooksLib"
import { createKandidat } from "resources/user"

const CreateUser = () => {
    const [fields, handleFieldChange] = useFormFields({
        // Data Kandidat
        username: "",
        password: "",
        password_confirmation: "",
        fullname: "",
        email: "",
        phone_number: "",
        line_id: "",
        address: "",
        tipe_kandidat: "",
        nim: "",
        fakultas: "",
        jurusan: "",
        photo_url: "",

        // Konten
        visi: "",
        misi: "",
        link_konten: "",
        link_promotor_timses: "",
    });

    const isValidData = () => {
        // check username
        const isUsernameValid = fields.username.length >= 8 && fields.username.length < 50

        // check passwords
        const isPasswordValid = fields.password.length >= 8 && (fields.password === fields.password_confirmation)

        // check tipe_kandidat
        const validKandidatTypes = ['k3m', 'mwa']
        const isTipeKandidatValid = validKandidatTypes.some(el => el === fields.tipe_kandidat)

        if(!isUsernameValid) {
            alert("Username tidak valid.")
        }

        if (!isPasswordValid) {
            alert("Password tidak valid")
        }

        if (!isTipeKandidatValid) {
            alert("Tipe Kandidat tidak valid")
        }

        return isUsernameValid && isPasswordValid && isTipeKandidatValid
    }

    const submitUser = async () => {
        try {
            let data = JSON.parse(JSON.stringify(fields))
                
            // Fill in groups, KANDIDAT -> 5
            data.groups = 5;
    
            // Add OU of data
            data.ou = `${fields.fakultas} - ${fields.jurusan}`
            data.email_non_itb = fields.email
    
            console.log(data)
            
            if(isValidData()) {
                const r = window.confirm(`Apakah Anda yakin dengan data user ${fields.username} yang diisi?`)
                if (r) {
                    // Create kandidat data
                    let response = await createKandidat(data)
                    const status = response.status
                    
                    response = response.json()
                    console.log(response)
    
                    if (status >= 200 && status < 300) {
                        alert("Berhasil menambahkan kandidat.")
                        window.location.reload();
                    } else {
                        alert("Tidak berhasil. Silakan coba kembali")
                    }
                }
            } else {
                alert("Data tidak valid! Silakan cek kembali.")
            }
        } catch(error) {
            console.log(error)
            alert("Tidak berhasil. Silakan coba kembali")
        }
    }

    const isValidUsernameChar = () => {
        // eslint-disable-next-line no-useless-escape
        const usernameRegex = /^[a-z0-9\_]+$/
        const regexMatch = fields.username.match(usernameRegex)

        return regexMatch !== null
    }

    return (
        <div>
            <div className="create-user-container columns">
                <div className="input-container column">
                    <label><h5>Username*</h5></label>
                    <input type="text" required name="username" id="username" value={fields.username} onChange={handleFieldChange}/>
                    <p>Jangan gunakan NIM jika user memiliki akun INA; Hanya gunakan lowercase alphabet, angka, dan/atau simbol "_"; Minimal 8 karakter;</p>
                    {
                        fields.username.length > 0 && fields.username.length < 8
                        && <p className="has-text-danger">Username terlalu pendek. Minimal 8 karakter</p>
                    }
                    {
                        fields.username.length > 0 && !isValidUsernameChar()
                        && <p className="has-text-danger">Format username tidak sesuai</p>
                    }
                    
                    <label><h5>Password*</h5></label>
                    <input type="password" required name="password" id="password" value={fields.password} onChange={handleFieldChange}/>
                    {
                        fields.password.length > 0 && fields.password.length < 8
                        ? <p className="has-text-danger">Password terlalu pendek. Minimal 8 karakter</p>
                        : <><br/><br/></>
                    }
                    
                    <label><h5>Retype Password*</h5></label>
                    <input type="password" required name="password_confirmation" id="password_confirmation" value={fields.password_confirmation} onChange={handleFieldChange}/>
                    {
                        fields.password.length > 0 && fields.password_confirmation.length > 0 && fields.password !== fields.password_confirmation 
                        ? <p className="has-text-danger">Password berbeda!</p>
                        : <><br/><br/></>
                    }
                    
                    <label><h5>Fullname*</h5></label>
                    <input type="text" required name="fullname" id="fullname" value={fields.fullname} onChange={handleFieldChange}/>
                    <br/><br/>
                    
                    <label><h5>NIM*</h5></label>
                    <input type="text" required name="nim" id="nim" value={fields.nim} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Fakultas/Sekolah (gunakan singkatan)*</h5></label>
                    <input type="text" required name="fakultas" id="fakultas" value={fields.fakultas} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Jurusan*</h5></label>
                    <input type="text" required name="jurusan" id="jurusan" value={fields.jurusan} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Address</h5></label>
                    <input type="text" required name="address" id="address" value={fields.address} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Url Foto</h5></label>
                    <input type="text" required name="photo_url" id="photo_url" value={fields.photo_url} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Email*</h5></label>
                    <input type="email" required name="email" id="email" value={fields.email} onChange={handleFieldChange}/>
                </div>
                <div className="input-container column">
                    <label><h5>Phone Number*</h5></label>
                    <input type="text" required name="phone_number" id="phone_number" value={fields.phone_number} onChange={handleFieldChange}/>
                    <br/><br/>
                    
                    <label><h5>ID Line</h5></label>
                    <input type="text" required name="line_id" id="line_id" value={fields.line_id} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Visi*</h5></label>
                    <textarea className="textarea" placeholder="Visi" required name="visi" id="visi" value={fields.visi} onChange={handleFieldChange}></textarea>
                    <br/>

                    <label><h5>Misi*</h5></label>
                    <textarea rows="5" className="textarea" placeholder="Misi" required name="misi" id="misi" value={fields.misi} onChange={handleFieldChange}></textarea>
                    <br/>

                    <label><h5>Link Konten*</h5></label>
                    <input type="text" required name="link_konten" id="link_konten" value={fields.link_konten} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Link Data Promotor-Timses*</h5></label>
                    <input type="text" required name="link_promotor_timses" id="link_promotor_timses" value={fields.link_promotor_timses} onChange={handleFieldChange}/>
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
            <p>*Required. Kolom tanpa bintang dapat Anda kosongkan</p>
            <div className="has-text-centered my-5">
                <button className="button is-primary is-large" onClick={submitUser}>Submit</button>
            </div>

        </div>
    )
}

export default CreateUser