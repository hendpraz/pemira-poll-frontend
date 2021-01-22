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
        id_line: "",
        address: "",
        groups: "3",
        tipe_kandidat: "non"
    });

    const isValidData = () => {
        // check username
        const isUsernameValid = fields.username.length > 0 && fields.username.length < 50

        // check passwords
        const isPasswordValid = fields.password.length > 0 && (fields.password === fields.password_confirmation)

        // check tipe_kandidat
        const validKandidatTypes = ["k3m", "mwa", "non"]
        const isTipeKandidatValid = validKandidatTypes.some(el => el === fields.tipe_kandidat)

        return isUsernameValid && isPasswordValid && isTipeKandidatValid
    }

    const submitUser = async () => {
        if(isValidData()) {
            const r = window.confirm(`Apakah Anda yakin dengan data user ${fields.username} yang diisi?`)
            if (r) {
                let data = JSON.parse(JSON.stringify(fields))
                
                if (data.groups !== "5") {
                    data.tipe_kandidat = "non"
                }
                console.log(data)
                // await createUser(data)
            }
        } else {
            alert("Data tidak valid! Silakan cek kembali.")
        }
    }

    return (
        <div>
            <div className="create-user-container columns">
                <div className="input-container column">
                    <label><h5>Username</h5></label>
                    <input type="text" required name="username" id="username" value={fields.username} onChange={handleFieldChange}/>
                    <br/><br/>
                    
                    <label><h5>Password</h5></label>
                    <input type="password" required name="password" id="password" value={fields.password} onChange={handleFieldChange}/>
                    <br/><br/>
                    
                    <label><h5>Retype Password</h5></label>
                    <input type="password" required name="password_confirmation" id="password_confirmation" value={fields.password_confirmation} onChange={handleFieldChange}/>
                    {
                        fields.password.length > 0 && fields.password !== fields.password_confirmation 
                        ? <p className="has-text-danger">Password berbeda!</p>
                        : <><br/><br/></>
                    }
                    

                    <label><h5>Fullname</h5></label>
                    <input type="text" required name="fullname" id="fullname" value={fields.fullname} onChange={handleFieldChange}/>
                    <br/><br/>
                    
                    <label><h5>Email</h5></label>
                    <input type="email" required name="email" id="email" value={fields.email} onChange={handleFieldChange}/>
                </div>
                <div className="input-container column">
                    <label><h5>Phone Number</h5></label>
                    <input type="text" required name="phone_number" id="phone_number" value={fields.phone_number} onChange={handleFieldChange}/>
                    <br/><br/>
                    
                    <label><h5>ID Line</h5></label>
                    <input type="text" required name="id_line" id="id_line" value={fields.id_line} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Address</h5></label>
                    <input type="text" required name="address" id="address" value={fields.address} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Select Role</h5></label>

                    <div className="select">
                        <select name="groups" id="groups" value={fields.groups} onChange={handleFieldChange} required>
                            <option value='1'>Super User</option>
                            <option value='2'>Admin</option>
                            <option value='3'>Massa</option>
                            <option value='4'>Lembaga</option>
                            <option value='5'>Kandidat</option>
                        </select>
                    </div>
                    <br/>
                    <br/>
                    
                    <label><h5>Tipe Kandidat</h5></label>
                    <div className="select">
                        <select name="tipe_kandidat" id="tipe_kandidat" disabled={fields.groups !== '5'} value={fields.tipe_kandidat} onChange={handleFieldChange}>
                            <option value='non'>Non-Kandidat</option>
                            <option value='k3m'>{fields.groups !== '5' ? "Non-Kandidat" : "K3M"}</option>
                            <option value='mwa'>{fields.groups !== '5' ? "Non-Kandidat" : "MWA-WM"}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="has-text-centered my-5">
                <button class="button is-primary is-large" onClick={submitUser}>Submit</button>
            </div>

        </div>
    )
}

export default CreateUser
