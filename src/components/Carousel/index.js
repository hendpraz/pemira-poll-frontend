import React, {useState} from 'react'
import config from 'config'
import presKM from './presKM'
import 'styles/Carousel.scss'

const Carousel = ({kandidat}) => {
    const {assetsURL: {
            image
        }} = config

    const [current,
        setCurrent] = useState(0)
    const length = presKM.length

    const nextSlide = () => {
        setCurrent(current === length - 1
            ? 0
            : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0
            ? length - 1
            : current - 1)
    }

    return (
        <div className="carousel columns">
            <div
                className="arrow-container  left"
                onClick={() => {
                prevSlide()
            }}>
                <img src={`${image}/arrowleft.png`} className="arrow" alt="panah"/>
            </div>

            <div className="carousel-content column">
                <h2>{kandidat}</h2>
                {presKM.map((item, index) => {
                    return (
                        <div>
                            <div
                                key={index}
                                className={index === current
                                ? 'slide active'
                                : 'slide'}>
                                {index === current && <div
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
    )
}

export default Carousel
