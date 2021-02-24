import React from "react";
import Button from "components/Button";

const AlgojoModal = ({ index, item }) => {
    const closeModal = () => {
        var modal = document.getElementById(`laporan-${index}`);

        modal.style.display = "none"
    }

    return (
        <div>
            <div id={`laporan-${index}`} className="modal">
                <div
                    className={`modal-content ${index % 2 ? " blue" : ` red`}`}
                >
                    <span
                        className="close"
                        onClick={() => closeModal()}
                    >
                        &times;
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AlgojoModal;
