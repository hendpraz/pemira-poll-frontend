import React, {useState} from 'react'
import config from 'config'
import 'styles/pages/Vote.scss'
import Priority from 'components/Vote/Priority'
import Footer from 'components/Footer'
import Button from 'components/Button'
import ModalSubmit from 'components/Vote/ModalSubmit'
import presKM from 'components/Carousel/presKM'

const VoteAfter = () => {
    const {assetsURL: {
            image
        }} = config

    const openModal = () => {
        let modalUnggah = document.getElementById("konfirmasiCoblos")
        modalUnggah.style.display = "block"
    }

    const [calon,
        setCalon] = useState(presKM);

    const [myCalon, setMyCalon] = useState([]);

    console.log(myCalon)

    const pilihCalon = (e) => {
        let src = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.src;
        let sourceImage = src
            .slice(21, src.length)
            .replace("%20", " ");
        let chosenCalon = calon.filter(item => {
            return item.url === sourceImage
        })

        setCalon(calon.filter(item => item.url !== sourceImage))
        setMyCalon([...myCalon, chosenCalon[0]])
    }


    return (
        <div className="main-container">
            <div className="vote-page is-flex">
                <div className="vote-left">
                    <div
                        className="background-image"
                        style={{
                        backgroundImage: `url('${image}/Scroll medium 2.png')`
                    }}>
                        <div className="pemilihan-k3m">
                            <h2>Pemilihan K3M</h2>
                            <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[0]} no={1}/>
                            <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[1]} no={2}/>
                            <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[2]} no={3}/>
                            <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[3]} no={4}/>
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
                            <h2>Hafid Abi D</h2>
                            <h5>13519371</h5>
                            <hr/>
                            <div className="has-text-left">
                                <p>total calon:</p>
                                <p>kandidat diurutkan:</p>
                                <p>Ada captcha disini</p>
                            </div>
                            <Button file="submit" onClick={openModal}/>
                            <Button file="reset"/>
                            <Button file="batal"/>
                        </div>
                    </div>
                </div>
            </div>
            <ModalSubmit/>
            <Footer/>
        </div>
    )
}

export default VoteAfter
