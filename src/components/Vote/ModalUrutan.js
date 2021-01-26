import React from 'react'
import Button from 'components/Button'
import Carousel from 'components/Carousel'
import CarouselV2 from 'components/Carousel-v2'

const ModalUrutan = ({pilihCalon, calon, reset}) => {

    const closeModal = () => {
        var modal = document.getElementById(`pilihUrutan`)

        modal.style.display = "none"
    }

    return (
        <div>
            <div id="pilihUrutan" className="modal pilih-urutan">
                <div className="modal-content pilih-urutan-body blue">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <h3>Daftar Calon K3M</h3>
                    <hr/>
                    <br/>
                    <div className="pilih-urutan-content">
                        <CarouselV2 pilihCalon={pilihCalon} calon={calon}/>
                    </div>
                    <div className="reset-btn-container">
                        <Button file='reset' onClick={reset}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUrutan