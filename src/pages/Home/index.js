import React from 'react';
import NavMain from '../../components/Navbar/NavMain.js'
import DarkBlue from '../../layouts/DarkBlue'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import config from '../../config'
import Button from '../../components/Button'
import '../../styles/pages/Home.scss'

function Home() {
    const { assetsURL } = config
    const { image } = assetsURL

    return (
        <div>
            <div className="myContent">
                <DarkBlue/>
                <NavMain/>
                <div className="Content columns">
                    <div className="carousel-container column">
                        <Carousel />
                        <button className="details-btn">
                            <img src={`${image}/Tombol 5.png`} alt="" />
                            <h3>Details</h3>
                        </button>
                    </div>
                    <div className="carousel-container column">
                        <Carousel />
                        <Button name="Details" file="Tombol 5" />
                    </div>
                   
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;