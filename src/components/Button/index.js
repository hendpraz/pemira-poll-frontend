import React from 'react'
import config from '../../config'
import '../../styles/Button.scss'

const Button = ({ file, name }) => {
    const { assetsURL } = config
    const { image } = assetsURL

    console.log(`${image}/${file}.png`)

    return (
        <button className="details-btn">
            <img src={`${image}/${file}.png`} alt=""/>
            <h3>{name}</h3>
        </button>
    )
}

export default Button
