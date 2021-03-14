import React, {useState, useEffect} from 'react'
import Button from 'components/Button'

import {useAppContext} from "libs/contextLib"
import {useFormFields} from "libs/hooksLib"
import {createDuelKandidat, createDuelMassaLembaga} from "resources/duel"

const AddDuelModal = ({groupsId, tipeKandidat}) => {
    const {user} = useAppContext()
    const [fields,
        handleFieldChange] = useFormFields({
        judul: "", deskripsi: "", deadline: null, target: groupsId === 5 ? tipeKandidat : "all", // "all", "k3m", "mwa"
    });

    const [userContact,
        setUserContact] = useState("")
    const [userId,
        setUserId] = useState("")
    const [isAgree,
        setIsAgree] = useState(false)
    const [isLoading,
        setIdLoading] = useState(false)

    useEffect(() => {
        if (user) {
            console.log(user)
            setUserContact(`Email: ${user.email}, HP: ${user.phone_number}`)
            setUserId(user.id)
        }
    }, [user])

    const closeModal = () => {
        var modal = document.getElementById(`addDuel`)

        modal.style.display = "none"
    }

    const submitDuel = async() => {
        if (isAgree) {
            if (!isLoading) {
                setIdLoading(true)
                if (userId && userContact) {
                    console.log("OK")
    
                    let data = JSON.parse(JSON.stringify(fields))
                    data.user = userId
                    data.user_contact = userContact
                    data.deadline = data.deadline + " 23:59:59"
    
                    console.log(data)
    
                    let response
                    if (groupsId === 5) {
                        response = await createDuelKandidat(data)
                    } else {
                        response = await createDuelMassaLembaga(data)
                    }
                    
                    console.log(response)
    
                    if (response.status >= 200 && response.status < 400) {
                        alert("Berhasil menambahkan duel, silakan tunggu konfirmasi dari admin.")
                        closeModal()
                        window.location.reload()
                    } else {
                        alert("Terdapat masalah, mohon coba lagi.")
                    }                
                } else {
                    alert("Terdapat masalah, mohon coba lagi beberapa saat.")
                }
                setIdLoading(false)
            }
        } else {
            alert("Anda belum menyetujui ketersediaan berbagi informasi kontak Anda")
        }
    }

    return (
        <div>
            <div id="addDuel" className="modal add-quest">
                <div className="modal-content add-quest-content blue">
                    <span className="close"  onClick={() => closeModal()}>&times;</span>
                    <h3>Beri Duel Baru</h3>
                    <hr/>
                    <br/>
                    <label>
                        <h5 className="mb-2">Judul Duel:</h5>
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
                        <h5 className="mb-2">Detail Duel:</h5>
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
                                <h5 className="mb-2">Tenggat Duel:</h5>
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
                                {
                                    groupsId === 5 ?
                                    <>
                                        <option value={tipeKandidat}>{tipeKandidat}</option>
                                    </>
                                    :
                                    <>
                                        <option value="all">Semua</option>
                                        <option value="k3m">K3M</option>
                                        <option value="mwa">MWA-WM</option>
                                    </>
                                }

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
                        <Button file="ok-cream-btn" onClick={submitDuel}/>
                        <Button file="cancel-cream-btn" onClick={closeModal}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddDuelModal
