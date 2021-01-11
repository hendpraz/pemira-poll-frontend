import React from 'react'
import Button from 'components/Button'
import { upvoteQuest, cancelUpvoteQuest } from 'resources/quest'

const QuestModal = ({index, item}) => {

    const closeModal = () => {
        var modal = document.getElementById(`myModal-${index}`);

        modal.style.display = "none"
    }

    const changeUpvoteStatus = async () => {
        const { id, is_upvoted } = item

        if (is_upvoted) {
            await cancelUpvoteQuest(id)
        } else {
            await upvoteQuest(id)
        }

        item.is_upvoted = !item.is_upvoted
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
                    <br />
                    <h5>Tenggat waktu:</h5>
                    <p>{item.deadline}</p>
                    <br />
                    <h4>Detail Quest</h4>
                    <p>{item.deskripsi}</p>
                    <Button file={item.is_upvoted ? `cancel-btn` : `upvote-btn`} onClick={changeUpvoteStatus}/>
                </div>
            </div>
        </div>
    )
}

export default QuestModal