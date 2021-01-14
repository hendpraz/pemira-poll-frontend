import React from 'react'

const QuestModal = ({ item, id }) => {
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
                        <p className="modal-card-title has-text-primary">Quest: <span className="username">{item.name}</span></p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                      
                      
                       <table>
                            <tr>
                               <td><h5>Date Created</h5></td>
                               <td><h5>{`: ${item.dateCreated}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>Deadline</h5></td>
                               <td><h5>{`: ${item.deadLine}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>Deskripsi</h5></td>
                               <td><h5>{`: ${item.deskripsi}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>Created By</h5></td>
                               <td><h5>{`: ${item.createdBy}`}</h5></td>
                           </tr>
                       </table>
                      
                    </section>
                </div>
            </div>
        </div>
    )
}

export default QuestModal
