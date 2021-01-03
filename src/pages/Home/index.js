import React from 'react';
import NavMain from 'components/Navbar/NavMain.js'
import NavLoggedIn from 'components/Navbar/NavLoggedIn.js'
import DarkBlue from 'layouts/DarkBlue'
import Carousel from 'components/Carousel'
import Footer from 'components/Footer'
import Button from 'components/Button'
import 'styles/pages/Home.scss'

function Home() {
    const isAuthenticated = localStorage.getItem('token') ? true : false

    return (
        <div>
            <div className="myContent">
                <DarkBlue hashtag="true"/>
                {isAuthenticated ? <NavLoggedIn /> : <NavMain />}
                <div className="Content columns">
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