import React, {useEffect, useState} from 'react'
import { useFormFields } from "libs/hooksLib"
import { createQuestAdmin } from "resources/quest"
import { useAppContext } from 'libs/contextLib'
import Button from 'components/Button'

const CreateQuest = () => {
    const user = useAppContext()
    const [userContact,
        setUserContact] = useState("")
    const [userId,
        setUserId] = useState("")
    const [fields, handleFieldChange] = useFormFields({
        judul: "",
        deskripsi: "",
        target: "",
        deadline: ""
    });

    useEffect(() => {
        if (user) {
            console.log(user)
            setUserContact(`Email: ${user.email}, HP: ${user.phone_number}`)
            setUserId(user.id)
        }
    }, [user])

    const submitQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin dengan data quest yang diisi?`)
        if (r) {
            if (userId && userContact) {
                console.log("OK")

                let data = JSON.parse(JSON.stringify(fields))
                data.user = userId
                data.user_contact = userContact
                data.deadline = data.deadline + " 23:59:59"
                data.tipe = "mandatory"

                console.log(data)

                const response = await createQuestAdmin(data)
                console.log(response)

                alert("Berhasil menambahkan quest.")
                window.location.reload()
            } else {
                alert("Terdapat masalah, mohon coba lagi beberapa saat.")
            }
        }
    }

    return (
        <div>
            <div className="create-user-container columns">
                <div className="input-container column">
                    <label>
                        <h5 className="mb-2">Judul Quest:</h5>
                    </label>
                    <input
                        type="text"
                        id="judul"
                        name="judul"
                        value={fields.judul}
                        onChange={handleFieldChange}/>
                    <br/>
                    <br/>
                    <label>
                        <h5 className="mb-2">Detail Quest:</h5>
                    </label>
                    <textarea
                        name="deskripsi"
                        id="deskripsi"
                        value={fields.deskripsi}
                        onChange={handleFieldChange}
                        rows="10"
                        placeholder="Deskripsi quest"
                        style={{width: "100%"}}
                        />
                    <br/>
                    <br/>
                    <div className="columns">
                        <div className="column">
                            <label>
                                <h5 className="mb-2">Tenggat Quest:</h5>
                            </label>
                            <input
                                type="date"
                                id="deadline"
                                name="deadline"
                                value={fields.deadline}
                                onChange={handleFieldChange}/>
                            <p
                                style={{
                                fontSize: "10pt",
                                paddingTop: "5px"
                            }}>Tenggat pada jam 23:59 WIB</p>
                        </div>
                        <div className="column">
                            <label>
                                <h5 className="mb-2">Diperuntukkan bagi:</h5>
                            </label>
                            <select
                                id="target"
                                name="target"
                                placeholder="Pilih target"
                                value={fields.target}
                                onChange={handleFieldChange}>
                                <option value="all">Semua</option>
                                <option value="k3m">K3M</option>
                                <option value="mwa">MWA-WM</option>
                            </select>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="has-text-centered my-5">
                <button className="button is-primary is-large" onClick={submitQuest}>Submit</button>
            </div>
            <br />
        </div>
    )
}

export default CreateQuest
