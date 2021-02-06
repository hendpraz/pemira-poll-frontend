import React from 'react'

const QuestionModal = ({ item, id }) => {
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
                        <p className="modal-card-title has-text-primary">Question: <span className="username">{item.judul}</span></p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td><h5>Question Creator</h5></td>
                                    <td><h5>{`: ${item.creator.fullname}${item.creator.nim ? " - " + item.creator.nim : ""}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Deskripsi</h5></td>
                                    <td><h5>{`: ${item.deskripsi}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Pilihan Jawaban</h5></td>
                                    <td><h5>{`: ${item.choices}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Waktu Mulai</h5></td>
                                    <td><h5>{`: ${item.start_date}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Waktu Berakhir</h5></td>
                                    <td><h5>{`: ${item.end_date}`}</h5></td>
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

export default QuestionModal
