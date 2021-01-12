import React, { useState } from 'react';
import NavMain from 'components/Navbar/NavMain.js'
import NavLoggedIn from 'components/Navbar/NavLoggedIn.js'
import DarkBlue from 'layouts/DarkBlue'
import Footer from 'components/Footer'
import VisiMisi from 'components/VisiMisi'
import 'styles/pages/AboutUs.scss'
import Organogram from 'components/Organogram';

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
                <div className="Contentr">
                <div className="toggle-container">
                    <button className="org-btn px-0-mobile" onClick={() => {clickOrg()}}>Organogram</button>
                    <button className="vm-btn p-0-mobile" onClick={() => {clickVM()}}>Visi Misi</button>
                </div>
                    <div className="carousel-container columns">
                        {tab === "organogram" ? <Organogram /> : <VisiMisi />}
                    </div>
                   
                </div>
            </div>
            <Footer hashtag='true'/>
        </div>
    );
}

export default AboutUs;