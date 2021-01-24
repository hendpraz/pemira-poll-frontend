import Footer from 'components/Footer'
import DarkBlue from 'layouts/DarkBlue'
import React from 'react'
import config from 'config'
import Button from 'components/Button'
import {useHistory} from 'react-router-dom'

const VoteSuccess = () => {
    const {assetsURL: {
            image
        }} = config

    const history = useHistory()

    return (
        <div className="vote-success">
            <DarkBlue/>
            <div className="vote-success-container">
                
                <div
                    className="background-image"
                    style={{
                    backgroundImage: `url('${image}/Scroll 8.png')`
                }}>
                    <div className="kembali-scroll">
                        <h1>Pemilihan K3M</h1>
                        <Button file="kembali" onClick={() => history.push('vote')}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default VoteSuccess
