import React, { useState, useEffect } from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
import UserList from 'components/Admin/userList'
import UserAssociation from 'components/Admin/UserAssociation'
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
                        <div id="associateUser">
                            <h1 className="has-text-centered has-text-primary">Associate Massa with Lembaga</h1>
                            <UserAssociation />
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
