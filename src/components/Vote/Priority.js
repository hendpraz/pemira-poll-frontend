import React from 'react'
import config from 'config'
import Button from 'components/Button'

const Priority = ({value}) => {
    const { assetsURL: {image}} = config

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
                    {!value && <div className="btn-container"><Button file="plus-btn"/></div>}
                </div>
            </div>
        </div>
    )
}

export default Priority
