import React from 'react'
import syaratK3M from './syaratK3M'
import syaratMWA from './syaratMWA'
import 'styles/Persyaratan.scss'
import Button from 'components/Button'

const Persyaratan = ({tipe}) => {
    // let listSyarat
    return (
        <div className={`persyaratan ${tipe}`}>
            <p className="syarat-title">Persyaratan Calon {tipe}</p>
            {tipe === "K3M"
                ? <ol className="list-syarat">
                        {syaratK3M.map((item, index) => {
                            return (
                                <li className="item-syarat" key={index}>{item}</li>
                            )
                        })}
                    </ol>
                : <ol className="list-syarat">
                    {syaratMWA.map((item, index) => {
                        return (
                            <li className="item-syarat" key={index}>{item}</li>
                        )
                    })}
                </ol>}

            <div className="form-container">
                <div className="input-container">
                    <input type="text" name={tipe} id="username" placeholder="NIM Kamu berapa?"/>
                </div>

                <div className="btn-container">
                    <Button file="ambil-berkas-v2"/>
                </div>
            </div>

        </div>
    )
}

export default Persyaratan
