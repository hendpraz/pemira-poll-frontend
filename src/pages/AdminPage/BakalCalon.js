import React, { useState, useEffect } from 'react'
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
import { useAppContext } from 'libs/contextLib'

import CreateQuestion from 'components/Admin/Question/CreateQuestion'
import QuestionList from 'components/Admin/Question/QuestionList'
import AnswerList from 'components/Admin/Question/AnswerList'

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
                        <div id="bakalCalonList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">List Bakal calon</h1>
                            <BakalCalonList />
                        </div>
                        <div id="createUser">
                            <h1 className="has-text-centered has-text-primary">Input Data Bakal Calon Kandidat</h1>
                            <CreateBakalCalon />
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
