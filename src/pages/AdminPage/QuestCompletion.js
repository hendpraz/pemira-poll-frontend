import React, { useState, useEffect } from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
import QuestList from 'components/Admin/QuestList'
import QuestProofList from 'components/Admin/QuestProof/QuestProofList'
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
                        <div id="questList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Bukti Quest yang Belum Diterima</h1>
                            <QuestProofList tipe="pending"/>
                        </div>
                        <div id="questList2" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Bukti Quest yang di-Approve</h1>
                            <QuestProofList tipe="approved"/>
                        </div>
                        <div id="questList3" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Bukti Quest yang di-Reject</h1>
                            <QuestProofList tipe="rejected"/>
                        </div>
                        <div id="questFinish" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Selesaikan Quest</h1>
                            <QuestList tipe="running"/>
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
