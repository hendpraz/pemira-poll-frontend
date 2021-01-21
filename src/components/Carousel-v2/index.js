import React, {useState} from 'react'
import config from 'config'
import presKM from 'components/Carousel/presKM'
import 'styles/Carousel.scss'

const CarouselV2 = () => {
    const {assetsURL: {
            image
        }} = config

    const [current,
        setCurrent] = useState([0, 1, 2])

    const length = presKM.length

    const nextSlide = () => {
        setCurrent(current.map(item => {
            if (item == length - 1) {
                return 0
            } else {
                return item + 1
            }
        }))
    }

    const prevSlide = () => {
        setCurrent(current.map(item => {
            if (item == 0) {
                return length-1
            } else {
                return item - 1
            }
        }))
    }

    console.log(current)

    return (
        <div>
            <div className="carousel-v2 columns">
                <div
                    className="arrow-container  left"
                    onClick={() => {
                    prevSlide()
                }}>
                    <img src={`${image}/arrowleft.png`} className="arrow" alt="panah"/>
                </div>

                <div className="carousel-content column">
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
                </div>
                <div className="carousel-content column">
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
                </div>
                <div className="carousel-content column">
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
                </div>

                <div
                    className="arrow-container right"
                    onClick={() => {
                    nextSlide()
                }}>
                    <img src={`${image}/arrowright.png`} className="arrow" alt="panah"/>
                </div>

            </div>
        </div>
    )
}

export default CarouselV2
