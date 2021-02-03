import React from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
import UserList from 'components/Admin/userList'
import QuestList from 'components/Admin/QuestList'
import CreateUser from 'components/Admin/CreateUser'
import CreateKandidat from 'components/Admin/CreateKandidat'
import UserAssociation from 'components/Admin/UserAssociation'
import BakalCalonList from 'components/Admin/BakalCalon/BakalCalonList'
import CreateBakalCalon from 'components/Admin/BakalCalon/CreateBakalCalon'
import CreateQuest from 'components/Admin/CreateQuest'
import AdminAuth from 'layouts/AdminAuth'

const Admin = () => {
    return (
        <AdminAuth>
            <div className="admin-page">
                <NavAdmin/>
                <div className="user">
                    <div id="bakalCalonList" className="mb-6">
                        <h1 className="has-text-centered has-text-primary">List Bakal calon</h1>
                        <BakalCalonList />
                    </div>
                    <div id="createUser">
                        <h1 className="has-text-centered has-text-primary">Input Data Bakal Calon Kandidat</h1>
                        <CreateBakalCalon />
                    </div>
                </div>
                <div className="user">
                    <div id="userList" className="mb-6">
                        <h1 className="has-text-centered has-text-primary">User List</h1>
                        <UserList />
                    </div>
                    <div id="associateUser">
                        <h1 className="has-text-centered has-text-primary">Associate Massa with Lembaga</h1>
                        <UserAssociation />
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
                <div className="user">
                    <div id="createQuest">
                        <h1 className="has-text-centered has-text-primary">Buat Quest</h1>
                        <CreateQuest />
                    </div>
                    <div id="questList" className="mb-6">
                        <h1 className="has-text-centered has-text-primary">Daftar Quest yang Diajukan</h1>
                        <QuestList />
                    </div>
                    <div id="questList2" className="mb-6">
                        <h1 className="has-text-centered has-text-primary">Daftar Semua Quest</h1>
                        <QuestList />
                    </div>
                    <div id="questList" className="mb-6">
                        <h1 className="has-text-centered has-text-primary">Daftar Bukti Quest</h1>
                        <QuestList />
                    </div>
                </div>
            </div>
        </AdminAuth>
    )
}

export default Admin
