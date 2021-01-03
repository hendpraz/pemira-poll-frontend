import React from 'react'
import NavBerkas from 'components/Navbar/NavBerkas.js'
import Footer from 'components/Footer'
import DarkBlue from 'layouts/DarkBlue'
import Button from 'components/Button'
import { useHistory } from 'react-router-dom'

import '../../styles/pages/Berkas.scss'

const AmbilBerkas = () => {

    let history = useHistory()

    const ambilBerkas = () => {
        history.push("/daftar")
    }

    return (
        <div className="mainContainer">
            <div className="myContent berkas">
                <DarkBlue />
                <NavBerkas />
                <h1 className="top-daf">Daftarkan diri menjadi presiden KM ITB</h1>
                <h1 className="bot-daf">atau MWAWM Perwakilan Mahasiswa</h1>
                <div className="btn-container">
                    <Button file="ambil-berkas-btn" func={ambilBerkas}/>
                </div>       
            </div>
           <Footer hashtag="false" />
        </div>
    )
}

export default AmbilBerkas
