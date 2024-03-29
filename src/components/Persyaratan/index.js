import React, { useState } from 'react'
import syaratK3M from './syaratK3M'
import syaratMWA from './syaratMWA'
import 'styles/Persyaratan.scss'
import Button from 'components/Button'
import config from "config"

const Persyaratan = ({tipe}) => {
  const [nim, setNim] = useState("")
  const { defaultAPIURL } = config
  const syaratKandidat = [
    "Mahasiswa ITB aktif.",
    "Tidak memiliki afiliasi atau merupakan anggota partai politik, organisasi sayap, dan turunannya.",
    "Mendeklarasikan segala afiliasi atau keanggotaan organisasi selain yang merupakan partai politik, organisasi sayap, dan turunannya.",
    "Tidak sedang dikenai atau memiliki riwayat sanksi akademik ITB atau sedang berada dalam kasus pelanggaran akademik ITB.",
    "Tidak dikenai sanksi organisasi KM ITB.",
    "Bersedia menaati aturan yang ditetapkan oleh Kongres, serta tata cara dan petunjuk pelaksanaan yang ditentukan oleh Panitia Pelaksana.",
    "Melaksanakan syarat pengunduran diri sesuai dengan ketentuan yang ditentukan oleh Panitia Pelaksana dan disetujui oleh Kongres, apabila di masa depan Kandidat ingin mengundurkan diri."
  ]
  const isValidNim = () => {
    return nim.length === 8
  }

  const submitNIM = async () => {
    console.log(nim)
    if (isValidNim()) {
      // Store NIM pengguna
      let response = await fetch(`${defaultAPIURL}/download-berkas/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nim,
          tipe
        })
      })
      response = response.json()
      console.log(response)

      // Alihkan ke link google drive
      const url = "https://drive.google.com/file/d/1PG91qKUEfub-6a2uDqHYIrIWqPb92ugH/view"
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null

      alert("Anda telah berhasil submit NIM Anda, silakan unduh berkas di link Drive yang dibuka")
    } else {
      alert("NIM tidak valid!")
    }
  }

  return (
    <div className={`persyaratan ${tipe}`}>
      <p className="syarat-title">Persyaratan Calon {tipe}</p>
      {tipe === "K3M"
          ? <ol className="list-syarat">
              {syaratKandidat.map((item, index) => {
                return (
                    <li className="item-syarat" key={index}>{item}</li>
                )
              })}
              {syaratK3M.map((item, index) => {
                return (
                    <li className="item-syarat" key={index}><b>{item}</b></li>
                )
              })}
            </ol>
          : <ol className="list-syarat">
            {syaratKandidat.map((item, index) => {
              return (
                  <li className="item-syarat" key={index}>{item}</li>
              )
            })}
            {syaratMWA.map((item, index) => {
              return (
                <li className="item-syarat" key={index}><b>{item}</b></li>
              )
            })}
          </ol>}

      <div className="form-container">
        <div className="input-container">
          <input type="text" name={tipe} id="nim" placeholder="NIM Kamu berapa?" value={nim} onChange={e => setNim(e.target.value)} />
        </div>

        <div className="btn-container">
          <Button file="ambil-berkas-v2" onClick={submitNIM} />
        </div>
      </div>
    </div>
  )
}

export default Persyaratan
