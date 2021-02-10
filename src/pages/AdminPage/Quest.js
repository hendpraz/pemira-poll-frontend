import React, { useState, useEffect } from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
import QuestList from 'components/Admin/QuestList'
import CreateQuest from 'components/Admin/CreateQuest'
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
                        <div id="createQuest">
                            <h1 className="has-text-centered has-text-primary">Buat Quest</h1>
                            <CreateQuest pageUser={pageUser}/>
                        </div>
                        <div id="questList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Quest yang Belum Diterima</h1>
                            <QuestList tipe="not-accepted"/>
                        </div>
                        <div id="questList2" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Quest yang Pernah di-Accept</h1>
                            <QuestList tipe="ever-accepted"/>
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
