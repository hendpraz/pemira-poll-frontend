import React, {useState, useEffect} from 'react'
import Footer from 'components/Footer'
import DarkBlue from 'layouts/DarkBlue'
import Button from 'components/Button'
import Authenticated from 'layouts/Authenticated'
import { listKandidatDukungan, dukungKandidat } from 'resources/user'
import { useAppContext } from 'libs/contextLib'

import '../../styles/pages/Dukungan.scss'
import NavLoggedIn from 'components/Navbar/NavLoggedIn'

const LembarDukungan = (props) => {

    const [candidates, setCandidates] = useState([])

    const {user} = useAppContext()
    const [pageUser, setPageUser] = useState({})

    useEffect(() => {
        if (user) {
            setPageUser(user)
        }
    }, [user])

    useEffect(() => {
        async function loadCandidates() {
            try {
                let response = await listKandidatDukungan()                
                setCandidates(response)
            } catch (e) {
                console.log(e)
            }
        }

        async function onLoad() {
            loadCandidates()
        }

        onLoad()
    }, [])

    const handleSubmit = async (e, index) =>{
        e.preventDefault();
        const candidate = candidates[index]
        const r = window.confirm(`Apakah Anda yakin akan memberi dukungan untuk kandidat ${candidate.fullname}?`)
        if (r) {
            const formname = `dukungan-${index}`
            const form = document.forms[formname]
            let scriptURL = "https://script.google.com/macros/s/AKfycbxesL1pljDg4e9XODi21hDMumP7vfKN1cj7KtsxbnMZgmKrAaQTLOkH/exec"
            const body = new FormData(form)
    
            const res = await dukungKandidat(candidate.id)
            console.log(res.status)

            if (res.status !== 200) {
                if (res.status == 403) {
                    alert("Tidak berhasil. Anda tidak memiliki hak untuk mendukung kandidat.")
                } else {
                    alert("Tidak berhasil. Silakan coba kembali.")
                }
            } else {
                await fetch(scriptURL,
                    {
                        method: 'POST',
                        body
                    })
                    .then(response => console.log('Success!', response))
                    .catch(error => console.error('Error!', error.message))

                form.reset()
                window.location.reload()
                alert("Berhasil beri dukungan")
            }
        }
    }

    return(
        <Authenticated>
            <div className="mainContainer">
                <div className="myContent dukungan">
                    <DarkBlue />
                    <NavLoggedIn logo={false}/>
                    <h1 className="title-dukungan">Lembar Dukungan</h1>
                    <ul>
                        {
                            candidates && pageUser
                            ? <>
                                {
                                    candidates.map((item, index) => {
                                        return (
                                        <li key={`list-dukungan-${index}`}>
                                            <form name={`dukungan-${index}`} >
                                                <div>
                                                    <h3>{`${item.fullname} - ${item.ou} ${item.angkatan} - ${item.tipe_kandidat}`}</h3> 
                                                    <div className="flex-right">
                                                        { item.is_supported 
                                                        ? <p>Telah Anda dukung.</p>
                                                        : <Button file="dukung-btn" onClick={e => handleSubmit(e, index)}/>
                                                        }
                                                    </div>
                                                </div>
                                                <input type="hidden" name="name" value={pageUser.fullname}/>
                                                <input type="hidden" name="nim" value={pageUser.nim}/>
                                                <input type="hidden" name="dukung" value={item.fullname + ' - ' + item.ou}/>
                                            </form>
                                        </li>
                                        )
                                    })
                                }
                            </>
                            : <p>Tidak ada kandidat.</p>
                        }
                    </ul>
                </div>
               <Footer hashtag="false" />
            </div>
        </Authenticated>
    )
}

export default LembarDukungan;