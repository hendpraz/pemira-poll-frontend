import React, { useState } from 'react'
import config from '../../config'
import presKM from './presKM'
import '../../styles/Carousel.scss'

const Carousel = () => {
    const { assetsURL} = config
    const { image } = assetsURL
    const [current, setCurrent] = useState(0)
    const length = presKM.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    return (
        <div className="carousel columns">
            <div className="arrow-container  left" onClick={() => {prevSlide()}}>
                <img src={`${image}/arrowleft.png`} className="arrow" alt="panah"/>
            </div>
           
            <div className="carousel-content column">
                {presKM.map((image, index) => {
                return (
                    <div key={index} 
                        className={index === current ? 'slide active' : 'slide'}>
                        {index === current && <img src={image.url} alt="konten" />}
                    </div>
                )
            })}
            </div>
            
            <div className="arrow-container right" onClick={() => {nextSlide()}}>
                <img src={`${image}/arrowright.png`} className="arrow" alt="panah"/>
            </div>
           
        </div>
    )
}

export default Carousel
