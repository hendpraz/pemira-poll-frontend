import React from 'react'

const UserModal = ({ item, id }) => {

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
                        <p className="modal-card-title has-text-primary">Username: <span className="username">{item.username}</span></p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                      
                      
                       <table>
                            <tr>
                               <td><h5>Fullname</h5></td>
                               <td><h5>{`: ${item.fullname}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>Groups</h5></td>
                               <td><h5>{`: ${item.groups}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>Email</h5></td>
                               <td><h5>{`: ${item.email}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>Phone Number</h5></td>
                               <td><h5>{`: ${item.phone_number}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>ID Line</h5></td>
                               <td><h5>{`: ${item.id_line}`}</h5></td>
                           </tr>
                           <tr>
                               <td><h5>Address</h5></td>
                               <td><h5>{`: ${item.address}`}</h5></td>
                           </tr>
                       </table>
                      
                    </section>
                </div>
            </div>
        </div>
    )
}

export default UserModal