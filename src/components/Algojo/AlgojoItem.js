import React from "react";
import AlgojoModal from "components/Algojo/AlgojoModal";

const AlgojoItem = ({ item, last, index }) => {

    const openModal = () => {
        var modal = document.getElementById(`laporan-${index}`);
        var quest = document.getElementById(`laporanItem-${index}`);

        quest.onclick = function () {
            modal.style.display = "block";
        }

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }

    return (
        <div id={`laporanItem-${index}`} onClick={openModal}>
            <div
                className={`quest-container columns${
                    index % 3 === 0 ? ` mt-10` : ` go-top`
                } ${last && ` bor-btm`} ${index % 2 ? " blue" : ` red`}`}
            >
                <div className="quest-name column has-text-left">
                    {index + 1}. {item.judul}
                </div>
            </div>
            <AlgojoModal
                index={index}
                item={item}
            />
        </div>
    );
};

export default AlgojoItem;
