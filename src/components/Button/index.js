import React from 'react'
import config from 'config'
import 'styles/Button.scss'

const Button = ({ file, func }) => {
    const { assetsURL } = config
    const { image } = assetsURL

    return (
        <div className="details-btn" onClick={() => {func()}}>
            <img src={`${image}/${file}.png`} alt=""/>
        </div>
    )
}

export default Button
