import React, {useState} from 'react'
import Button from 'components/Button'
import {acceptDuelKandidat, declineDuelKandidat, forfeitDuelKandidat } from 'resources/duel'
import UnggahBuktiModal from './UnggahBuktiModal'

const DuelModal = ({
    index,
    item,
    id,
    tab
}) => {

    const closeModal = () => {
        var modal = document.getElementById(`myModal-${index}`);

        modal.style.display = "none"
    }

    const reloadPage = async() => {
        window
            .location
            .reload();
    }

    const terimaDuel = async() => {
        const r = window.confirm(`Apakah Anda yakin ingin MENERIMA duel berjudul ${item.judul}?`)
        if (r) {
            const response = await acceptDuelKandidat(item.id)
            console.log(response)
            reloadPage()
        }
    }

    const tolakDuel = async() => {
        const r = window.confirm(`Apakah Anda yakin ingin MENOLAK duel berjudul ${item.judul}?`)
        if (r) {
            const response = await declineDuelKandidat(item.id)
            console.log(response)
            reloadPage()
        }
    }

    const menyerahDuel = async() => {
        const r = window.confirm(`Apakah Anda yakin ingin MENYERAH pada duel berjudul ${item.judul}?`)
        if (r) {
            const response = await forfeitDuelKandidat(item.id)
            console.log(response)
            reloadPage()
        }
    }

    const unggahBukti = () => {
        let modalUnggah = document.getElementById("unggahBukti")
        modalUnggah.style.display = "flex"
    }

    const getStatusDescription = (status) => {
        console.log("Status duel:", status)
        const description = {
            "pending": "Pending - Belum Anda terima/tolak",
            "accepted": "Accepted - Telah Anda terima",
            "declined": "Declined - Telah Anda tolak",
            "to_be_proven": "To Be Proven - Bukti telah diunggah, menunggu verifikasi",
            "proof_rejected": "Proof Rejected - Bukti ditolak, silakan upload ulang bukti jik ada.",
            "expired": "Expired - Duel telah melewati waktu tenggat"
        }

        return description[status]
    }

    return (
        <div>
            <div id={`myModal-${index}`} className="modal">
                <div
                    className={`modal-content ${index % 2
                    ? ' blue'
                    : ` red`}`}>
                    <span className="close" id={`close-${index}`} onClick={() => closeModal()}>&times;</span>
                    <h3>{item.judul}</h3>
                    <hr/>
                    <br/>
                    <h5>Tenggat waktu:</h5>
                    <p>{item.deadline}</p>
                    <br/>
                    <h4>Detail Duel</h4>
                    <p>{item.deskripsi}</p>
                    <br/>
                    <h4>Tipe Duel</h4>
                    <p>{item.tipe === "mandatory" ? "Wajib" : "Tidak Wajib"}</p>
                    <br/>
                    {
                        id === 5 &&
                        <>
                            <h5>Status:</h5>
                            <p>{getStatusDescription(item.status_by_kandidat)}</p>
                        </>
                    }
                    <br/> {id === 5
                        && <div className="modal-btm">{tab === "pending" && <div className="btn-container columns">
                                    <Button file="terima-btn" onClick={terimaDuel}/>
                                    <Button file="tolak-btn" onClick={tolakDuel}/>
                                </div>} {tab === "accepted" && <div className="btn-container columns">
                                    <Button file="unggah-bukti-btn" onClick={unggahBukti}/>
                                    <Button file="menyerah-btn" onClick={menyerahDuel}/>
                                </div>}
                            </div>}
                </div>
            </div>
            {id === 5 && <UnggahBuktiModal item={item} />}
        </div>
    )
}

export default DuelModal