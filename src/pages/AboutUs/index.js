import React, { useState } from 'react';
import NavMain from 'components/Navbar/NavMain.js'
import NavLoggedIn from 'components/Navbar/NavLoggedIn.js'
import DarkBlue from 'layouts/DarkBlue'
import CarouselV2 from 'components/Carousel-V2'
import Footer from 'components/Footer'
import VisiMisi from 'components/VisiMisi'
import 'styles/pages/AboutUs.scss'

function AboutUs() {
    const isAuthenticated = localStorage.getItem('token') ? true : false
    const [tab, setTab] = useState('')

    const clickOrg = () => {
        setTab("organogram")
    }

    const clickVM = () => {
        setTab("vm")
    }

    return (
        <div>
            <div className="myContent about-us">
                <DarkBlue hashtag="true"/>
                {isAuthenticated ? <NavLoggedIn /> : <NavMain />}
                <div className="Content">
                <div className="toggle-container">
                    <button className="org-btn" onClick={() => {clickOrg()}}>Organogram</button>
                    <button className="vm-btn" onClick={() => {clickVM()}}>Visi Misi</button>
                </div>
                    <div className="carousel-container columns">
                        {tab === "organogram" ? <CarouselV2 /> : <VisiMisi />}
                    </div>
                   
                </div>
            </div>
            <Footer hashtag='true'/>
        </div>
    );
}

export default AboutUs;