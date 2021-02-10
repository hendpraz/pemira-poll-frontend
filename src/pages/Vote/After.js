import React, {useState, useEffect} from 'react'
import config from 'config'
import 'styles/pages/Vote.scss'
import Priority from 'components/Vote/Priority'
import Footer from 'components/Footer'
import Button from 'components/Button'
import ModalSubmit from 'components/Vote/ModalSubmit'
import { useAppContext } from 'libs/contextLib'
import { useHistory } from 'react-router-dom'
import MassaOnly from 'layouts/MassaOnly'
import { listKandidatK3M, listKandidatMWAWM} from 'resources/user'

const VoteAfter = ({tipe}) => {
    const {assetsURL: {
            image
        }} = config

    const openModal = () => {
        if (allCalon.length > myCalon.length) {
            alert("Anda belum memilih urutan untuk semua calon!")
        } else {
            let modalUnggah = document.getElementById("konfirmasiCoblos")
            modalUnggah.style.display = "block"
        }
    }

    const history = useHistory()
    const { user } = useAppContext()
    const [pageUser, setPageUser] = useState({})
    const [canVote, setCanVote] = useState(false)

    useEffect(() => {
        if (user && history) {
            setPageUser(user)

            // set canVote here
            let canVoteCondition = false
            if (tipe === "k3m") {
                canVoteCondition = (user.vote_k3m_status === "notyet")
            } else { // tipe === "mwa"
                canVoteCondition = (user.vote_mwa_status === "notyet")
            }

            if (canVoteCondition) {
                setCanVote(canVoteCondition)
            } else {
                alert(`Anda sudah tidak dapat melakukan vote ${tipe === "k3m" ? "K3M" : "MWA-WM"}.`)
                history.push("/profile")
            }
        }
    }, [user, history, tipe])

    useEffect(() => {
        async function loadCandidates() {
            try {
                let response
                
                if (tipe === "k3m") {
                    response = await listKandidatK3M()
                } else {
                    response = await listKandidatMWAWM()
                }

                console.log(response)
                const kotakKosong = {
                    id: "Kotak Kosong",
                    username: "KotakKosong",
                    fullname: `Kotak Kosong`,
                    photo_url: `${image}/Koin 2.png`
                }

                response.push(kotakKosong)
                
                setAllCalon(response)
                setCalon(response)
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadCandidates()
        }
        
        onLoad()
    }, [tipe, image])

    const [prefsString, setPrefsString] = useState("-")
    const [prefIds, setPrefIds] = useState("-")
    const [calon, setCalon] = useState([])
    const [myCalon, setMyCalon] = useState([])
    const [allCalon, setAllCalon] = useState([])

    const pilihCalon = (e) => {
        // let src = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.src;
        // let sourceImage = src
        //     .slice(21, src.length)
        //     .replace("%20", " ");

        let imgId = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.id;
        let chosenCalon = calon.filter(item => {
            return item.id === imgId
        })

        console.log("Selecting calon...")
        console.log(chosenCalon)

        const calonList = calon.filter(item => item.id !== imgId)
        setCalon(calonList)

        const newMyCalonArray = [...myCalon, chosenCalon[0]]
        setMyCalon(newMyCalonArray)

        console.log(calonList)
        console.log(newMyCalonArray)

        let tempPrefsString = ""
        let tempPrefIds = ""

        const n = newMyCalonArray.length
        let count = 0
        for (let i = 0; i < n; i++) {   
            const element = newMyCalonArray[i];
            if (count === 0) {
                tempPrefsString += `(${i+1}). ${element.fullname}`
                tempPrefIds += `${element.username}`
            } else {
                tempPrefsString += ` - (${i+1}). ${element.fullname}` 
                tempPrefIds += `->${element.username}`
            }
            count += 1
        }
        setPrefIds(tempPrefIds)
        setPrefsString(tempPrefsString)
    }

    const reset = () => {
        if (allCalon) {
            setMyCalon([]);
            setCalon(allCalon);
        }
    }

    return (
        <MassaOnly>
            {
                canVote && calon &&
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
                                        <p>Total calon: {allCalon.length}</p>
                                        <p>Kandidat diurutkan: {myCalon.length}</p>
                                    </div>
                                    <Button file="submit" onClick={openModal}/>
                                    <Button file="reset" onClick={reset}/>
                                    <Button file="batal"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalSubmit prefsString={prefsString} prefIds={prefIds} user={pageUser} tipe={tipe}/>
                    <Footer/>
                </div>
            }
        </MassaOnly>
    )
}

export default VoteAfter
