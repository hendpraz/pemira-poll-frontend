import React from 'react'
import config from 'config'
import Button from 'components/Button'
import ModalUrutan from './ModalUrutan'

const Priority = ({value, pilihCalon, calon, no, reset}) => {
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
                        <h4>{`${no}st priority`}</h4>
                        <p>{value.name}</p>
                    </div>}
                    {!value && <div className="btn-container"><Button file="plus-btn" onClick={openModal}/></div>}
                </div>
            </div>
            <ModalUrutan pilihCalon={pilihCalon} calon={calon} reset={reset} />
        </div>
    )
}

export default Priority
