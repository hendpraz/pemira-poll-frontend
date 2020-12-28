import React from 'react'
import config from 'config'
import 'styles/Button.scss'

const Button = ({ file, name }) => {
    const { assetsURL } = config
    const { image } = assetsURL

    return (
        <div className="details-btn">
            <img src={`/${image}/${file}.png`} alt=""/>
        </div>
    )
}

export default Button
