import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination'
import { listBakalCalon } from 'resources/bakalcalon'

const UserList = () => {

    const postPerPage = 6
    const [currentPage,
        setCurrentPage] = useState(1)
    const [result,
        setResult] = useState([])
    
    useEffect(() => {
        async function loadUsers() {
            try {
                let response = await listBakalCalon()                
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

    return (
        <div >
            <div id="userList" className="user-list-content is-flex">
                {currentResult.map((item, index) => {
                    return (
                        <div
                            id={`user-${index}`}
                            key={index}
                            className="user-list-item p-4">
                            <div className="user-item-list-content">
                                <div className="is-flex">
                                    <h3>{item.fullname}</h3>
                                    <h5>{item.ou} {item.angkatan}</h5>
                                </div>
                                <h5 className="has-text-danger">{item.tipe_kandidat}</h5>
                            </div>
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
