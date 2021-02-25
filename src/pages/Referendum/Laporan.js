import React from "react";
import config from "config";
import Button from "components/Button";
import AlgojoModal from "components/Algojo/AlgojoModal";

const Laporan = ({ item, index }) => {
    const {
        assetsURL: { image },
    } = config;

    const openModal = () => {
        var modal = document.getElementById(`laporan-${index}`);
        modal.style.display = "block";
    };

    return (
        <div>
            <div className={`blue priority-container`}>
                <div className={`blue priority is-flex`}>
                    <div className="img-container">
                        <img src={`${image}/Koin 2.png`} alt="" />
                    </div>

                    <div className="text-container">
                        <h3>{item.judul}</h3>
                        <p>{`Oleh: ${item.penyurvei}`}</p>
                        <p>{`Survei terbuka untuk ${item.untuk}`}</p>
                        <Button file="isi-btn" onClick={openModal} />
                    </div>
                </div>
                <AlgojoModal item={item} index={index} />
            </div>
        </div>
    );
};

export default Laporan;
