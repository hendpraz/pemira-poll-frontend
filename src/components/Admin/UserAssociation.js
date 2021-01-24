import React from 'react'
import { useFormFields } from "libs/hooksLib"

const UserAccociation = () => {
    const [fields, handleFieldChange] = useFormFields({
        username1: "",
        username2: "",
    });

    const submitUser = async () => {
        const r = window.confirm(`Apakah Anda yakin akan mengasosiasikan user ${fields.username1} dengan lembaga ${fields.username2}?`)
        if (r) {
            alert("Feature not finished yet!")
        }
    }

    return (
        <div>
            <div className="create-user-container columns">
                <div className="input-container column">
                    <label><h5>Username Massa</h5></label>
                    <input type="text" required name="username1" id="username1" value={fields.username1} onChange={handleFieldChange}/>
                    <br/><br/>

                    <label><h5>Username Lembaga</h5></label>
                    <input type="text" required name="username2" id="username2" value={fields.username2} onChange={handleFieldChange}/>
                </div>
            </div>
            <div className="has-text-centered my-5">
                <button className="button is-primary is-large" onClick={submitUser}>Submit</button>
            </div>

        </div>
    )
}

export default UserAccociation
