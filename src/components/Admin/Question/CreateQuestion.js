import React, {useEffect, useState} from 'react'
import { useFormFields } from "libs/hooksLib"
import { createQuestion } from "resources/question"

const CreateQuestion = ({pageUser}) => {
    const userId = pageUser.id

    const [fields, handleFieldChange] = useFormFields({
        judul: "",
        deskripsi: "",
        start_date: "",
        end_date: "",
        allow_mhs_s1: "",
        allow_mhs_akmet: "",
        allow_mhs_s2: "",
        allow_lembaga: "",
        allow_kandidat_k3m: "",
        allow_kandidat_mwa: "",
        choices: "",
    });

    const submitQuestion = async () => {
        const r = window.confirm(`Apakah Anda yakin dengan data quest yang diisi?`)
        if (r) {
            console.log(userId)
            if (userId) {
                try {
                    console.log("OK")

                    let data = JSON.parse(JSON.stringify(fields))
                    data.creator = userId
                    data.start_date = data.start_date + " 00:00:00"
                    data.end_date = data.end_date + " 23:59:59"
    
                    console.log(data)
    
                    const response = await createQuestion(data)
                    console.log(response)   
                } catch (error) {
                    alert(error)
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
                        <h5 className="mb-2">Judul Pertanyaan:</h5>
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
                        <h5 className="mb-2">Deskripsi Pertanyaan:</h5>
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
                            <div>
                                <label>
                                    <h5 className="mb-2">Tanggal Mulai:</h5>
                                </label>
                                <input
                                    type="date"
                                    id="start_date"
                                    name="start_date"
                                    value={fields.start_date}
                                    onChange={handleFieldChange}/>
                                <p
                                    style={{
                                    fontSize: "10pt",
                                    paddingTop: "5px"
                                }}>Pada jam 00:00 WIB</p>
                                <br/><br/>

                                <label>
                                    <h5 className="mb-2">Tanggal Berakhir:</h5>
                                </label>
                                <input
                                    type="date"
                                    id="end_date"
                                    name="end_date"
                                    value={fields.end_date}
                                    onChange={handleFieldChange}/>
                                <p
                                    style={{
                                    fontSize: "10pt",
                                    paddingTop: "5px"
                                }}>Pada jam 23:59 WIB</p>
                            </div>
                        </div>
                        <div className="column">
                            <label>
                                <h5 className="mb-2">Diperuntukkan bagi:</h5>
                            </label>

                            <input type="checkbox" id="allow_mhs_s1" name="allow_mhs_s1" checked={fields.allow_mhs_s1} onChange={handleFieldChange}/>
                            <label for="allow_mhs_s1">Mahasiswa S1</label><br /><br />

                            <input type="checkbox" id="allow_mhs_akmet" name="allow_mhs_akmet" checked={fields.allow_mhs_akmet} onChange={handleFieldChange}/>
                            <label for="allow_mhs_akmet">Mahasiswa Akmet</label><br /><br />

                            <input type="checkbox" id="allow_mhs_s2" name="allow_mhs_s2" checked={fields.allow_mhs_s2} onChange={handleFieldChange}/>
                            <label for="allow_mhs_s2">Mahasiswa S2</label><br /><br />

                            <input type="checkbox" id="allow_lembaga" name="allow_lembaga" checked={fields.allow_lembaga} onChange={handleFieldChange}/>
                            <label for="allow_lembaga">Lembaga</label><br /><br />

                            <input type="checkbox" id="allow_mhs_s2" name="allow_mhs_s2" checked={fields.allow_mhs_s2} onChange={handleFieldChange}/>
                            <label for="vehicle1">Kandidat K3M</label><br />

                            <input type="checkbox" id="allow_mhs_s2" name="allow_mhs_s2" checked={fields.allow_mhs_s2} onChange={handleFieldChange}/>
                            <label for="vehicle3">Kandidat MWA-WM</label><br /><br />
                        </div>
                    </div>

                    <label>
                        <h5 className="mb-2">Daftar Opsi: (Pisahkan dengan koma)</h5>
                    </label>
                    <textarea
                        name="deskripsi"
                        id="deskripsi"
                        value={fields.choices}
                        onChange={handleFieldChange}
                        rows="10"
                        placeholder="Opsi 1, Opsi 2, Opsi 3"
                        style={{width: "100%"}}
                        />
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="has-text-centered my-5">
                <button className="button is-primary is-large" onClick={submitQuestion}>Submit</button>
            </div>
            <br />
        </div>
    )
}

export default CreateQuestion