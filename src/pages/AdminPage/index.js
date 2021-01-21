import React from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
import UserList from 'components/Admin/userList'
import QuestList from 'components/Admin/QuestList'
import CreateUser from 'components/Admin/CreateUser'
import AdminAuth from 'layouts/AdminAuth'

const Admin = () => {
    return (
        <AdminAuth>
            <div className="admin-page">
                <NavAdmin/>
                <div className="user">
                    <div id="userList" className="mb-6">
                        <h1 className="has-text-centered has-text-primary">User List</h1>
                        <UserList />
                    </div>
                    <div id="createUser">
                        <h1 className="has-text-centered has-text-primary">Create User</h1>
                        <CreateUser />
                    </div>
                </div>
                <div className="user">
                    <div id="questList" className="mb-6">
                        <h1 className="has-text-centered has-text-primary">Quest List</h1>
                        <QuestList />
                    </div>
                    <div id="createQuest">
                        <h1 className="has-text-centered has-text-primary">Create Quest</h1>
                        <CreateUser />
                    </div>
                </div>
            </div>
        </AdminAuth>
    )
}

export default Admin
