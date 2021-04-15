import React, { useState, useEffect } from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/Admin.scss'
import ItemList from 'components/Admin/Shop/ItemList'
import CreateItem from 'components/Admin/Shop/CreateItem'
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
                            <h1 className="has-text-centered has-text-primary">Buat Item</h1>
                            <CreateItem pageUser={pageUser}/>
                        </div>
                        <div id="questList" className="mb-6">
                            <h1 className="has-text-centered has-text-primary">Daftar Semua Item</h1>
                            <ItemList tipe="not-accepted"/>
                        </div>
                    </div>
                </div>
            }
        </AdminAuth>
    )
}

export default Admin
