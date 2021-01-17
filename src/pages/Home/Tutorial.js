import Button from 'components/Button'
import config from 'config'
import React from 'react'

const Tutorial = () => {
    const {assetsURL: {
            image
        }} = config

    return (
        <div className="container-kematian">
            <div className="border-luar-item">
                <div className="border-luar-kuning">
                    <div className="border-dalem-item">
                        <div className="border-dalem-kuning">
                            <div className="border-dalem-item contentnyacok">
                                <div className="judul-container">
                                    <h2 className="has-text-centered" id="Tutorial">Tutorial</h2>
                                </div>
                                <div className="content-container">
                                    <div className="columns tutorial-content">
                                        <div className="column has-text-centered">
                                            <p>
                                                adsfasdfasfasfafdafafasdasdfafa adsfasdfasfasfafdafafasdasdfafa
                                                adsfasdfasfasfafdafafasdasdfafa adsfasdfasfasfafdafafasdasdfafa
                                            </p>
                                            <Button file="details-btn"/>
                                        </div>
                                        <div className="column">
                                            <div
                                                className="background-tutorial"
                                                style={{
                                                backgroundImage: `url('${image}/paper-parchment.png')`
                                            }}>
                                                <iframe
                                                    src="https://www.youtube.com/embed/9xANkfQu73c"
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen
                                                    title="Tutorial"
                                                    ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutorial
