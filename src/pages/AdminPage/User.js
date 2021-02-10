import React, { useState, useEffect } from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
import UserList from 'components/Admin/userList'
import CreateUser from 'components/Admin/CreateUser'
import CreateKandidat from 'components/Admin/CreateKandidat'
import AdminAuth from 'layouts/AdminAuth'
import { useAppContext } from 'libs/contextLib'

const Admin = () => {
    const { user } = useAppContext()
    const [pageUser, setPageUser] = useState()

    useEffect(() => {
        if (user) {
            console.log(user)
            setPageUser(user)
        }
    }, [user])

    return (
        <AdminAuth>
            {
                pageUser &&
                <div className="admin-page">
                    <NavAdmin/>
                    <div className="user">
                        <div id="userList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">User List</h1>
                            <UserList />
                        </div>
                        <div id="createUser">
                            <h1 className="has-text-centered has-text-primary">Create Non-Kandidat Account</h1>
                            <CreateUser />
                        </div>
                        <div id="userList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Create Kandidat Account</h1>
                            <CreateKandidat />
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
