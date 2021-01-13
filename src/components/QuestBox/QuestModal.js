import React, {useState} from 'react'
import Button from 'components/Button'
import {upvoteQuest, cancelUpvoteQuest} from 'resources/quest'

const QuestModal = ({
    index,
    item,
    numOfUpvotes,
    setNumOfUpvotes,
    id,
    tab
}) => {
    console.log(index, item, id, tab)
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

    const terimaQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin MENERIMA quest berjudul ${item.judul}?`)
        if (r) {
            alert("Anda menekan yes")
        } else {
            alert("Anda menekan no")
        }
    }

    const tolakQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin MENOLAK quest berjudul ${item.judul}?`)
        if (r) {
            alert("Anda menekan yes")
        } else {
            alert("Anda menekan no")
        }
    }

    const menyerahQuest = async () => {
        const r = window.confirm(`Apakah Anda yakin ingin MENYERAH pada quest berjudul ${item.judul}?`)
        if (r) {
            alert("Anda menekan yes")
        } else {
            alert("Anda menekan no")
        }
    }

    const unggahBukti = async () => {
        alert("Anda menekan tombol unggah bukti")
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
                    {id === 5
                        ? <div className="modal-btm">{tab === "pending" && <div className="btn-container columns">
                                    <Button file="terima-btn" onClick={terimaQuest} />
                                    <Button file="tolak-btn" onClick={tolakQuest} />
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
        </div>
    )
}

export default QuestModal