import React from 'react'
import config from 'config'
import 'styles/pages/Vote.scss'
import Priority from 'components/Vote/Priority'
import Footer from 'components/Footer'
import Button from 'components/Button'
import ModalSubmit from 'components/Vote/ModalSubmit'

const Vote = () => {
    const {assetsURL: {
            image
        }} = config

    const openModal = () => {
        let modalUnggah = document.getElementById("konfirmasiCoblos")
        modalUnggah.style.display = "block"
    }

    return (
        <div className="main-container">
            <div className="vote-page is-flex">
                <div className="vote-left">
                    <div
                        className="background-image"
                        style={{
                        backgroundImage: `url('${image}/Scroll medium 2.png')`
                    }}>
                        <div className="pemilihan-k3m">
                            <h2>Pemilihan K3M</h2>
                            <Priority value={true}/>
                            <Priority/>
                            <Priority/>
                            <Priority/>
                        </div>
                    </div>
                </div>
                <div className="vote-right">
                    <div
                        className="background-image"
                        style={{
                        backgroundImage: `url('${image}/hahahay.png')`
                    }}>
                        <div className="vote-right-content">
                            <h2>Hafid Abi D</h2>
                            <h5>13519371</h5>
                            <hr/>
                            <div className="has-text-left">
                                <p>total calon:</p>
                                <p>kandidat diurutkan:</p>
                                <p>Ada captcha disini</p>
                            </div>
                            <Button file="submit" onClick={openModal}/>
                            <Button file="reset"/>
                            <Button file="batal"/>
                        </div>
                    </div>
                </div>
            </div>
            <ModalSubmit />
            <Footer/>
        </div>
    )
}

export default Vote
