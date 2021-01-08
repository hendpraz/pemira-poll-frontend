import React from 'react'
import Button from 'components/Button'

const QuestModal = ({index, item}) => {

    const closeModal = () => {
        var modal = document.getElementById(`myModal-${index}`);

        modal.style.display = "none"
    }

    console.log(item.penerima)
    return (
        <div>
            <div id={`myModal-${index}`} className="modal">
                <div
                    className={`modal-content ${index % 2
                    ? ' blue'
                    : ` red`}`}>
                    <span className="close" id={`close-${index}`} onClick={() => closeModal()}>&times;</span>
                    <h3>{item.name}</h3>
                    <hr/>
                    <h5>Penerima:</h5>
                    {item.penerima.map((person, index) => {
                        return (
                            <span key={index}>{index > 0 && ', '}{`${person.name}-${person.organisasi}'${person.angkatan.slice(2,4)}`}</span>
                        )
                    })}
                    <br />
                    <br />
                    <p>{item.date}</p>
                    <br />
                    <h4>Detail Quest</h4>
                    <p>{item.detail}</p>
                    <Button file="upvote-btn"/>
                </div>
            </div>
        </div>
    )
}

export default QuestModal