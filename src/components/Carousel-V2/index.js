import React, {useState} from 'react'
import config from 'config'
import BaganOrg from './BaganOrg'
import 'styles/Carousel.scss'

const CarouselV2 = () => {
    const {assetsURL} = config
    const {image} = assetsURL
    const [current,
        setCurrent] = useState(0)
    const [secCurrent,
        setSecCurrent] = useState(1)
    const length = BaganOrg.length

    const nextSlide = () => {
        setCurrent(current === length - 1
            ? 0
            : current + 1)
        setSecCurrent(secCurrent === length - 1
            ? 0
            : secCurrent + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0
            ? length - 1
            : current - 1)
        setSecCurrent(secCurrent === 0
            ? length - 1
            : secCurrent - 1)
    }

    console.log(current)

    return (
        <div className="carousel columns carousel-v2">
            <div
                className="arrow-container  left"
                onClick={() => {
                prevSlide()
            }}>
                <img src={`${image}/arrowleft.png`} className="arrow" alt="panah"/>
            </div>

            <div className="carousel-content columns">
                {BaganOrg.map((image, index) => {
                    return (
                        <div
                            key={index}
                            className={index === current
                            ? 'slide active column'
                            : 'slide column'}>
                            <h3>{image.nama}</h3>
                            {index === current && <img src={image.url} alt="konten"/>}
                            <button>Info</button>
                        </div>
                    )
                })}

                {BaganOrg.map((image, index) => {
                    return (
                        <div
                            key={index}
                            className={index === secCurrent
                            ? 'slide active column'
                            : 'slide column'}>
                            <h3>{image.nama}</h3>
                            {index === secCurrent && <img src={image.url} alt="konten"/>}
                            <button>Info</button>
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

export default CarouselV2
