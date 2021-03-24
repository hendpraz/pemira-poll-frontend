import React from 'react'
import { useFormFields } from "libs/hooksLib"
import { createItem } from 'resources/shop'

const CreateItem = ({pageUser}) => {
    const userId = pageUser.id

    const [fields, handleFieldChange] = useFormFields({
        name: "",
        description: "",
        price: "",
        photo_url: ""
    });

    const submitItem = async () => {
        const r = window.confirm(`Apakah Anda yakin dengan data item yang diisi?`)
        if (r) {
            console.log(userId)
            if (userId) {
                console.log("OK")

                let data = JSON.parse(JSON.stringify(fields))
                data.user = userId
                data.price = parseInt(data.price)

                console.log(data)

                const response = await createItem(data)
                console.log(response)

                const status = response.status
                if (status >= 200 && status < 300) {
                    alert("Berhasil menambahkan item.")
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
                        <h5 className="mb-2">Nama Item:</h5>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={fields.name}
                        onChange={handleFieldChange}
                        placeholder="Nama Item"
                        />
                    <br/>
                    <br/>

                    <label>
                        <h5 className="mb-2">Deskripsi Item:</h5>
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={fields.description}
                        onChange={handleFieldChange}
                        rows="10"
                        placeholder="Deskripsi item, maksimal 2000 karakter"
                        style={{width: "100%"}}
                        />
                    <br/>
                    <br/>

                    <label>
                        <h5 className="mb-2">Harga Item:</h5>
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={fields.price}
                        onChange={handleFieldChange}
                        placeholder="0"
                        />
                    <br/>
                    <br/>

                    <label>
                        <h5 className="mb-2">Url Gambar:</h5>
                    </label>
                    <input
                        type="text"
                        id="photo_url"
                        name="photo_url"
                        value={fields.photo_url}
                        onChange={handleFieldChange}
                        placeholder="Contoh: https://urlfoto.com/a.jpg"
                        />
                    <br/>
                    <br/>

                    <div className="has-text-centered my-5">
                        <button className="button is-primary is-large" onClick={submitItem}>Submit</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default CreateItem
