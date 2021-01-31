import React, {useState, useEffect} from 'react'
import config from 'config'
import 'styles/pages/Vote.scss'
import Priority from 'components/Vote/Priority'
import Footer from 'components/Footer'
import Button from 'components/Button'
import ModalSubmit from 'components/Vote/ModalSubmit'
import presKM from 'components/Carousel/presKM'
import { useAppContext } from 'libs/contextLib'
import Authenticated from 'layouts/Authenticated'

const VoteAfter = ({tipe}) => {
    const {assetsURL: {
            image
        }} = config

    const openModal = () => {
        if (presKM.length > myCalon.length) {
            alert("Anda belum memilih urutan untuk semua calon!")
        } else {
            let modalUnggah = document.getElementById("konfirmasiCoblos")
            modalUnggah.style.display = "block"
        }
    }

    const { user } = useAppContext()
    const [pageUser, setPageUser] = useState({})

    useEffect(() => {
        if (user) {
            setPageUser(user)
        }
    }, [user])

    const [prefsString, setPrefsString] = useState("-")
    const [calon, setCalon] = useState(presKM)
    const [myCalon, setMyCalon] = useState([])

    const pilihCalon = (e) => {
        let src = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.src;
        let sourceImage = src
            .slice(21, src.length)
            .replace("%20", " ");
        let chosenCalon = calon.filter(item => {
            return item.photo_url === sourceImage
        })

        setCalon(calon.filter(item => item.photo_url !== sourceImage))

        const newMyCalonArray = [...myCalon, chosenCalon[0]]
        setMyCalon(newMyCalonArray)

        console.log(newMyCalonArray)

        let tempPrefsString = ""

        const n = newMyCalonArray.length
        for (let i = 0; i < n; i++) {   
            const element = newMyCalonArray[i];
            if (i === 0){
                tempPrefsString += `${i+1}. ${element.fullname}` 
            } else {
                tempPrefsString += ` - ${i+1}. ${element.fullname}` 
            }       
        }
        setPrefsString(tempPrefsString)
    }

    const reset = () => {
        setMyCalon([]);
        setCalon(presKM);
    }

    return (
        <Authenticated>
            <div className="main-container">
                <div className="vote-page is-flex">
                    <div className="vote-left">
                        <div
                            className="background-image"
                            style={{
                            backgroundImage: `url('${image}/Scroll medium 2.png')`
                        }}>
                            <div className="pemilihan-k3m">
                                <h2>Pemilihan {tipe === "k3m" ? "K3M" : "MWA-WM"}</h2>
                                <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[0]} no={1} reset={reset}/>
                                <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[1]} no={2} reset={reset}/>
                                <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[2]} no={3} reset={reset}/>
                                <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[3]} no={4} reset={reset}/>
                            </div>
                        </div>
                    </div>
                    <div className="vote-right">
                        <div
                            className="background-image"
                            style={{
                            backgroundImage: `url('${image}/hahahay.png')`
                        }}>
                            <div className="vote-right-content">
                                <h2>{pageUser.fullname}</h2>
                                <h5>{pageUser.nim}</h5>
                                <hr/>
                                <div className="has-text-left">
                                    <p>Total calon:</p>
                                    <p>Kandidat diurutkan: </p>
                                    <p>Ada captcha disini</p>
                                </div>
                                <Button file="submit" onClick={openModal}/>
                                <Button file="reset" onClick={reset}/>
                                <Button file="batal"/>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalSubmit prefsString={prefsString} user={pageUser}/>
                <Footer/>
            </div>
        </Authenticated>
    )
}

export default VoteAfter
