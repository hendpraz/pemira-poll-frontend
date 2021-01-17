import React from 'react'
import Carousel from 'components/Carousel'
import Button from 'components/Button'

const Kandidat = () => {
    return (
        <div className="container-kematian">
            <div className="border-luar-item">
                <div className="border-luar-kuning">
                    <div className="border-dalem-item">
                        <div className="border-dalem-kuning">
                            <div className="border-dalem-item contentnyacok">
                                <div className="judul-container"  id="Kandidat">
                                    <h2 className="has-text-centered">Kandidat 2021</h2>
                                </div>
                                <div className="content-container">
                                    <div className="Content columns carContainer">
                                        <div className="carousel-container column">
                                            <Carousel kandidat="K3M"/>
                                            <Button file="details-btn"/>
                                        </div>
                                        <div className="carousel-container column">
                                            <Carousel kandidat="MWAWM" />
                                            <Button file="details-btn" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kandidat
