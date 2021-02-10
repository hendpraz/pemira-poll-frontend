import React, { useState, useEffect } from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/AdminMassaLembaga.scss'
import UserList from 'components/Admin/userList'
import UserAssociation from 'components/Admin/UserAssociation'
import AdminAuth from 'layouts/AdminAuth'
import { listUsers } from 'resources/user'

const Admin = () => {
    const [lembagaList, setLembagaList] = useState()
    const [massaList, setMassaList] = useState()

    useEffect(() => {
        async function loadUsers() {
            try {
                let response = await listUsers()

                let tempLembaga = []
                let tempMassa = []

                response.forEach(element => {
                    if (element.groups === 3) {
                        tempMassa.push(element)
                    } else if (element.groups === 4) {
                        tempLembaga.push(element)
                    }
                });

                console.log(tempLembaga)

                setLembagaList(tempLembaga)
                setMassaList(tempMassa)
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadUsers()
        }
        
        onLoad()
    }, [])

    return (
        <AdminAuth>
            {
                massaList && lembagaList &&
                <div className="admin-page">
                    <NavAdmin/>

                    <div className="user">
                    <div id="userList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Massa</h1>
                            <UserList userList={massaList}/>
                        </div>
                        <div id="userList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Lembaga</h1>
                            <UserList userList={lembagaList}/>
                        </div>
                        <div id="associateUser">
                            <h1 className="has-text-centered has-text-primary">Associate Massa with Lembaga</h1>
                            <UserAssociation lembagaList={lembagaList} massaList={massaList}/>
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
