import config from 'config'
import DarkBlue from 'layouts/DarkBlue'
import React from 'react'

const HomeBottom = () => {
    const { assetsURL : { image } } = config

    return (
        <div>
            <div className="home-bottom">
                <DarkBlue />
                <div className="cloud-container">
                    <div className="cloud-left is-hidden-mobile">
                        <img src={`${image}/cloud-left-reverse.png`} alt=""/>
                    </div>

                    <div className="cloud-right is-hidden-mobile">
                        <img src={`${image}/cloud-right-reverse.png`} alt=""/>
                    </div>
                </div>
                <div className="ads">
                    ads space 1350px*50px
                </div>
                <div className="ads">
                    ads space 1350px*50px
                </div>
                <div className="external columns">
                    <div className="column sponsor">
                        <h2>Sponsor</h2>
                        <div className="container is-flex">
                            {[1,2,3,4,5,6,7,8].map(item => {
                                return (
                                    <div className="extern-item">

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="column medpar">
                        <h2>Media Partner</h2>
                        <div className="container is-flex">
                            {[1,2,3,4,5,6,7,8].map(item => {
                                return (
                                    <div className="extern-item">

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBottom
