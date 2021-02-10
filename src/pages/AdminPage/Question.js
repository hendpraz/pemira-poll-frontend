import React, { useState, useEffect } from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
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
                        <div id="createQuestion">
                            <h1 className="has-text-centered has-text-primary">Buat Pertanyaan</h1>
                            <CreateQuestion pageUser={pageUser}/>
                        </div>

                        <div id="questList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Pertanyaan</h1>
                            <QuestionList />
                        </div>

                        <div id="questList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Jawaban</h1>
                            <AnswerList />
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
