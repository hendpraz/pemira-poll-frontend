import React from "react";
import Button from "components/Button";
import { buyItem } from "resources/shop";

const ModalBarang = ({ item, closeModal }) => {
    const processPayment = async () => {
        try {
            const response = await buyItem(item.id)

            if (response.status >= 200 && response.status < 400) {
                alert("Berhasil membeli item.")
                window.location.reload()
            } else {
                alert("Terdapat masalah, mohon coba lagi beberapa saat. Silakan cek saldo poin Anda.")
            }
        } catch (error) {
            alert(error)
        }
    }

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
                    <p>{`Apakah Anda yakin ingin menukar poin dengan ${item.name}`}</p>
                    <div className="btn-container">
                        <Button file="tukar-btn" onClick={processPayment}/>
                        <Button file="batal-merah" onClick={closeModal} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ModalBarang;
