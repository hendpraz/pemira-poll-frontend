import React, {useState, useEffect} from 'react'
import config from 'config'
import 'styles/pages/Vote.scss'
import Priority from 'components/Question/Priority'
import Footer from 'components/Footer'
import Button from 'components/Button'
import ModalSubmit from 'components/Question/ModalSubmit'
import { useAppContext } from 'libs/contextLib'
import { useHistory, useParams } from 'react-router-dom'
import MassaOnly from 'layouts/MassaOnly'
import { getQuestionDetails } from 'resources/question'

const Question = ({match}) => {
    const {assetsURL: {
            image
        }} = config

    const openModal = () => {
        if (allCalon.length !== myCalon.length) {
            alert("Anda belum memilih urutan untuk semua opsi!")
        } else {
            let modalUnggah = document.getElementById("konfirmasiCoblos")
            modalUnggah.style.display = "block"
        }
    }
    let { id } = useParams()
    const questionId = id

    const history = useHistory()
    const { user } = useAppContext()
    const [pageUser, setPageUser] = useState({})
    const [canVote, setCanVote] = useState(false)
    const [prefsString, setPrefsString] = useState("-")
    const [prefIds, setPrefIds] = useState("-")

    const [calon, setCalon] = useState([])
    const [myCalon, setMyCalon] = useState([])
    const [allCalon, setAllCalon] = useState([])

    const [question, setQuestion] = useState({})

    useEffect(() => {
        if (user && history) {
            setPageUser(user)
        }
    }, [user, history])

    useEffect(() => {
        async function loadCandidates() {
            try {
                let tempChoices
                const response = await getQuestionDetails(questionId)

                const tempQuestion = response.data
                const status = response.status

                if (status >= 200 && status < 400) {
                    // set canVote here
                    let canVoteCondition = !tempQuestion.is_answered

                    if (canVoteCondition) {
                        setCanVote(canVoteCondition)
                        setQuestion(tempQuestion)

                        tempChoices = tempQuestion.choices.split(";")

                        setAllCalon(tempChoices)
                        setCalon(tempChoices)
                    } else {
                        alert(`Anda sudah tidak dapat menjawab pertanyaan ini.`)
                        history.push("/profile")
                    }
                } else {
                    alert(tempQuestion.message ? tempQuestion.message : "Terjadi kesalahan. Silakan coba kembali.")
                    history.push("/profile")
                }
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadCandidates()
        }
        
        onLoad()
    }, [])

    const pilihCalon = (e) => {
        let imgId = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.id;
        let chosenCalon = calon.filter(item => {
            return item === imgId
        })

        console.log("Selecting calon...")
        console.log(chosenCalon)

        const calonList = calon.filter(item => item !== imgId)
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
                tempPrefsString += `(${i+1}). ${element}`
                tempPrefIds += `${element}`
            } else {
                tempPrefsString += ` - (${i+1}). ${element}` 
                tempPrefIds += `&${element}`
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
                                    <h2>{question.judul}</h2>

                                    {
                                        allCalon.map((item, index) => {
                                            return (
                                                <Priority pilihCalon={pilihCalon} calon={calon} value={myCalon[index]} no={index+1} reset={reset}/>
                                            )
                                        })
                                    }
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
                                        <p>Total pilihan: {allCalon.length}</p>
                                        <p>Pilihan diurutkan: {myCalon.length}</p>
                                    </div>
                                    <Button file="submit" onClick={openModal}/>
                                    <Button file="reset" onClick={reset}/>
                                    <Button file="batal"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalSubmit prefsString={prefsString} prefIds={prefIds} user={pageUser} questionId={questionId}/>
                    <Footer/>
                </div>
            }
        </MassaOnly>
    )
}

export default Question
