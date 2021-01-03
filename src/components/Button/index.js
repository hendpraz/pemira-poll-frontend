import React from 'react'
import config from 'config'
import 'styles/Button.scss'

const Button = ({ file, onClick }) => {
    const { assetsURL } = config
    const { image } = assetsURL

    return (
        <div className="details-btn" onClick={onClick}>
            <img src={`${image}/${file}.png`} alt=""/>
        </div>
    )
}

export default Button
