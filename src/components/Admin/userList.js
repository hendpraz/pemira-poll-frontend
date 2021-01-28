import React, { useState, useEffect } from 'react'
import UserModal from './userModal'
import list from './listOfUsers'
import Pagination from './Pagination'
import { listUsers } from 'resources/user'

const UserList = () => {

    const postPerPage = 4
    const [currentPage,
        setCurrentPage] = useState(1)
    const [result,
        setResult] = useState(list)
    
    useEffect(() => {
        async function loadUsers() {
            try {
                let response = await listUsers()                
                setResult(response)
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadUsers()
        }
        
        onLoad()
    }, [])

    const lastIndex = postPerPage * currentPage
    const firstIndex = lastIndex - postPerPage
    const currentResult = result.slice(firstIndex, lastIndex)

    const detailUser = (index) => {
        var modal = document.getElementById(`modal-user-${index}`);

        // console.log(modal)
        var quest = document.getElementById(`user-${index}`);

        quest.onclick = function () {
            modal.style.display = "block";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    const getRole = (groups) => {
        const roles = {
            1: "Superuser",
            2: "Admin",
            3: "Massa",
            4: "Lembaga",
            5: "Kandidat"
        }

        return roles[groups]
    }

    return (
        <div >
            <div id="userList" className="user-list-content is-flex">
                {currentResult.map((item, index) => {
                    return (
                        <div
                            id={`user-${index}`}
                            onClick={() => detailUser(index)}
                            key={index}
                            className="user-list-item p-4">
                            <div className="user-item-list-content">
                                <div className="is-flex">
                                    <h3>{item.fullname}</h3>
                                    <h5>{item.username}</h5>
                                </div>
                                <h5>{item.email_non_itb}</h5>
                                <p className="has-text-danger">{`Role: ${getRole(item.groups)}`}<br /> Metode login: {item.login_method}</p>
                            </div>
                            <UserModal item={item} id={`modal-user-${index}`}/>
                        </div>
                    )
                })}
            </div>
            <Pagination
                length={result.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                postPerPage={postPerPage}/>
        </div>
    )
}

export default UserList
