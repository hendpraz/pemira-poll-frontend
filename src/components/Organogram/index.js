import React, { useState } from 'react'
import config from 'config'
import organogram from './organogram'
import 'styles/Carousel.scss'

const Organogram = () => {
    const {assetsURL} = config
    const {image} = assetsURL
    const [current,
        setCurrent] = useState(0)
    const length = organogram.length
    
    console.log(organogram)
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
        <div className="organogram columns">
            <div
                className="arrow-container left"
                onClick={() => {
                prevSlide()
            }}>
                <img src={`${image}/arrowleft2.png`} className="arrow" alt="panah"/>
            </div>

            <div className="organogram-content">
                {organogram.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={index === current
                            ? 'slide active'
                            : 'slide'}>
                            {index === current && <img src={`${image}/${item.img}`} alt="konten"/>}
                        </div>
                    )
                })}
            </div>

            <div
                className="arrow-container right"
                onClick={() => {
                nextSlide()
            }}>
                <img src={`${image}/arrowright2.png`} className="arrow" alt="panah"/>
            </div>

        </div>
    )
}

export default Organogram
