import React from 'react'
import config from 'config'
import Button from 'components/Button'
import ModalUrutan from './ModalUrutan'

const Priority = ({value}) => {
    const { assetsURL: {image}} = config

    const openModal = () => {
        let modalUnggah = document.getElementById("pilihUrutan")
        modalUnggah.style.display = "block"
    }

    return (
        <div>
            <div className={`${value ? 'red' : 'blue'} priority-container`}>
                <div className={`${value ? 'red' : 'blue'} priority is-flex`}>
                    {value && <div className="img-container">
                        <img src={`${image}/Koin 2.png`} alt=""/>
                    </div>}
                    {value && <div className="text-container">
                        <h4>1st priority</h4>
                        <p>5. Robert Supriyadi</p>
                    </div>}
                    {!value && <div className="btn-container"><Button file="plus-btn" onClick={openModal}/></div>}
                </div>
            </div>
            <ModalUrutan />
        </div>
    )
}

export default Priority
