import React from 'react'
import Footer from 'components/Footer'
import Persyaratan from 'components/Persyaratan'

const Pendaftaran = () => {
    return (
        <div>
            <div className="loginContentContainer daftar">
                <div className="LoginContent">
                    <div className="header">
                        <h2>Pendaftaran</h2>
                    </div>
                    <hr/>

                    <div className="formContainer columns">
                        <div className="syarat-container column">
                            <Persyaratan tipe='K3M'/>
                        </div>
                        <div className="syarat-container column">
                            <Persyaratan tipe='MWA'/>
                        </div> 
                    </div>
                </div>
                <Footer hashtag="false"/>
            </div>
        </div>
    )
}

export default Pendaftaran
