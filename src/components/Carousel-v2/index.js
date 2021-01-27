import React, {useState} from 'react'
import config from 'config'
import presKM from 'components/Carousel/presKM'
import 'styles/Carousel.scss'
import Button from 'components/Button'

const CarouselV2 = ({pilihCalon, calon}) => {
    const {assetsURL: {
            image
        }} = config

    const [current,
        setCurrent] = useState([0, 1, 2])

    const length = calon.length

    const nextSlide = () => {
        if (current[2] <= length - 4) {
            setCurrent(current.map(item => {
                return item + 3
            }))
        }
    }

    const prevSlide = () => {
        if (current[0] >= 3) {
            setCurrent(current.map(item => {
                return item - 3
            }))
        }
    }

    return (
        <div>
            <div className="carousel-v2">
                <div
                    className={`arrow-container left ${current[0] < 3 && 'hidden'}`}
                    onClick={() => {
                    prevSlide()
                }}>
                    <img src={`${image}/arrowleft.png`} className="arrow" alt="panah"/>
                </div>

                <div className="carousel-content">
                    {calon.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className={index === current[0]
                                    ? 'slide active'
                                    : 'slide'}>
                                    {index === current[0] && <div
                                        className="kandidat-profile"
                                        style={{
                                        backgroundImage: `url('${image}/bg-kandidat.png')`
                                    }}>
                                        <img src={item.photo_url} alt="kandidat-picture"/>
                                    </div>}
                                </div>
                                {index === current[0] && <div className="container">
                                    <Button file="pilih-btn" onClick={pilihCalon}/>
                                    <Button file="batal-merah"/>
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className="carousel-content">
                    {calon.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className={index === current[1]
                                    ? 'slide active'
                                    : 'slide'}>
                                    {index === current[1] && <div
                                        className="kandidat-profile"
                                        style={{
                                        backgroundImage: `url('${image}/bg-kandidat.png')`
                                    }}>
                                        <img src={item.photo_url} alt="kandidat-picture"/>
                                    </div>}
                                </div>
                                {index === current[1] && <div className="container">
                                    <Button file="pilih-btn" onClick={pilihCalon}/>
                                    <Button file="batal-merah"/>
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className="carousel-content">
                    {calon.map((item, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className={index === current[2]
                                    ? 'slide active'
                                    : 'slide'}>
                                    {index === current[2] && <div
                                        className="kandidat-profile"
                                        style={{
                                        backgroundImage: `url('${image}/bg-kandidat.png')`
                                    }}>
                                        <img src={item.photo_url} alt="kandidat-picture"/>
                                    </div>}
                                </div>

                                {index === current[2] && <div className="container">
                                    <Button file="pilih-btn" onClick={pilihCalon}/>
                                    <Button file="batal-merah"/>
                                </div>}

                            </div>
                        )
                    })}
                </div>

                <div
                    className={`arrow-container right ${current[2] > length - 4 && 'hidden'}`}
                    onClick={() => {
                    nextSlide()
                }}>
                    <img src={`${image}/arrowright.png`} className="arrow" alt="panah"/>
                </div>

            </div>
            {/* <Button file="" */}
        </div>
    )
}

export default CarouselV2
