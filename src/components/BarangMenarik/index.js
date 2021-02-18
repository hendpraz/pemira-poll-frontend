import React, { useState } from "react";

//Assets
import config from "config";
import barang from "./barangMenarik";
import ModalBarang from "./ModalBarang";

const BarangMenarik = () => {
    const {
        assetsURL: { image },
    } = config;

    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [show, setShow] = useState(false);
    const length = barang.length;

    console.log(current)

    const openModal = (item) => {
        setSelected(item);
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
        setSelected(null);
    };


    const nextSlide = () => {
        setCurrent(current > length - 2 ? current : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current < 0 ? current : current - 1);
    };

    return (
        <div className="container-barang-menarik">
            <div className="barang-carousel-container">
                <div className="img-container">
                    <img
                        className={current <= 0 ? "arrow hide" : "arrow"}
                        src={`${image}/arrowleft.png`}
                        alt="prev-button"
                        onClick={prevSlide}
                    />
                </div>
                <div
                    className="background-image"
                    style={{ backgroundImage: `url('${image}/Scroll 5.png')` }}
                >
                    <div className="carousel-barang columns">
                        <div className="column">
                            {barang.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div
                                            className={
                                                index === current
                                                    ? "slide active"
                                                    : "slide"
                                            }
                                        >
                                            {index === current && (
                                                <div className="barang-container">
                                                    <img
                                                        src={item.img}
                                                        alt="barang"
                                                    />
                                                    <p>{item.name}</p>
                                                    <p>{item.poin}</p>
                                                    <div
                                                        className="details-btn"
                                                        onClick={() =>
                                                            openModal(item)
                                                        }
                                                    >
                                                        <img
                                                            src={`${image}/tukar-btn.png`}
                                                            alt="tukar button"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="column">
                            {barang.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div
                                            className={
                                                index === current + 1
                                                    ? "slide active"
                                                    : "slide"
                                            }
                                        >
                                            {index === current + 1 && (
                                                <div className="barang-container">
                                                    <img
                                                        src={item.img}
                                                        alt="barang"
                                                    />
                                                    <p>{item.name}</p>
                                                    <p>{item.poin}</p>
                                                    <div
                                                        className="details-btn"
                                                        onClick={() =>
                                                            openModal(item)
                                                        }
                                                    >
                                                        <img
                                                            src={`${image}/tukar-btn.png`}
                                                            alt="tukar button"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img
                        className={current == length-2 ? "arrow hide" : "arrow"}
                        src={`${image}/arrowright.png`}
                        alt="next-button"
                        onClick={nextSlide}
                    />
                </div>
            </div>
            {show ? <ModalBarang item={selected} closeModal={closeModal} /> : null}
        </div>
    );
};

export default BarangMenarik;
