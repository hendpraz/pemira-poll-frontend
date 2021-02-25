import React from "react";
import Button from "components/Button";
import Footer from "components/Footer";

const AlgojoModal = ({ index, item }) => {
    const closeModal = () => {
        var modal = document.getElementById(`laporan-${index}`);

        modal.style.display = "none";
    };

    return (
        <div>
            <div id={`laporan-${index}`} className="modal">
                <div
                    className={`modal-content ${
                        index % 2 ? " blue" : ` red`
                    } laporan-modal`}
                >
                    <div className="modal-header">
                        <h3>{item.judul}</h3>
                        <span className="close" onClick={() => closeModal()}>
                            &times;
                        </span>
                    </div>
                    <hr />
                    <div className="modal-body">
                        <p>Survei oleh:</p>
                        <p>{item.penyurvei}</p>
                        <br />
                        <p>{item.deskripsi}</p>
                        <p>{item.deskripsi}</p>
                        <p>{item.deskripsi}</p>
                        <p>{item.deskripsi}</p>
                        <br />
                        <p>Survei terbuka untuk:</p>
                        <p>{item.untuk}</p>
                        <div className="btn-container">
                            <Button file="isi-btn" />
                            <Button file="batal-merah" />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AlgojoModal;
