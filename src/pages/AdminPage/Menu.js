import React from 'react'
import NavAdmin from 'components/Navbar/NavAdmin'
import 'styles/pages/AdminMenu.scss'
import AdminAuth from 'layouts/AdminAuth'
import {Link} from 'react-router-dom'

const Admin = () => {
    return (
        <AdminAuth>
            <div className="admin-page">
                <NavAdmin/>
                <div className="container">
                    <h1>Menu Admin</h1>
                    <div class="columns is-variable is-6 py-32">
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/users">
                                Manage Akun User
                            </Link>
                        </div>
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/massa-lembaga">
                                Hubungkan Massa dan Lembaga
                            </Link>
                        </div>
                    </div>

                    <div class="columns is-vcentered p-16">
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/bakal-calon">
                                Manage Data Bakal Calon
                            </Link>
                        </div>
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/user-activity">
                                Lihat Aktivitas User
                            </Link>
                        </div>
                    </div>

                    <div class="columns is-vcentered p-16">
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/questions">
                                Manage Pertanyaan dan Jawaban
                            </Link>
                        </div>
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/quests">
                                Manage Quest
                            </Link>
                        </div>
                    </div>

                    <div class="columns is-vcentered p-16">
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/quest-proofs">
                                Quest Proofs
                            </Link>
                        </div>
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/quest-completion">
                                Quest Completion
                            </Link>
                        </div>
                    </div>
                    <div class="columns is-vcentered p-16">
                        <div class="column menu-column">
                            <Link className="menu-item" to="/admin/duels">
                                Manage Duel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuth>
    )
}

export default Admin
