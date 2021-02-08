import React, {useRef, useState} from 'react'
import Button from 'components/Button'
import { useHistory } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha"
import { createAnswer } from "resources/question"

const ModalSubmit = ({prefsString, prefIds, user, questionId}) => {

    const history = useHistory()
    const recaptchaRef = useRef()
    const [isAgree, setIsAgree] = useState(false)
    const [captchaSolved, setCaptchaSolved] = useState(false)

    const closeModal = () => {
        var modal = document.getElementById(`konfirmasiCoblos`)

        modal.style.display = "none"
    }

    const submitVote = async () => {
        if (isAgree && captchaSolved) {
            try {
                const data = {
                    answerer: user.id,
                    preferences: prefIds,
                    question: questionId
                }

                console.log(data)
                let response
                response = await createAnswer(data)
                console.log(response.data)

                const { status } = response
                if (status >= 200 && status < 300) {
                    alert("Jawaban telah diterima")
                history.push('/profile')
                window.location.reload()
                } else {
                    alert("Tidak berhasil. Silakan coba kembali")
                }
            } catch (error) {
                alert("Ada masalah. Silakan coba kembali.")
            }
        } else {
            alert("Anda belum menyetujui pernyataannya dan/atau menyelesaikan captcha.")
        }
    }

    function onSolve(value) {
        console.log("Captcha value:", value)
        setCaptchaSolved(true)
    }

    return (
        <div>
            <div id="konfirmasiCoblos" className="modal konfirmasi-coblos">
                <div className="modal-content add-quest-content blue">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <h3>Konfirmasi Pilihan</h3>
                    <hr/>
                    <br/>
                    <div className="coblos-content">
                        <p>Saya {user.fullname} / {user.nim} akan memilih preferensi opsi {prefsString} atas
                        inisiatif saya sendiri dan tanpa dipaksa.
                            <br/>
                            <br/>
                            Segala keputusan Anda tidak dapat diubah lagi ketika sudah klik setuju.
                        </p>
                        <div className="setuju-coblos">
                            <input id="setujuCoblos" type="checkbox" checked={isAgree} onChange={() => setIsAgree(!isAgree)}/>
                            <label forhtml="setujuCoblos">Saya setuju dengan pernyataan diatas</label>
                        </div>
                    </div>
                    <div className="mycaptcha" style={{marginLeft: "auto", marginRight: "auto", width: "50%", paddingTop: "10px"}}>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6Lc9-EMaAAAAAHUlDptobHxG9aRCgx0SToMlyJgD"
                            onChange={onSolve}
                        />
                    </div>

                    <div className="container">
                        <Button file="submit" onClick={submitVote} />
                        <Button file="batal-merah" onClick={closeModal}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalSubmit