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
                    <h3>{`${index+1}. ${item.title}`}</h3>
                    <hr/>

                    <p className="px-5">
                        Tertuduh: {item.accused}<br/>
                        Pelapor: {item.reporter.fullname} - {item.reporter.nim} - {item.reporter.ou}<br />
                        Deskripsi:<br />
                        {item.description}
                    </p>
                    <br />
                    <p className="px-5">{`Dibuat Pada: ${item.created_at}`}</p>
                    <br />
                    <p className="px-5">
                        Bukti: <a href={item.photo_url} target="_blank"><u>klik di sini</u></a>
                    </p>

                    <br/>
                    <Button file="cancel-btn" /> 
                </div>
            </div>
        </div>
    )
}

export default CheaterModal