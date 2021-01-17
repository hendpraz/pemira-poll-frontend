import React, {useState} from 'react'
import Button from 'components/Button'
import {upvoteQuest, cancelUpvoteQuest, acceptQuestKandidat, declineQuestKandidat, forfeitQuestKandidat} from 'resources/quest'
import UnggahBuktiModal from './UnggahBuktiModal'

const QuestModal = ({
    index,
    item,
    numOfUpvotes,
    setNumOfUpvotes,
    id,
    tab
}) => {

    const [isUpvoted,
        setIsUpvoted] = useState(item.is_upvoted)

    const closeModal = () => {
        var modal = document.getElementById(`myModal-${index}`);

        modal.style.display = "none"
    }

    const changeUpvoteStatus = async() => {
        const questId = item.id

        if (isUpvoted) {
            await cancelUpvoteQuest(questId)
            setNumOfUpvotes(numOfUpvotes - 1)
        } else {
            await upvoteQuest(questId)
            setNumOfUpvotes(numOfUpvotes + 1)
        }

        setIsUpvoted(!isUpvoted)
        item.is_upvoted = !item.is_upvoted
    }

    const reloadPage = async() => {
        window
            .location
            .reload();
    }

    const terimaQuest = async() => {
        const r = window.confirm(`Apakah Anda yakin ingin MENERIMA quest berjudul ${item.judul}?`)
        if (r) {
            const response = await acceptQuestKandidat(item.id)
            console.log(response)
            reloadPage()
        }
    }

    const tolakQuest = async() => {
        const r = window.confirm(`Apakah Anda yakin ingin MENOLAK quest berjudul ${item.judul}?`)
        if (r) {
            const response = await declineQuestKandidat(item.id)
            console.log(response)
            reloadPage()
        }
    }

    const menyerahQuest = async() => {
        const r = window.confirm(`Apakah Anda yakin ingin MENYERAH pada quest berjudul ${item.judul}?`)
        if (r) {
            const response = await forfeitQuestKandidat(item.id)
            console.log(response)
            reloadPage()
        }
    }

    const unggahBukti = () => {
        let modalUnggah = document.getElementById("unggahBukti")
        modalUnggah.style.display = "block"
    }

    const getStatusDescription = (status) => {
        console.log("Status quest:", status)
        const description = {
            "pending": "Pending - Belum Anda terima/tolak",
            "accepted": "Accepted - Telah Anda terima",
            "declined": "Declined - Telah Anda tolak",
            "to_be_proven": "To Be Proven - Bukti telah diunggah, menunggu verifikasi",
            "proof_rejected": "Proof Rejected - Bukti ditolak, silakan upload ulang bukti jik ada.",
            "expired": "Expired - Quest telah melewati waktu tenggat"
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
                    <h4>Detail Quest</h4>
                    <p>{item.deskripsi}</p>
                    <br/>
                    <h5>Status:</h5>
                    <p>{getStatusDescription(item.status_by_kandidat)}</p>
                    <br/> {id === 5
                        ? <div className="modal-btm">{tab === "pending" && <div className="btn-container columns">
                                    <Button file="terima-btn" onClick={terimaQuest}/>
                                    <Button file="tolak-btn" onClick={tolakQuest}/>
                                </div>} {tab === "accepted" && <div className="btn-container columns">
                                    <Button file="unggah-bukti-btn" onClick={unggahBukti}/>
                                    <Button file="menyerah-btn" onClick={menyerahQuest}/>
                                </div>}
                            </div>
                        : <Button
                            file={isUpvoted
                            ? `cancel-btn`
                            : `upvote-btn`}
                            onClick={changeUpvoteStatus}/>}
                    

                </div>
            </div>
            {id === 5 && <UnggahBuktiModal item={item} />}
        </div>
    )
}

export default QuestModal