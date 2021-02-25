import React, {useState} from 'react'
import Button from 'components/Button'
import { upvoteQuest, cancelUpvoteQuest, acceptQuestKandidat, declineQuestKandidat, forfeitQuestKandidat } from 'resources/quest'

const CheaterModal = ({
    index,
    item,
    numOfUpvotes,
    setNumOfUpvotes,
    id,
    tab
}) => {

    const closeModal = () => {
        var modal = document.getElementById(`cheater-${index}`);

        modal.style.display = "none"
    }

    const reloadPage = async() => {
        window
            .location
            .reload();
    }

    return (
        <div>
            <div id={`cheater-${index}`} className="modal cheater-modal">
                <div
                    className={`modal-content ${index % 2
                    ? ' blue'
                    : ` red`}`}>
                    <span className="close" id={`close-${index}`} onClick={() => closeModal()}>&times;</span>
                    <h3>{`${index+1}. ${item.terdakwa}`}</h3>
                    <hr/>   
                    <p className="px-5">{`${item.tipe} (tipe)`}</p>
                    {/* <p>{item.deadline}</p> */}
                    <p className="px-5">{`${item.tanggal}`}</p>
                    {/* <p>{item.deskripsi}</p> */}
                    <br />
                    <h3>Detail:</h3>
                    <p className="px-5">Bukti:</p>

                    <br/>
                    <Button file="cancel-btn" /> 
                </div>
            </div>
        </div>
    )
}

export default CheaterModal