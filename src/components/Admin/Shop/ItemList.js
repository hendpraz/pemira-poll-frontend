import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination'
import ItemModal from './ItemModal'
import { listItems } from 'resources/shop'

const ItemList = ({tipe}) => {

    const postPerPage = 4
    const [currentPage, setCurrentPage] = useState(1)
    const [result, setResult] = useState([])
    const [currentResult, setCurrentResult] = useState([])
    const lastIndex = postPerPage * currentPage
    const firstIndex = lastIndex - postPerPage
    
    useEffect(() => {
        async function loadUsers() {
            try {
                console.log(tipe)
                let response
                response = await listItems()
                
                console.log(response)
                setResult(response.data)
                setCurrentResult(response.data.slice(firstIndex, lastIndex))
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadUsers()
        }
        
        onLoad()
    }, [tipe]) /* eslint-disable-line */

    useEffect(() => {
        setCurrentResult(result.slice(firstIndex, lastIndex))
    }, [currentPage]) /* eslint-disable-line */

    const detailUser = (index) => {
        var modal = document.getElementById(`modal-quest-${index}`);

        // console.log(modal)
        var quest = document.getElementById(`quest-${index}`);

        quest.onclick = function () {
            modal.style.display = "block";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    return (
        <div >
            <div id="questList" className="user-list-content is-flex">
                {currentResult.map((item, index) => {
                    return (
                        <div
                            id={`quest-${index}`}
                            onClick={() => detailUser(index)}
                            key={index}
                            className="user-list-item p-4">
                            <div className="user-item-list-content">
                                <div className="is-flex">
                                    <h3>{item.name}</h3>
                                    <h5>Harga: {item.price} poin</h5>
                                </div>
                                <h5>Deskripsi:</h5>
                                <p>{item.description}</p>
                            </div>
                            <ItemModal item={item} id={`modal-quest-${index}`}/>
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

export default ItemList
