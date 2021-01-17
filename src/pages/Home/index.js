import React from 'react';
import NavMain from 'components/Navbar/NavMain.js'
import NavLoggedIn from 'components/Navbar/NavLoggedIn.js'
import DarkBlue from 'layouts/DarkBlue'
import Carousel from 'components/Carousel'
import Footer from 'components/Footer'
import Button from 'components/Button'
import 'styles/pages/Home.scss'
import config from 'config';
import Kandidat from './Kandidat';
import TopFive from './TopFive';
import Tutorial from './Tutorial';
import FAQ from './FAQ';
import HomeBottom from './HomeBottom';

function Home() {
    const {assetsURL: {
            image
        }} = config

    const isAuthenticated = localStorage.getItem('token')
        ? true
        : false

    return (
        <div className="mainContainer">
            <div className="home myContent">
                <DarkBlue hashtag="true"/> {isAuthenticated
                    ? <NavLoggedIn/>
                    : <NavMain logo={true} />}
                <div className="Content carContainer margincuy">
                    <hr/>
                    <div className="home-landing-content">
                        <h2 >Pemira KM ITB 2021</h2>
                        <p>pemira km itb ada sarana untuk memberi warna pada kampus supaya berwarna
                            misal kaya gambar disamping pemira km itb ada sarana untuk memberi warna pada
                            kampus supaya berwarna misal kaya gambar disamping</p>
                    </div>
                    <div className="cloud-container">
                        <div className="cloud-left is-hidden-mobile">
                            <img src={`${image}/cloudleft.png`} alt=""/>
                        </div>

                        <div className="cloud-right is-hidden-mobile">
                            <img src={`${image}/cloudright.png`} alt=""/>
                        </div>
                    </div>
                </div>
                <Kandidat />
                <TopFive />
                <Tutorial />
                <FAQ />
                <HomeBottom />
            </div>

            <Footer hashtag='true'/>
        </div>
    );
}

export default Home;