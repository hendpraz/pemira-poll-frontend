import React from 'react'
import { useFormFields } from "libs/hooksLib"
import { associateUser } from 'resources/user';

const UserAccociation = ({lembagaList, massaList}) => {
    const [fields, handleFieldChange] = useFormFields({
        username1: "",
        username2: "",
    });

    const submitUser = async () => {
        const r = window.confirm(`Apakah Anda yakin akan mengasosiasikan user ${fields.username1} dengan lembaga ${fields.username2}?`)
        if (r) {
            console.log(fields)
            const response = await associateUser(fields)
            const status = response.httpStatus
            console.log(response)

            if (status >= 200 && status < 300) {
                alert("Berhasil mengasosiasi user.")
                window.location.reload();
            } else {
                alert("Tidak berhasil. Silakan coba kembali")
            }
        }
    }

    return (
        <div>
            <div className="create-user-container columns">
                <div className="input-container column">
                    <label class="label">Pilih Massa</label>
                    <p class="control">
                        <select class="selectpicker" name="username1" id="username1" value={fields.username1} onChange={handleFieldChange} style={{width: "100%"}}>
                            <option value=""></option>
                            {
                                massaList.map((item, index) => {
                                    return (
                                        <option value={item.username}>{item.username} - {item.nim} - {item.ou}</option>
                                    )
                                })
                            }
                        </select>
                    </p>
                    <br/><br/>

                    <label class="label">Pilih Lembaga</label>
                    <p class="control">
                        <select class="selectpicker" name="username2" id="username2" value={fields.username2} onChange={handleFieldChange} style={{width: "100%"}}>
                            <option value=""></option>
                            {
                                lembagaList.map((item, index) => {
                                    return (
                                        <option value={item.username}>{item.username} - {item.ou}</option>
                                    )
                                })
                            }
                        </select>
                    </p>
                    <br/><br/>
                </div>
            </div>
            <div className="has-text-centered my-5">
                <button className="button is-primary is-large" onClick={submitUser}>Submit</button>
            </div>

        </div>
    )
}

export default UserAccociation
