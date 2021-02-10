import React from 'react'
import { useFormFields } from "libs/hooksLib"
import { createUser } from "resources/user"

const CreateUser = () => {
    const [fields, handleFieldChange] = useFormFields({
        username: "",
        password: "",
        password_confirmation: "",
        fullname: "",
        email: "",
        phone_number: "",
        line_id: "",
        address: "",
        groups: "3",
        photo_url: "",
        fakultas: "",
        jurusan: "",
        is_akmet: "",
        nim: ""
    });

    const isValidData = () => {
        // check username
        const isUsernameValid = fields.username.length >= 8 && fields.username.length < 50 && isValidUsernameChar()

        // check passwords
        const isPasswordValid = fields.password.length >= 8 && (fields.password === fields.password_confirmation)

        if(!isUsernameValid) {
            alert("Username tidak valid.")
        }

        if (!isPasswordValid) {
            alert("Password tidak valid")
        }

        return isUsernameValid && isPasswordValid
    }

    const isValidUsernameChar = () => {
        const usernameRegex = /^[a-z0-9\_]+$/
        const regexMatch = fields.username.match(usernameRegex)

        return regexMatch !== null
    }

    const submitUser = async () => {
        if(isValidData()) {
            const r = window.confirm(`Apakah Anda yakin dengan data user ${fields.username} yang diisi?`)
            if (r) {
                let data = JSON.parse(JSON.stringify(fields))
                
                data.groups = parseInt(data.groups)
                data.email_non_itb = fields.email

                if (data.is_akmet === "Akmet") {
                    data.ou = "Akmet"
                }
                console.log(data)
                const response = await createUser(data)
                const status = response.httpStatus
                console.log(response)

                if (status >= 200 && status < 300) {
                    alert("Berhasil menambahkan user.")
                    window.location.reload()
                } else {
                    alert("Tidak berhasil. Silakan coba kembali")
                }
            }
        }
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

                    <label><h5>NIM</h5></label>
                    <input type="text" name="nim" id="nim" value={fields.nim} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Url Foto</h5></label>
                    <input type="text" name="photo_url" id="photo_url" value={fields.photo_url} onChange={handleFieldChange}/>
                    <br/><br/>
                    
                    <label><h5>Email*</h5></label>
                    <input type="email" required name="email" id="email" value={fields.email} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Phone Number*</h5></label>
                    <input type="text" required name="phone_number" id="phone_number" value={fields.phone_number} onChange={handleFieldChange}/>
                </div>
                <div className="input-container column">
                    <label><h5>ID Line</h5></label>
                    <input type="text" name="line_id" id="line_id" value={fields.line_id} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Address</h5></label>
                    <input type="text" name="address" id="address" value={fields.address} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Select Role*</h5></label>

                    <div className="select">
                        <select name="groups" id="groups" value={fields.groups} onChange={handleFieldChange} required>
                            <option value='2'>Admin</option>
                            <option value='3'>Massa</option>
                            <option value='4'>Lembaga</option>
                        </select>
                    </div>
                    <br/>
                    <br/>

                    <label><h5>Apakah merupakan mahasiswa Akmet?*</h5></label>
                    <div className="select">
                        <select name="is_akmet" id="is_akmet" value={fields.is_akmet} onChange={handleFieldChange} required>
                            <option value=''>Bukan Akmet</option>
                            <option value='Akmet'>Akmet</option>
                        </select>
                    </div>
                    <br/><br/>

                    <label><h5>Fakultas/Sekolah (gunakan singkatan)*</h5></label>
                    <input type="text" required name="fakultas" id="fakultas" value={fields.fakultas} onChange={handleFieldChange}/>
                    <p>Jika akmet, kolom ini dapat Anda kosongkan</p>
                    <br/>

                    <label><h5>Jurusan*</h5></label>
                    <input type="text" required name="jurusan" id="jurusan" value={fields.jurusan} onChange={handleFieldChange}/>
                    <p>Jika akmet, kolom ini dapat Anda kosongkan</p>
                    <br/><br/>
                </div>
            </div>
            <p>*Required. Kolom tanpa bintang dapat Anda kosongkan</p>
            <div className="has-text-centered my-5">
                <button className="button is-primary is-large" onClick={submitUser}>Submit</button>
            </div>
            <br />
        </div>
    )
}

export default CreateUser
