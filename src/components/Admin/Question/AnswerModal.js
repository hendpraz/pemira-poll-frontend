import React from 'react'

const AnswerModal = ({ item, id }) => {
    const closeModal = () => {
        var modal = document.getElementById(id);

        modal.style.display = "none"
    }

    return (
        <div>
            <div className="modal" id={id}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-primary">Answerer: <span className="username">{item.answerer.fullname}, NIM:{item.answerer.nim}</span></p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td><h5>Question</h5></td>
                                    <td><h5>{`: ${item.question.judul}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Preferensi</h5></td>
                                    <td><h5>{`: ${item.preferences}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Created At</h5></td>
                                    <td><h5>{`: ${item.created_at}`}</h5></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AnswerModal
