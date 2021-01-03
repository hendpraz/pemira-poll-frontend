import React from 'react'
import config from 'config'

const VisiMisi = () => {
    const {assetsURL} = config
    const {image} = assetsURL

    return (
        <div className="vm-container">
            <img src={`${image}/Scroll 5.png`} alt="scroll"/>
            <div className="vm-content">
                <h4>Visi</h4>
                <h5>
                    Pemira KM ITB 2020 sebagai pesta demokrasi yang mewujudkan partisipasi aktif
                    mahasiswa ITB melalui konsep Game of Thrones
                </h5>
                <br />
                <h4>Misi</h4>
                <ol>
                    <li>
                        Melaksanakan Pemira KM ITB 2020 yang berpegang teguh dengan asas pemilu KM ITB
                    </li>
                    <li>
                        Membuat wadah pembelajaran dan pengembangan yang baik melalui Pemira KM ITB 2020
                    </li>
                    <li>
                        Menciptakan Pemira KM ITB 2020 yang hidup dan dapat dinikmati mahasiswa ITB
                    </li>
                    <li>
                        Mengusahakan sebesar-besarnya kolaborasi komponen KM ITB
                    </li>
                </ol>
            </div>

        </div>
    )
}

export default VisiMisi
