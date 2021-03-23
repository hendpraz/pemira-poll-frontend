import React from 'react'

const QuestionModal = ({ item, id }) => {
    const closeModal = () => {
        var modal = document.getElementById(id);

        modal.style.display = "none"
    }

    return (
        <div>
            <div className="modal" id={id}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-primary">Question: <span className="username">{item.judul}</span></p>
                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td><h5>Nama Item</h5></td>
                                    <td><h5>{`: ${item.name}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Deskripsi</h5></td>
                                    <td><h5>{`: ${item.description}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Harga</h5></td>
                                    <td><h5>{`: ${item.price}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Url Gambar</h5></td>
                                    <td><h5>{`: ${item.photo_url}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Mahasiswa S1</h5></td>
                                    <td><h5>{`: ${item.allow_mhs_s1 ? "Bisa Beli" : "-"}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Mahasiswa Akmet</h5></td>
                                    <td><h5>{`: ${item.allow_mhs_akmet ? "Bisa Beli" : "-"}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Mahasiswa S2</h5></td>
                                    <td><h5>{`: ${item.allow_mhs_s2 ? "Bisa Beli" : "-"}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Akun Lembaga</h5></td>
                                    <td><h5>{`: ${item.allow_lembaga ? "Bisa Beli" : "-"}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Akun Kandidat K3M</h5></td>
                                    <td><h5>{`: ${item.allow_kandidat_k3m ? "Bisa Beli" : "-"}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Akun Kandidat MWA</h5></td>
                                    <td><h5>{`: ${item.allow_kandidat_mwa ? "Bisa Beli" : "-"}`}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5>Created At</h5></td>
                                    <td><h5>{`: ${item.created_at}`}</h5></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default QuestionModal
