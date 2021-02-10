import React, { useState } from 'react'
import { useFormFields } from "libs/hooksLib"
import { associateUser } from 'resources/user'
import Select from 'react-select'

const UserAccociation = ({lembagaList, massaList}) => {
    const [username1, setUsername1] = useState("")
    const [username2, setUsername2] = useState("")

    const massaOptions = massaList.map((item, index) => {
        return { value: item.username, label: `${item.username} - ${item.nim} - ${item.fullname} - ${item.ou}`}
    })

    const lembagaOptions = lembagaList.map((item, index) => {
        return { value: item.username, label: `${item.username} - ${item.ou}`}
    })

    const submitUser = async () => {
        const r = window.confirm(`Apakah Anda yakin akan mengasosiasikan user ${username1.value} dengan lembaga ${username2.value}?`)
        if (r) {
            const response = await associateUser({
                username1: username1.value,
                username2: username2.value,
            })
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
                    <Select
                        value={username1}
                        onChange={setUsername1}
                        options={massaOptions}
                    />
                    <br/>
                    <p>Keterangan: pilihan di atas dalam bentuk [username] - [nim] - [nama] - [fakultas-prodi]</p>
                    <br/>

                    <label class="label">Pilih Lembaga</label>
                    <Select
                        value={username2}
                        onChange={setUsername2}
                        options={lembagaOptions}
                    />
                    <br/>
                    <p>Keterangan: pilihan di atas dalam bentuk [username] - [fakultas-prodi]</p>
                    <br/>

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
