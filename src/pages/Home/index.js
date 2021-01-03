import React, { useState } from 'react';
import NavMain from 'components/Navbar/NavMain.js'
import NavLoggedIn from 'components/Navbar/NavLoggedIn.js'
import DarkBlue from 'layouts/DarkBlue'
import Carousel from 'components/Carousel'
import Footer from 'components/Footer'
import Button from 'components/Button'
import 'styles/pages/Home.scss'

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="mainContainer">
            <div className="home myContent">
                <DarkBlue hashtag="true"/>
                {isLoggedIn ? <NavLoggedIn /> : <NavMain />}
                <div className="Content columns carContainer">
                    <div className="carousel-container column">
                        <Carousel />
                        <Button file="details-btn" />
                    </div>
                    <div className="carousel-container column">
                        <Carousel />
                        <Button file="details-btn" />
                    </div>
                   
                </div>
            </div>
            <Footer hashtag='true'/>
        </div>
    );
}

export default Home;