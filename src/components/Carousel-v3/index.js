import React, {useState} from 'react'
import config from 'config'
import presKM from 'components/Carousel/presKM'
import 'styles/Carousel.scss'
import Button from 'components/Button'

const CarouselV3 = () => {
    const {assetsURL: {
            image
        }} = config

    const [current,
        setCurrent] = useState([
        0,
        1,
        2,
        3,
        4,
        5
    ])

    const openModal = () => {
        let modalUnggah = document.getElementById("konfirmasiCoblos")
        modalUnggah.style.display = "flex"
    }

    const length = presKM.length

    console.log(length)
    console.log(current)

    const nextSlide = () => {
        setCurrent(current.map(item => {
            return item + 6
        }))
    }

    const prevSlide = () => {
        setCurrent(current.map(item => {
            return item - 6
        }))
    }

    console.log(current)

    return (
        <div>
            <div className="carousel-v2 columns">
                {current[0] === 0
                    ? <div className="arrow-container  left hidden ">
                            <img src={`${image}/arrowleft.png`} className="arrow" alt="panah"/>
                        </div>
                    : <div
                        className="arrow-container  left"
                        onClick={() => {
                        prevSlide()
                    }}>
                        <img src={`${image}/arrowleft.png`} className="arrow" alt="panah"/>
                    </div>}

                <div className="carouselv3-container column">
                    <div className="carousel-content">
                        {presKM.map((item, index) => {
                            return (
                                <div>
                                    <div
                                        key={index}
                                        className={index === current[0]
                                        ? 'slide active'
                                        : 'slide'}>
                                        {index === current[0] && <div
                                            className="kandidat-profile"
                                            style={{
                                            backgroundImage: `url('${image}/bg-kandidat.png')`
                                        }}>
                                            <img src={`${image}/Koin.png`} alt="kandidat-picture"/>
                                        </div>}
                                    </div>
                                </div>
                            )
                        })}
                        {current[0] < length && <div className="btn-container">
                            <Button file="details-btn"  />
                            <Button file="pilih-btn"  onClick={openModal}/>
                        </div>}
                    </div>
                    <div className="carousel-content ">
                        {presKM.map((item, index) => {
                            return (
                                <div>
                                    <div
                                        key={index}
                                        className={index === current[1]
                                        ? 'slide active'
                                        : 'slide'}>
                                        {index === current[1] && <div
                                            className="kandidat-profile"
                                            style={{
                                            backgroundImage: `url('${image}/bg-kandidat.png')`
                                        }}>
                                            <img src={`${image}/Koin.png`} alt="kandidat-picture"/>
                                        </div>}
                                    </div>
                                </div>
                            )
                        })}
                        {current[1] < length && <div className="btn-container">
                            <Button file="details-btn"  />
                            <Button file="pilih-btn"  onClick={openModal}/>
                        </div>}
                    </div>
                    <div className="carousel-content ">
                        {presKM.map((item, index) => {
                            return (
                                <div>
                                    <div
                                        key={index}
                                        className={index === current[2]
                                        ? 'slide active'
                                        : 'slide'}>
                                        {index === current[2] && <div
                                            className="kandidat-profile"
                                            style={{
                                            backgroundImage: `url('${image}/bg-kandidat.png')`
                                        }}>
                                            <img src={`${image}/Koin.png`} alt="kandidat-picture"/>
                                        </div>}
                                    </div>
                                </div>
                            )
                        })}
                        {current[2] < length && <div className="btn-container">
                            <Button file="details-btn"  />
                            <Button file="pilih-btn"  onClick={openModal}/>
                        </div>}
                    </div>
                    <div className="carousel-content ">
                        {presKM.map((item, index) => {
                            return (
                                <div>
                                    <div
                                        key={index}
                                        className={index === current[3]
                                        ? 'slide active'
                                        : 'slide'}>
                                        {index === current[3] && <div
                                            className="kandidat-profile"
                                            style={{
                                            backgroundImage: `url('${image}/bg-kandidat.png')`
                                        }}>
                                            <img src={`${image}/Koin.png`} alt="kandidat-picture"/>
                                        </div>}
                                    </div>
                                </div>
                            )
                        })}
                        {current[3] < length && <div className="btn-container">
                            <Button file="details-btn"  />
                            <Button file="pilih-btn"  onClick={openModal}/>
                        </div>}
                    </div>
                    <div className="carousel-content ">
                        {presKM.map((item, index) => {
                            return (
                                <div>
                                    <div
                                        key={index}
                                        className={index === current[4]
                                        ? 'slide active'
                                        : 'slide'}>
                                        {index === current[4] && <div
                                            className="kandidat-profile"
                                            style={{
                                            backgroundImage: `url('${image}/bg-kandidat.png')`
                                        }}>
                                            <img src={`${image}/Koin.png`} alt="kandidat-picture"/>
                                        </div>}
                                    </div>
                                </div>
                            )
                        })}
                        {current[4] < length && <div className="btn-container">
                            <Button file="details-btn"  />
                            <Button file="pilih-btn"  onClick={openModal}/>
                        </div>}
                    </div>
                    <div className="carousel-content ">
                        {presKM.map((item, index) => {
                            return (
                                <div>
                                    <div
                                        key={index}
                                        className={index === current[5]
                                        ? 'slide active'
                                        : 'slide'}>
                                        {index === current[5] && <div
                                            className="kandidat-profile"
                                            style={{
                                            backgroundImage: `url('${image}/bg-kandidat.png')`
                                        }}>
                                            <img src={`${image}/Koin.png`} alt="kandidat-picture"/>
                                        </div>}
                                    </div>

                                </div>
                            )
                        })}
                        {current[5] < length && <div className="btn-container">
                            <Button file="details-btn"  />
                            <Button file="pilih-btn"  onClick={openModal}/>
                        </div>}
                    </div>
                </div>

                {current[5] > presKM.length - 1
                    ? <div className="arrow-container right hidden">
                            <img src={`${image}/arrowright.png`} className="arrow" alt="panah"/>
                        </div>
                    : <div
                        className="arrow-container  right"
                        onClick={() => {
                        nextSlide()
                    }}>
                        <img src={`${image}/arrowright.png`} className="arrow" alt="panah"/>
                    </div>}

            </div>
        </div>
    )
}

export default CarouselV3
