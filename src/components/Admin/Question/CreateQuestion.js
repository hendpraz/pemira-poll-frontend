import React, {useEffect, useState} from 'react'
import { useFormFields } from "libs/hooksLib"
import { createQuestion } from "resources/question"

import { confirmAlert } from 'react-confirm-alert';

const CreateQuestion = ({pageUser}) => {
    const userId = pageUser.id

    const [fields, handleFieldChange] = useFormFields({
        judul: "",
        deskripsi: "",
        start_date: "",
        end_date: "",
        allow_mhs_s1: false,
        allow_mhs_akmet: false,
        allow_mhs_s2: false,
        allow_lembaga: false,
        allow_kandidat_k3m: false,
        allow_kandidat_mwa: false,
        choices: "",
    });

    const continueSubmit = async () => {
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

                alert("Berhasil membuat question baru")
            } catch (error) {
                alert(error)
            }
        } else {
            alert("Terdapat masalah, mohon coba lagi beberapa saat.")
        }
    }

    const isLengkapForm = () => {
        return fields.judul.length > 0 && fields.deskripsi.length > 0 && fields.choices.length > 0
    }

    const getChoicesString = (str) => {
        let tempChoices = str.split(";")
        tempChoices.map(s => s.trim())

        let otp = ""
        for (let idx = 0; idx < tempChoices.length; idx++) {
            otp += `Opsi ke-${idx+1}: ${tempChoices[idx]}`

            if (idx === tempChoices.length - 1) {
                otp += '.'
            } else {
                otp += ', '
            }
        }

        return otp
    }

    const submitQuestion = async () => {
        if (isLengkapForm()) {
            confirmAlert({
                title: 'Konfirmasi',
                message: `Apakah Anda yakin dengan data Pertanyaan yang diisi? Judul: ${fields.judul}, pilihan: ${getChoicesString(fields.choices)}`,
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => continueSubmit()
                  },
                  {
                    label: 'No',
                  }
                ]
            })
        } else {
            confirmAlert({
                title: 'Data Tidak Lengkap',
                message: `Mohon lengkapi kembali data yang diperlukan`,
                buttons: [
                  {
                    label: 'OK',
                  }
                ]
            })
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
                        onChange={handleFieldChange}
                        placeholder="Judul pertanyaan"
                        />
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
                        rows="5"
                        placeholder="Deskripsi pertanyaan"
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
                        <div className="column p-4">
                            <label>
                                <h5 className="mb-2">Diperuntukkan bagi:</h5>
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
                        </div>
                    </div>

                    <label>
                        <h5 className="mb-2">Daftar Opsi: (Pisahkan dengan titik koma ";")</h5>
                    </label>
                    <textarea
                        name="choices"
                        id="choices"
                        value={fields.choices}
                        onChange={handleFieldChange}
                        rows="2"
                        placeholder="Opsi 1; Opsi 2; Opsi 3"
                        style={{width: "100%"}}
                        />
                    <p className="has-text-danger">Perhatian: jangan gunakan tanda titik koma ";" di akhir tulisan. Gunakan titik koma ";" sebagai pemisah setiap opsi sesuai contoh.</p>
                    <br/>
                    
                    <div className="has-text-centered my-5">
                        <button className="button is-primary is-large" onClick={submitQuestion}>Submit</button>
                    </div>
                    
                </div>
            </div>
            <br />
        </div>
    )
}

export default CreateQuestion
