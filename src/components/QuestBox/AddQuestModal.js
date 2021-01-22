import React, {useState, useEffect} from 'react'
import Button from 'components/Button'

import {useAppContext} from "libs/contextLib"
import {useFormFields} from "libs/hooksLib"
import {createQuest} from "resources/quest"

const AddQuestModal = () => {
    const {user} = useAppContext()
    const [fields,
        handleFieldChange] = useFormFields({
        judul: "", deskripsi: "", deadline: null, target: "all", // "all", "k3m", "mwa"
    });

    const [userContact,
        setUserContact] = useState("")
    const [userId,
        setUserId] = useState("")
    const [isAgree,
        setIsAgree] = useState(false)

    useEffect(() => {
        if (user) {
            console.log(user)
            setUserContact(`Email: ${user.email}, HP: ${user.phone_number}`)
            setUserId(user.id)
        }
    }, [user])

    const closeModal = () => {
        var modal = document.getElementById(`addQuest`)

        modal.style.display = "none"
    }

    const submitQuest = async() => {
        if (isAgree) {
            if (userId && userContact) {
                console.log("OK")

                let data = JSON.parse(JSON.stringify(fields))
                data.user = userId
                data.user_contact = userContact
                data.deadline = data.deadline + " 23:59:59"

                console.log(data)

                const response = await createQuest(data)
                console.log(response)

                alert("Berhasil menambahkan quest, silakan tunggu konfirmasi dari admin.")
                closeModal()
            } else {
                alert("Terdapat masalah, mohon coba lagi beberapa saat.")
            }
        } else {
            alert("Anda belum menyetujui ketersediaan berbagi informasi kontak Anda")
        }
    }

    return (
        <div>
            <div id="addQuest" className="modal add-quest">
                <div className="modal-content add-quest-content blue">
                    <span className="close"  onClick={() => closeModal()}>&times;</span>
                    <h3>Beri Quest Baru</h3>
                    <hr/>
                    <br/>
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
                        onChange={handleFieldChange}/>
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
                    <br/>
                    <input
                        type="checkbox"
                        name="setuju"
                        id="setuju"
                        checked={isAgree}
                        onChange={() => setIsAgree(!isAgree)}/>
                    <span className="setuju-add">Saya bersedia berbagi informasi kontak saya (email &amp; HP) ke kandidat</span>
                    <br/>
                    <div className="btn-container">
                        <Button file="ok-cream-btn" onClick={submitQuest}/>
                        <Button file="cancel-cream-btn" onClick={closeModal}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddQuestModal
