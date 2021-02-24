import React from "react";
import Button from "components/Button";

const ModalBarang = ({ item, closeModal }) => {
    return (
        <div className="modal-gift-shop">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title has-text-primary">
                        Tukar Poin
                    </p>
                    <button
                        onClick={() => closeModal()}
                        className="delete"
                        aria-label="close"
                    ></button>
                </header>

                <section className="modal-card-body">
                    <hr />
                    <p>{`Apakah Anda yakin ingin menukar poin dengan ${item.name.substring(
                        2
                    )}`}</p>
                    <div className="btn-container">
                        <Button file="tukar-btn" />
                        <Button file="batal-merah" onClick={closeModal} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ModalBarang;
