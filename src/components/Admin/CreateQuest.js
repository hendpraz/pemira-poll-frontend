import React from 'react'
import { useFormFields } from "libs/hooksLib"
import { createQuestAdmin } from "resources/quest"

const CreateQuest = ({pageUser}) => {
    const userId = pageUser.id
    const userContact = `Email: ${pageUser.email_non_itb}, HP: ${pageUser.phone_number}`

    const [fields, handleFieldChange] = useFormFields({
        judul: "",
        deskripsi: "",
        target: "all",
        deadline: ""
    });

    const submitQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin dengan data quest yang diisi?`)
        if (r) {
            console.log(userId, userContact)
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

                const status = response.status
                if (status >= 200 && status < 300) {
                    alert("Berhasil menambahkan quest.")
                    window.location.reload()
                } else {
                    alert("Tidak berhasil. Silakan coba kembali")
                }
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
                        onChange={handleFieldChange}
                        placeholder="Judul Quest"
                        />
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
                        placeholder="Deskripsi quest, maksimal 2000 karakter"
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

                    <div className="has-text-centered my-5">
                        <button className="button is-primary is-large" onClick={submitQuest}>Submit</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default CreateQuest
