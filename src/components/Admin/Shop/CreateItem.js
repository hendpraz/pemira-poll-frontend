import React from 'react'
import { useFormFields } from "libs/hooksLib"
import { createItem } from 'resources/shop'

const CreateItem = ({pageUser}) => {
    const userId = pageUser.id

    const [fields, handleFieldChange] = useFormFields({
        name: "",
        description: "",
        price: "",
        photo_url: "",

        allow_mhs_s1: false,
        allow_mhs_akmet: false,
        allow_mhs_s2: false,
        allow_lembaga: false,
        allow_kandidat_k3m: false,
        allow_kandidat_mwa: false,
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

                    
                    <label>
                        <h5 className="mb-2">Dapat dibeli oleh akun:</h5>
                    </label>

                    <input type="checkbox" id="allow_mhs_s1" name="allow_mhs_s1" checked={fields.allow_mhs_s1} onChange={handleFieldChange}/>
                    <label for="allow_mhs_s1"> Mahasiswa S1</label><br />

                    <input type="checkbox" id="allow_mhs_akmet" name="allow_mhs_akmet" checked={fields.allow_mhs_akmet} onChange={handleFieldChange}/>
                    <label for="allow_mhs_akmet"> Mahasiswa Akmet</label><br />

                    <input type="checkbox" id="allow_mhs_s2" name="allow_mhs_s2" checked={fields.allow_mhs_s2} onChange={handleFieldChange}/>
                    <label for="allow_mhs_s2"> Mahasiswa S2</label><br />

                    <input type="checkbox" id="allow_lembaga" name="allow_lembaga" checked={fields.allow_lembaga} onChange={handleFieldChange}/>
                    <label for="allow_lembaga"> Akun Lembaga (non-INA)</label><br />

                    <input type="checkbox" id="allow_kandidat_k3m" name="allow_kandidat_k3m" checked={fields.allow_kandidat_k3m} onChange={handleFieldChange}/>
                    <label for="allow_kandidat_k3m"> Akun Kandidat K3M (non-INA)</label><br />

                    <input type="checkbox" id="allow_kandidat_mwa" name="allow_kandidat_mwa" checked={fields.allow_kandidat_mwa} onChange={handleFieldChange}/>
                    <label for="allow_kandidat_mwa"> Akun Kandidat MWA-WM (non-INA)</label><br />
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
