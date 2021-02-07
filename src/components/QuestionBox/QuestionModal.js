import React, {useState} from 'react'
import Button from 'components/Button'

const QuestModal = ({
    index,
    item,
    id,
    tab,
    isAvailable
}) => {


    const closeModal = () => {
        var modal = document.getElementById(`myModal-${index}`);

        modal.style.display = "none"
    }

    const question = tab === "my" && item.question ? item.question : item

    return (
        <div>
            <div id={`myModal-${index}`} className="modal">
                <div
                    className={`modal-content ${index % 2
                    ? ' blue'
                    : ` red`}`}>
                    <span className="close" id={`close-${index}`} onClick={() => closeModal()}>&times;</span>
                    <h3>{question.judul}</h3>
                    <hr/>
                    <br/>
                    <h4>Deskripsi Pertanyaan</h4>
                    <p>{question.deskripsi}</p>
                    <br/>
                    <h5>Tanggal Mulai:</h5>
                    <p>{question.start_date}</p>
                    <br/>
                    <h5>Tanggal Berakhir:</h5>
                    <p>{question.end_date}</p>
                    <br/>
                    {
                        tab === "my" &&
                        <>
                            <h5>Jawaban Saya:</h5>
                                <p>{item.preferences}</p>
                            <br/>
                        </>
                    }
                    { isAvailable &&
                        <a className="is-primary button" href={"/pertanyaan/" + question.id} target="_blank">Jawab Pertanyaan Ini</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default QuestModal